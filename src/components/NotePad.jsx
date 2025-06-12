import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { X, Calculator } from 'lucide-react';
import { addStyles, EditableMathField } from 'react-mathquill';

// Initialize MathQuill styles once
addStyles();

export default function Notepad({ onClose }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [equations, setEquations] = useState({}); // Store equation states by ID
  const notepadRef = useRef(null);
  const contentRef = useRef(null);
  const equationCounter = useRef(0);

  useEffect(() => {
    const node = notepadRef.current;
    if (!node) return;

    // Center the notepad initially
    if (position.x === 0 && position.y === 0) {
      const { innerWidth, innerHeight } = window;
      const { offsetWidth, offsetHeight } = node;
      setPosition({
        x: (innerWidth - offsetWidth) / 2,
        y: (innerHeight - offsetHeight) / 3,
      });
    }

    // Drag handler
    const handleMouseDown = (e) => {
      if (e.target.closest('.mq-editable-field')) return; // Don't drag when clicking math
      e.preventDefault();
      
      const startPos = { x: e.clientX, y: e.clientY };
      const startNodePos = { ...position };

      const handleMouseMove = (moveE) => {
        const dx = moveE.clientX - startPos.x;
        const dy = moveE.clientY - startPos.y;
        
        // Calculate new position
        let newX = startNodePos.x + dx;
        let newY = startNodePos.y + dy;
        
        // Get window dimensions
        const { innerWidth, innerHeight } = window;
        const { offsetWidth, offsetHeight } = node;
        
        // Boundary checking - keep notepad on screen
        newX = Math.max(0, Math.min(newX, innerWidth - offsetWidth));
        newY = Math.max(0, Math.min(newY, innerHeight - offsetHeight));
        
        setPosition({ x: newX, y: newY });
      };

      const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    };

    const header = node.querySelector('#notepad-header');
    header.addEventListener('mousedown', handleMouseDown);

    return () => {
      header.removeEventListener('mousedown', handleMouseDown);
    };
  }, [position]);

  // Create equation element
  const createEquationElement = (equationId) => {
    const wrapper = document.createElement('span');
    wrapper.className = 'inline-math-wrapper';
    wrapper.setAttribute('data-equation-id', equationId);
    wrapper.contentEditable = 'false';
    
    // Create a temporary div to render React component
    const tempDiv = document.createElement('div');
    wrapper.appendChild(tempDiv);
    
    return wrapper;
  };

  // Insert equation at cursor position
  const insertEquation = () => {
    const selection = window.getSelection();
    if (!selection.rangeCount) return;
    
    const range = selection.getRangeAt(0);
    
    // Create equation wrapper
    const equationId = `eq-${equationCounter.current++}`;
    const wrapper = createEquationElement(equationId);
    
    // Insert at cursor
    range.insertNode(wrapper);
    
    // Initialize equation state
    setEquations(prev => ({
      ...prev,
      [equationId]: { latex: '', focused: true }
    }));

    // Add space after equation and move cursor there
    const space = document.createTextNode('\u00A0');
    wrapper.after(space);
    
    // Move cursor after the space
    const newRange = document.createRange();
    newRange.setStartAfter(space);
    newRange.setEndAfter(space);
    selection.removeAllRanges();
    selection.addRange(newRange);
  };

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ctrl/Cmd + M to insert equation
      if ((e.ctrlKey || e.metaKey) && e.key === 'm') {
        e.preventDefault();
        if (contentRef.current && 
            (contentRef.current.contains(document.activeElement) || 
             contentRef.current === document.activeElement)) {
          insertEquation();
        }
      }
      
      // Handle backspace near equations
      if (e.key === 'Backspace') {
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
          const range = selection.getRangeAt(0);
          const container = range.commonAncestorContainer;
          
          // Check if we're right after an equation
          if (container.nodeType === Node.TEXT_NODE && 
              container.previousSibling?.classList?.contains('inline-math-wrapper')) {
            if (range.startOffset === 0) {
              e.preventDefault();
              const equation = container.previousSibling;
              const eqId = equation.getAttribute('data-equation-id');
              equation.remove();
              // Update state to remove equation
              setEquations(prev => {
                const next = { ...prev };
                delete next[eqId];
                return next;
              });
            }
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleContentClick = (e) => {
    // Unfocus all equations first
    setEquations(prev => {
      const next = { ...prev };
      Object.keys(next).forEach(key => {
        next[key] = { ...next[key], focused: false };
      });
      return next;
    });

    // If clicking on equation wrapper, focus it
    const wrapper = e.target.closest('.inline-math-wrapper');
    if (wrapper) {
      e.preventDefault();
      const eqId = wrapper.getAttribute('data-equation-id');
      setEquations(prev => ({
        ...prev,
        [eqId]: { ...prev[eqId], focused: true }
      }));
    }
  };

  // Render equations after state updates
  useEffect(() => {
    if (!contentRef.current) return;

    // Update all equation elements
    Object.entries(equations).forEach(([equationId, equationState]) => {
      const wrapper = contentRef.current.querySelector(`[data-equation-id="${equationId}"]`);
      if (wrapper && wrapper.children.length === 0) {
        // Clear wrapper and add the math field
        wrapper.innerHTML = '';
        const mathContainer = document.createElement('span');
        wrapper.appendChild(mathContainer);
      }
    });
  }, [equations]);

  return (
    <motion.div
      ref={notepadRef}
      className="fixed bg-slate-800/95 backdrop-blur-xl border border-slate-700 rounded-xl shadow-2xl z-50 flex flex-col"
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`, 
        width: '400px' 
      }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
    >
      {/* Header */}
      <div
        id="notepad-header"
        className="flex items-center justify-between p-3 bg-slate-900/50 rounded-t-xl cursor-move select-none
                   hover:bg-slate-900/70 transition-colors group"
        title="Drag to move"
      >
        <div className="flex items-center gap-2 text-slate-300 font-medium">
          <Calculator size={16} className="group-hover:text-blue-400 transition-colors" />
          <span>Scratchpad</span>
        </div>
        <motion.button 
          onClick={onClose} 
          className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-700/50 hover:text-slate-200 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <X size={16} />
        </motion.button>
      </div>

      {/* Content Area */}
      <div className="p-1">
        <div
          ref={contentRef}
          className="min-h-[300px] max-h-[400px] overflow-y-auto bg-slate-900/50 text-slate-200 
                     focus:outline-none font-sans text-sm p-4 rounded-lg border border-slate-700/50 
                     focus:border-blue-500/50 transition-colors cursor-text notepad-content"
          contentEditable
          onClick={handleContentClick}
          suppressContentEditableWarning
          style={{ 
            lineHeight: '1.8',
            wordBreak: 'break-word',
          }}
          onPaste={(e) => {
            // Handle paste to maintain plain text
            e.preventDefault();
            const text = e.clipboardData.getData('text/plain');
            document.execCommand('insertText', false, text);
          }}
        />
      </div>

      {/* Footer hint */}
      <div className="px-4 pb-3">
        <div className="text-xs text-slate-500 flex items-center justify-between">
          <span>
            <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-600 rounded text-[10px]">Ctrl</kbd>
            <span className="mx-1">+</span>
            <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-600 rounded text-[10px]">M</kbd>
            <span className="ml-1.5">Insert equation</span>
          </span>
        </div>
      </div>

      {/* Render MathQuill fields for each equation */}
      {Object.entries(equations).map(([equationId, equationState]) => (
        <div key={equationId} style={{ display: 'none' }}>
          <EditableMathField
            latex={equationState.latex}
            onChange={(mathField) => {
              setEquations(prev => ({
                ...prev,
                [equationId]: { ...prev[equationId], latex: mathField.latex() }
              }));
            }}
            config={{
              spaceBehavesLikeTab: true,
              leftRightIntoCmdGoes: 'up',
              restrictMismatchedBrackets: true,
              autoCommands: 'pi theta sqrt sum alpha beta gamma delta sigma',
              autoOperatorNames: 'sin cos tan log ln exp',
              // CHANGED: Added a handler to delete the equation box on backspace when empty
              handlers: {
                deleteOutOf: (dir, mathField) => {
                  if (dir === -1 && mathField.latex() === '') {
                    // Backspace at the start of an empty field
                    const wrapper = contentRef.current?.querySelector(`[data-equation-id="${equationId}"]`);
                    if (wrapper) {
                      const selection = window.getSelection();
                      if (selection) {
                          const range = document.createRange();
                          range.setStartBefore(wrapper);
                          range.collapse(true);
                          selection.removeAllRanges();
                          selection.addRange(range);
                      }
                      wrapper.remove();
                    }
                    setEquations(prev => {
                      const next = { ...prev };
                      delete next[equationId];
                      return next;
                    });
                  }
                }
              }
            }}
            mathquillDidMount={(mathField) => {
              // Find the wrapper and insert the mathfield
              const wrapper = contentRef.current?.querySelector(`[data-equation-id="${equationId}"]`);
              if (wrapper && wrapper.firstChild) {
                wrapper.firstChild.appendChild(mathField.el());
                if (equationState.focused) {
                  mathField.focus();
                }
              }
            }}
          />
        </div>
      ))}

      {/* Inline styles for better integration */}
      <style jsx global>{`
        .notepad-content:empty:before {
          content: "Type your notes here...\\A\\APress Ctrl+M to insert math";
          white-space: pre;
          color: #64748b;
          pointer-events: none;
          position: absolute;
        }

        .inline-math-wrapper {
          display: inline-block;
          margin: 0 3px;
          vertical-align: middle;
          position: relative;
        }
        
        .inline-math-wrapper .mq-editable-field {
          display: inline-block;
          padding: 3px 8px;
          background: rgba(59, 130, 246, 0.08);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 6px;
          min-width: 30px;
          transition: all 0.15s ease;
        }
        
        .inline-math-wrapper .mq-editable-field:focus,
        .inline-math-wrapper .mq-editable-field.mq-focused {
          background: rgba(59, 130, 246, 0.12);
          border-color: rgba(59, 130, 246, 0.4);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        
        .inline-math-wrapper .mq-editable-field * {
          color: #e2e8f0 !important;
        }
        
        .mq-cursor {
          border-color: #3b82f6 !important;
          animation: mq-blink 1s infinite;
        }
        
        @keyframes mq-blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        /* Dark theme overrides for MathQuill */
        .mq-editable-field .mq-root-block,
        .mq-editable-field var,
        .mq-editable-field span {
          color: #e2e8f0 !important;
        }
        
        .mq-editable-field .mq-selection,
        .mq-editable-field .mq-selection .mq-non-leaf,
        .mq-editable-field .mq-selection .mq-scaled {
          background: rgba(59, 130, 246, 0.3) !important;
          color: #e2e8f0 !important;
        }
      `}</style>
    </motion.div>
  );
}