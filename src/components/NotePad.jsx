import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { X, Calculator } from 'lucide-react';

// A simple and safe evaluation function for basic arithmetic
const calculateExpression = (expr) => {
  try {
    if (!/^[0-9\.\s\+\-\*\/]+$/.test(expr)) {
      return null;
    }
    const result = new Function(`return ${expr}`)();
    return Math.round(result * 10000) / 10000;
  } catch (error) {
    return null;
  }
};

export default function Notepad({ onClose }) {
  const [content, setContent] = useState('');
  const [suggestion, setSuggestion] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const notepadRef = useRef(null);

  useEffect(() => {
    const node = notepadRef.current;
    if (!node) return;

    // Center the notepad initially if it's at 0,0
    if (position.x === 0 && position.y === 0) {
      const { innerWidth, innerHeight } = window;
      const { offsetWidth, offsetHeight } = node;
      setPosition({
        x: (innerWidth - offsetWidth) / 2,
        y: (innerHeight - offsetHeight) / 3,
      });
    }

    const handleMouseDown = (e) => {
      // Prevent text selection while dragging
      e.preventDefault(); 
      
      const startPos = { x: e.clientX, y: e.clientY };
      // `position` is now guaranteed to be up-to-date because of the dependency array
      const startNodePos = { ...position };

      const handleMouseMove = (moveE) => {
        const dx = moveE.clientX - startPos.x;
        const dy = moveE.clientY - startPos.y;
        setPosition({ x: startNodePos.x + dx, y: startNodePos.y + dy });
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
    // << THE CRUCIAL FIX: Add `position` to the dependency array >>
  }, [position]);

  const handleContentChange = (e) => {
    const newContent = e.target.value;
    setContent(newContent);
    const lines = newContent.split('\n');
    const currentLine = lines[lines.length - 1].trim();
    const mathRegex = /^(-?\d+(\.\d+)?)\s*([\+\-\*\/])\s*(-?\d+(\.\d+)?)$/;
    
    if (mathRegex.test(currentLine)) {
      const result = calculateExpression(currentLine);
      if (result !== null) {
        setSuggestion(`= ${result}`);
      } else {
        setSuggestion(null);
      }
    } else {
      setSuggestion(null);
    }
  };

  const handleKeyDown = (e) => {
    if ((e.key === 'Tab' || e.key === 'Enter') && suggestion) {
      e.preventDefault();
      setContent(prevContent => `${prevContent} ${suggestion}`);
      setSuggestion(null);
    }
  };

  return (
    <motion.div
      ref={notepadRef}
      className="fixed top-0 left-0 bg-slate-800/80 backdrop-blur-md border border-slate-600 rounded-lg shadow-2xl z-50 flex flex-col"
      style={{ x: position.x, y: position.y }}
      dragMomentum={false}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      <div
        id="notepad-header"
        className="flex items-center justify-between p-2 bg-slate-900/50 rounded-t-lg cursor-move"
      >
        <div className="flex items-center gap-2 text-slate-300 font-semibold">
          <Calculator size={16} />
          Scratchpad
        </div>
        <button onClick={onClose} className="p-1 rounded-full text-slate-400 hover:bg-slate-700 hover:text-white transition-colors">
          <X size={18} />
        </button>
      </div>

      <div className="p-2">
        <textarea
          value={content}
          onChange={handleContentChange}
          onKeyDown={handleKeyDown}
          className="w-80 h-64 bg-transparent text-slate-200 resize-none focus:outline-none font-mono text-sm p-2"
          placeholder="Type your notes here...
Try typing '2 + 2' and press Tab."
          autoFocus
        />
      </div>

      {suggestion && (
        <div className="p-2 text-xs text-slate-400 border-t border-slate-700">
          Press <kbd className="px-1.5 py-0.5 border border-slate-600 rounded bg-slate-900">Tab</kbd> or <kbd className="px-1.5 py-0.5 border border-slate-600 rounded bg-slate-900">Enter</kbd> to compute: <span className="font-bold text-blue-400">{suggestion}</span>
        </div>
      )}
    </motion.div>
  );
}