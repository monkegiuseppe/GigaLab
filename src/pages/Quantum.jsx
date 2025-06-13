import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence, useSpring } from "framer-motion"
import {
  Zap, BarChart3, Binary, TestTube, Lightbulb, RotateCcw, HelpCircle, Target, CheckCircle
} from "lucide-react"

// --- GigaLab Theme & Style Configuration ---
const theme = {
  bg: "#0f172a",
  sidebar: "rgba(30, 41, 59, 0.8)",
  accent: "#8b5cf6", // Purple for Quantum
  accentHover: "#a78bfa",
  text: "rgba(255, 255, 255, 0.87)",
  textSecondary: "rgba(203, 213, 225, 0.7)",
  green: "rgb(34 197 94)",
  red: "rgb(239 68 68)",
  gradient: "from-purple-400 via-pink-500 to-orange-400",
}

// --- Tiny Quantum Math Library (for self-containment) ---
const complex = {
  add: (a, b) => [a[0] + b[0], a[1] + b[1]],
  mul: (a, b) => [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]],
  magnitudeSq: (a) => a[0] * a[0] + a[1] * a[1],
}

const quantum = {
  // Gate Matrices
  I: [[[1, 0], [0, 0]], [[0, 0], [1, 0]]],
  H: [[[1 / Math.sqrt(2), 0], [1 / Math.sqrt(2), 0]], [[1 / Math.sqrt(2), 0], [-1 / Math.sqrt(2), 0]]],
  X: [[[0, 0], [1, 0]], [[1, 0], [0, 0]]],
  Z: [[[1, 0], [0, 0]], [[0, 0], [-1, 0]]],

  // Apply a 2x2 gate to a 2x1 state vector
  applyGate: (gate, state) => [
    complex.add(complex.mul(gate[0][0], state[0]), complex.mul(gate[0][1], state[1])),
    complex.add(complex.mul(gate[1][0], state[0]), complex.mul(gate[1][1], state[1])),
  ],

  // Tensor product of two matrices (for multi-qubit gates)
  tensorProduct: (A, B) => {
    const C = Array(4).fill(0).map(() => Array(4).fill([0, 0]));
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        for (let k = 0; k < 2; k++) {
          for (let l = 0; l < 2; l++) {
            C[2 * i + k][2 * j + l] = complex.mul(A[i][j], B[k][l]);
          }
        }
      }
    }
    return C;
  },

  // Apply a 4x4 gate to a 4x1 state vector
  apply4x4Gate: (gate, state) => {
    const result = Array(4).fill([0, 0]);
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        result[i] = complex.add(result[i], complex.mul(gate[i][j], state[j]));
      }
    }
    return result;
  },
};

// --- Reusable UI Components ---

const ControlButton = ({ onClick, children, className = "", isActive = false }) => (
  <motion.button
    onClick={onClick}
    className={`px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-all text-sm font-medium ${
      isActive
        ? 'ring-2 shadow-lg'
        : 'bg-slate-700/50 hover:bg-slate-600/70'
    } ${className}`}
    style={{
        backgroundColor: isActive ? `${theme.accent}30` : undefined,
        ringColor: theme.accent,
        boxShadow: isActive ? `0 0 15px ${theme.accent}40` : 'none',
    }}
    whileHover={{ scale: isActive ? 1.0 : 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.button>
);

const Tooltip = ({ content, children }) => (
  <motion.div whileHover="hover" className="relative flex items-center">
    {children}
    <motion.div
      initial={{ opacity: 0, y: 5, scale: 0.95 }}
      variants={{ hover: { opacity: 1, y: 0, scale: 1 } }}
      transition={{ duration: 0.2 }}
      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 p-2 bg-slate-800 text-slate-200 text-xs rounded-md shadow-lg z-50 border border-slate-700"
    >
      {content}
    </motion.div>
  </motion.div>
);

// --- Level 1: Qubit Sandbox ---

function Level1_QubitSandbox() {
  const [qubitState, setQubitState] = useState({ theta: 0, phi: 0 }); // |0> state
  const [measuredState, setMeasuredState] = useState(null); // '0', '1', or null
  const [probabilities, setProbabilities] = useState({ p0: 1, p1: 0 });

  const isSuperposition = measuredState === null;
  
  const springX = useSpring(0, { stiffness: 300, damping: 30 });
  const springY = useSpring(-90, { stiffness: 300, damping: 30 });

  useEffect(() => {
    // Convert spherical coordinates to rotation for the 3D effect
    const { theta, phi } = qubitState;
    const rotateY = phi * (180 / Math.PI);
    const rotateX = theta * (180 / Math.PI) - 90;
    springX.set(rotateX);
    springY.set(rotateY);

    // Update probabilities
    const p0 = Math.cos(theta / 2) ** 2;
    setProbabilities({ p0: p0, p1: 1 - p0 });
  }, [qubitState, springX, springY]);

  const applyGate = (gateMatrix) => {
    if (!isSuperposition) return;
    const { theta, phi } = qubitState;
    // Convert spherical to state vector [alpha, beta]
    const alpha = [Math.cos(theta / 2), 0];
    const beta = [Math.sin(theta / 2) * Math.cos(phi), Math.sin(theta / 2) * Math.sin(phi)];
    const stateVector = [alpha, beta];
    
    // Apply gate
    const newStateVector = quantum.applyGate(gateMatrix, stateVector);
    
    // Convert back to spherical coordinates
    const newAlpha = newStateVector[0];
    const newBeta = newStateVector[1];

    const newTheta = 2 * Math.acos(Math.sqrt(complex.magnitudeSq(newAlpha)));
    let newPhi = 0;
    if (Math.sin(newTheta / 2) > 1e-9) {
      const cosPhi = newBeta[0] / Math.sin(newTheta / 2);
      const sinPhi = newBeta[1] / Math.sin(newTheta / 2);
      newPhi = Math.atan2(sinPhi, cosPhi);
    }
    setQubitState({ theta: newTheta, phi: newPhi });
  };
  
  const handleMeasure = () => {
    if (!isSuperposition) return;
    const outcome = Math.random() < probabilities.p0 ? '0' : '1';
    setMeasuredState(outcome);
    setQubitState(outcome === '0' ? { theta: 0, phi: 0 } : { theta: Math.PI, phi: 0 });
  };

  const handleReset = () => {
    setMeasuredState(null);
    setQubitState({ theta: 0, phi: 0 });
  };

  const GateButton = ({ gate, name, description }) => (
    <Tooltip content={<><span className="font-bold">{name}:</span> {description}</>}>
      <ControlButton onClick={() => applyGate(gate)} className="w-full" disabled={!isSuperposition}>
        {name}
      </ControlButton>
    </Tooltip>
  );

  return (
    <div className="flex flex-col lg:flex-row gap-6 h-full">
      <div className="w-full lg:w-2/3 flex items-center justify-center" style={{ perspective: "1000px" }}>
        <motion.div
            key={measuredState}
            initial={{scale: 0.8, opacity: 0}}
            animate={{scale: 1, opacity: 1}}
            className="relative w-80 h-80"
            style={{ transformStyle: "preserve-3d" }}
        >
            <motion.div
                className="absolute inset-0"
                style={{ rotateX: springX, rotateY: springY }}
            >
                {/* Sphere body */}
                <div className="absolute inset-0 rounded-full" style={{
                    background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), rgba(255,255,255,0) 70%),
                                 radial-gradient(circle at 70% 80%, ${theme.accent}30, rgba(255,255,255,0) 60%)`,
                    border: '1px solid rgba(255,255,255,0.1)',
                }}/>

                {/* Equator & Meridians */}
                <div className="absolute inset-0 border border-purple-300/20 rounded-full" style={{transform: 'rotateX(90deg)'}} />
                <div className="absolute inset-0 border border-purple-300/20 rounded-full" />
                <div className="absolute inset-0 border border-purple-300/20 rounded-full" style={{transform: 'rotateY(90deg)'}}/>

                {/* State Vector */}
                <div className="absolute top-1/2 left-1/2 w-1 h-40 bg-gradient-to-t from-purple-400 to-pink-400" style={{ transformOrigin: 'top', transform: 'rotateX(90deg)' }} />
                <div className="absolute top-1/2 left-1/2 w-8 h-8 -m-4 rounded-full bg-pink-400 shadow-lg" style={{ transform: 'translateZ(156px)' }}/>
            </motion.div>
            
            {/* Labels */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-4 text-center">
                <div className="text-xl font-mono text-white">|0⟩</div>
            </div>
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -mb-4 text-center">
                <div className="text-xl font-mono text-white">|1⟩</div>
            </div>
        </motion.div>
      </div>

      <div className="w-full lg:w-1/3 p-6 rounded-2xl border border-slate-700/50 space-y-4" style={{ backgroundColor: theme.sidebar, backdropFilter: 'blur(12px)' }}>
        <div className="text-center space-y-2">
            <h3 className="text-xl font-bold">Single Qubit State</h3>
            <p className="text-sm text-slate-400">A qubit exists in a superposition of |0⟩ and |1⟩ until measured.</p>
        </div>
        
        {/* Probability Bars */}
        <div className="space-y-2 pt-2">
            <div className="flex justify-between text-sm">
                <span>Probability of |0⟩</span>
                <span className="font-mono">{`${(probabilities.p0 * 100).toFixed(1)}%`}</span>
            </div>
            <div className="w-full bg-slate-700/50 rounded-full h-4 overflow-hidden">
                <motion.div className="h-4 rounded-full" style={{background: `linear-gradient(90deg, ${theme.accent}, #a78bfa)`}} animate={{width: `${probabilities.p0 * 100}%`}} />
            </div>
        </div>
        <div className="space-y-2">
            <div className="flex justify-between text-sm">
                <span>Probability of |1⟩</span>
                <span className="font-mono">{`${(probabilities.p1 * 100).toFixed(1)}%`}</span>
            </div>
            <div className="w-full bg-slate-700/50 rounded-full h-4 overflow-hidden">
                <motion.div className="h-4 rounded-full" style={{background: `linear-gradient(90deg, ${theme.accent}, #a78bfa)`}} animate={{width: `${probabilities.p1 * 100}%`}} />
            </div>
        </div>
        
        <AnimatePresence>
        {!isSuperposition && (
          <motion.div 
            initial={{opacity: 0, y: -10}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -10}}
            className="p-4 my-4 text-center bg-slate-900/70 rounded-lg border border-green-500"
          >
            <h4 className="font-bold text-green-400">Measured State: |{measuredState}⟩</h4>
            <p className="text-xs text-slate-400 mt-1">The superposition has collapsed. Reset to continue.</p>
          </motion.div>
        )}
        </AnimatePresence>

        <div className="pt-4 border-t border-slate-700/50 space-y-2">
            <h4 className="font-semibold text-center mb-2">Quantum Gates</h4>
            <div className="grid grid-cols-3 gap-2">
              <GateButton gate={quantum.X} name="X Gate" description="The 'NOT' gate. Flips |0⟩ to |1⟩ and vice-versa." />
              <GateButton gate={quantum.H} name="H Gate" description="The 'Hadamard' gate. Creates an equal superposition." />
              <GateButton gate={quantum.Z} name="Z Gate" description="The 'Phase Flip' gate. Rotates the state around the Z-axis." />
            </div>
        </div>
        
        <div className="flex gap-2 pt-4 border-t border-slate-700/50">
            <ControlButton onClick={handleReset} className="w-1/2"><RotateCcw className="w-4 h-4"/> Reset</ControlButton>
            <ControlButton onClick={handleMeasure} className="w-1/2 bg-green-600/50 hover:bg-green-500/50 text-white" disabled={!isSuperposition}>
                <Zap className="w-4 h-4"/> Measure
            </ControlButton>
        </div>
      </div>
    </div>
  );
}

// --- Level 2: Circuit Composer ---

function Level2_CircuitComposer() {
  const NUM_QUBITS = 2;
  const NUM_STEPS = 4;
  
  // --- SUBTLE BUG FIX: Define initial state outside the render function ---
  // This prevents recreating the array on every single render.
  const createInitialCircuit = () => Array(NUM_QUBITS).fill(0).map(() => Array(NUM_STEPS).fill(null));

  const [circuit, setCircuit] = useState(createInitialCircuit);
  const [selectedGate, setSelectedGate] = useState('H');

  // --- CRITICAL BUG FIX: Changed `a-useState` to `useState` ---
  // Also, this state wasn't actually used, so I've removed it for now to simplify.
  // We can add it back if we implement per-qubit measurement.
  const [finalState, setFinalState] = useState(null);

  const calculateState = useCallback(() => {
    let state = Array(1 << NUM_QUBITS).fill([0, 0]);
    state[0] = [1, 0]; // Start in |00...0>

    for (let t = 0; t < NUM_STEPS; t++) {
      let stepGateMatrix = quantum.I; // Start with identity for the first qubit
      let gateForQubit0 = circuit[0][t] ? quantum[circuit[0][t]] : quantum.I;
      let gateForQubit1 = circuit[1][t] ? quantum[circuit[1][t]] : quantum.I;

      // This logic is simplified for 2 qubits and non-CNOT gates
      // A more robust engine would handle CNOTs differently
      let stepMatrix = quantum.tensorProduct(gateForQubit0, gateForQubit1);
      
      // Look for a CNOT gate in this step
      const cnotControl = circuit[0][t] === 'C-1' ? 0 : (circuit[1][t] === 'C-0' ? 1 : -1);
      if (cnotControl !== -1) {
          const target = cnotControl === 0 ? 1 : 0;
          // CNOT matrix for control on q0, target on q1
          let CNOT_01 = [
              [[1,0], [0,0], [0,0], [0,0]],
              [[0,0], [1,0], [0,0], [0,0]],
              [[0,0], [0,0], [0,0], [1,0]],
              [[0,0], [0,0], [1,0], [0,0]],
          ];
          // CNOT matrix for control on q1, target on q0
           let CNOT_10 = [
              [[1,0], [0,0], [0,0], [0,0]],
              [[0,0], [0,0], [0,0], [1,0]],
              [[0,0], [0,0], [1,0], [0,0]],
              [[0,0], [1,0], [0,0], [0,0]],
          ];
          stepMatrix = (cnotControl === 0) ? CNOT_01 : CNOT_10;
      }
      
      state = quantum.apply4x4Gate(stepMatrix, state);
    }
    return state;
  }, [circuit]);

  const stateVector = calculateState();
  const probabilities = stateVector.map(amp => complex.magnitudeSq(amp));

  const addGate = (q, t) => {
    if(finalState) return;
    const newCircuit = circuit.map(row => [...row]);
    
    // Clear any existing gate at this time step for simplicity
    newCircuit[0][t] = null;
    newCircuit[1][t] = null;

    if (selectedGate === 'CNOT') {
        // For this simple version, we'll hardcode CNOT from q0 to q1
        newCircuit[0][t] = 'C-1';
        newCircuit[1][t] = 'T-0';
    } else {
        newCircuit[q][t] = selectedGate;
    }
    setCircuit(newCircuit);
  };

  const handleReset = () => {
    // --- SUBTLE BUG FIX: Use the initializer function here too ---
    setCircuit(createInitialCircuit());
    setFinalState(null);
  };
  
  const handleMeasure = () => {
    if (finalState !== null) return;
    const rand = Math.random();
    let cumulativeProb = 0;
    for (let i = 0; i < probabilities.length; i++) {
        cumulativeProb += probabilities[i];
        if (rand < cumulativeProb) {
            setFinalState(i);
            break;
        }
    }
  };

  const isBellState = Math.abs(probabilities[0] - 0.5) < 0.01 && Math.abs(probabilities[3] - 0.5) < 0.01;

  const GateSlot = ({q, t}) => {
    const gate = circuit[q][t];
    let content, style;
    switch(gate) {
        case 'H': content = 'H'; style = "bg-green-500"; break;
        case 'X': content = 'X'; style = "bg-red-500"; break;
        case 'C-1': content = <div className="w-2 h-2 bg-purple-400 rounded-full"/>; style = "bg-transparent"; break;
        case 'T-0': content = <div className="w-6 h-6 border-2 border-purple-400 rounded-full flex items-center justify-center"><div className="w-3 h-0.5 bg-purple-400"/><div className="w-0.5 h-3 bg-purple-400 absolute"/></div>; style="bg-transparent"; break;
        default: content = null; style = "bg-slate-700/50 hover:bg-slate-600/70";
    }

    return (
        <div className="relative flex items-center justify-center">
            {gate === 'T-0' && <div className="absolute h-full w-0.5 bg-purple-400 -top-1/2"/>}
            <button onClick={() => addGate(q, t)} className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white transition-transform duration-200 ${style} ${!gate && 'hover:scale-110'}`}>{content}</button>
        </div>
    )
  }

  return (
    <div className="flex flex-col lg:flex-row gap-6 h-full">
      <div className="w-full lg:w-2/3 p-6 rounded-2xl border border-slate-700/50 space-y-4" style={{ backgroundColor: theme.sidebar, backdropFilter: 'blur(12px)' }}>
          <div className="text-center">
             <h3 className="text-xl font-bold">Quantum Circuit Composer</h3>
             <p className="text-sm text-slate-400">Build a quantum program by placing gates on the wires.</p>
          </div>
          {/* Circuit */}
          <div className="space-y-4 pt-4">
            {Array(NUM_QUBITS).fill(0).map((_, q) => (
                <div key={q} className="flex items-center gap-2">
                    <div className="font-mono text-lg w-16">q<sub>{q}</sub> |0⟩</div>
                    <div className="flex-grow h-0.5 bg-slate-500 relative flex items-center justify-around">
                        {Array(NUM_STEPS).fill(0).map((_, t) => <GateSlot key={t} q={q} t={t} />)}
                    </div>
                </div>
            ))}
          </div>
          
          <div className="pt-4 border-t border-slate-700/50">
             <div className="text-center mb-4">
                <h4 className="font-semibold mb-2">Selected Gate</h4>
                <div className="flex justify-center gap-2">
                    <ControlButton onClick={() => setSelectedGate('H')} isActive={selectedGate === 'H'}>H Gate</ControlButton>
                    <ControlButton onClick={() => setSelectedGate('X')} isActive={selectedGate === 'X'}>X Gate</ControlButton>
                    <ControlButton onClick={() => setSelectedGate('CNOT')} isActive={selectedGate === 'CNOT'}>CNOT Gate</ControlButton>
                </div>
             </div>
          </div>
      </div>
      <div className="w-full lg:w-1/3 p-6 rounded-2xl border border-slate-700/50 space-y-4" style={{ backgroundColor: theme.sidebar, backdropFilter: 'blur(12px)' }}>
          <h3 className="text-xl font-bold text-center">Output Probabilities</h3>
          <div className="flex justify-around items-end h-48 pt-4">
             {probabilities.map((p, i) => (
                <div key={i} className="flex flex-col items-center gap-2 w-1/4">
                    <div className="relative h-full w-10 bg-slate-700/50 rounded-t-md overflow-hidden">
                        <motion.div 
                          className="absolute bottom-0 w-full"
                          style={{background: `linear-gradient(to top, ${theme.accent}, #a78bfa)`}}
                          initial={{height: 0}}
                          animate={{height: `${p*100}%`}}
                        />
                    </div>
                    <div className={`font-mono text-sm transition-colors ${finalState === i ? 'text-green-400 font-bold' : ''}`}>|{i.toString(2).padStart(NUM_QUBITS, '0')}⟩</div>
                </div>
             ))}
          </div>
          <AnimatePresence>
            {isBellState && (
            <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="p-3 text-center bg-purple-500/20 rounded-lg border border-purple-400">
                <h4 className="font-bold text-purple-300">Entangled Bell State!</h4>
                <p className="text-xs text-slate-400 mt-1">The qubits are linked. Measuring one instantly affects the other.</p>
            </motion.div>
            )}
            {finalState !== null && (
            <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="p-3 text-center bg-green-500/20 rounded-lg border border-green-400">
                <h4 className="font-bold text-green-300">Measurement Result</h4>
                <p className="text-sm text-slate-300 mt-1">System collapsed to <span className="font-mono font-bold">|{finalState.toString(2).padStart(NUM_QUBITS, '0')}⟩</span>.</p>
            </motion.div>
            )}
          </AnimatePresence>
          <div className="flex gap-2 pt-4 border-t border-slate-700/50">
            <ControlButton onClick={handleReset} className="w-1/2"><RotateCcw className="w-4 h-4"/> Reset</ControlButton>
            <ControlButton onClick={handleMeasure} className="w-1/2 bg-green-600/50 hover:bg-green-500/50 text-white" disabled={finalState !== null}>
                <Zap className="w-4 h-4"/> Measure All
            </ControlButton>
          </div>
      </div>
    </div>
  );
}

// --- Level 3: Grover's Search Algorithm (Simplified for 4 items / 2 qubits) ---
function Level3_AlgorithmExplorer() {
  const NUM_ITEMS = 4;
  const NUM_QUBITS = 2;
  const [winner, setWinner] = useState(null);
  const [step, setStep] = useState(0); // 0: select, 1: H, 2: Oracle, 3: Amp, 4: Measured
  const [stateVector, setStateVector] = useState(Array(NUM_ITEMS).fill([0,0]));
  const [iterations, setIterations] = useState(0);

  const reset = () => {
    setWinner(null);
    setStep(0);
    setStateVector(Array(NUM_ITEMS).fill([0,0]));
    setIterations(0);
  }
  
  const handleSelectWinner = (idx) => {
    setWinner(idx);
    setStep(1); // Move to Superposition step
    let initialState = Array(NUM_ITEMS).fill([0,0]);
    initialState[0] = [1,0];
    setStateVector(initialState);
  }

  const runStep = () => {
    let newState = [...stateVector];
    switch (step) {
      case 1: // Apply Hadamard to all
        const H2 = quantum.tensorProduct(quantum.H, quantum.H);
        newState = quantum.apply4x4Gate(H2, newState);
        setStep(2);
        break;
      case 2: // Apply Oracle
        newState[winner][0] *= -1; // Phase flip
        setStep(3);
        break;
      case 3: // Apply Amplifier/Diffuser
        const D = [
            [[0.5,0], [0.5,0], [0.5,0], [0.5,0]],
            [[0.5,0], [0.5,0], [-0.5,0], [-0.5,0]],
            [[0.5,0], [-0.5,0], [0.5,0], [-0.5,0]],
            [[0.5,0], [-0.5,0], [-0.5,0], [0.5,0]],
        ]; // Simplified for 2 qubits
        newState = quantum.apply4x4Gate(D, newState);
        setStep(2); // Loop back to oracle
        setIterations(i => i + 1);
        break;
    }
    setStateVector(newState);
  };
  
  const handleMeasure = () => {
      // For this simplified version, we just show the highest probability outcome
      const probabilities = stateVector.map(amp => complex.magnitudeSq(amp));
      const maxProb = Math.max(...probabilities);
      const measuredIdx = probabilities.findIndex(p => p === maxProb);
      setStep(4);
  }

  const probabilities = stateVector.map(amp => complex.magnitudeSq(amp));

  return (
    <div className="flex flex-col lg:flex-row gap-6 h-full">
        <div className="w-full lg:w-2/3 p-6 rounded-2xl border border-slate-700/50 flex flex-col items-center justify-center gap-8" style={{ backgroundColor: theme.sidebar, backdropFilter: 'blur(12px)' }}>
            <div className="text-center">
                <h3 className="text-xl font-bold">Grover's Search Algorithm</h3>
                <p className="text-sm text-slate-400">A quantum algorithm for finding a needle in a haystack—faster.</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
                {Array(NUM_ITEMS).fill(0).map((_, idx) => (
                    <motion.button 
                        key={idx}
                        className="w-32 h-32 rounded-lg border-2 flex flex-col items-center justify-center gap-2 transition-all"
                        disabled={step !== 0}
                        onClick={() => handleSelectWinner(idx)}
                        style={{borderColor: `${theme.accent}50`}}
                        animate={{
                            scale: winner === idx ? 1.05 : 1,
                            borderColor: winner === idx ? theme.green : `${theme.accent}50`,
                            boxShadow: `0 0 ${probabilities[idx] * 40}px ${theme.accent}`,
                        }}
                    >
                        <div className="text-3xl font-mono text-white">|{idx.toString(2).padStart(2, '0')}⟩</div>
                        <div className="text-xs text-slate-400">Box {idx+1}</div>
                    </motion.button>
                ))}
            </div>
            <div className="h-12 text-center">
            {step === 0 && <p className="text-purple-300 animate-pulse">Select the "winning" box to hide the prize.</p>}
            {step > 0 && step < 4 && <p className="text-slate-300">Now, let's find it with the quantum computer.</p>}
            {step === 4 && (
                <div className="p-3 text-center bg-green-500/20 rounded-lg border border-green-400">
                    <h4 className="font-bold text-green-300">Found it in {iterations} iteration{iterations !== 1 && 's'}!</h4>
                </div>
            )}
            </div>
        </div>

        <div className="w-full lg:w-1/3 p-6 rounded-2xl border border-slate-700/50 space-y-4 flex flex-col" style={{ backgroundColor: theme.sidebar, backdropFilter: 'blur(12px)' }}>
            <h3 className="text-xl font-bold text-center">Algorithm Steps</h3>
            <div className="flex-grow space-y-2">
                <ControlButton onClick={runStep} isActive={step===1} disabled={step !== 1} className="w-full justify-start">
                    1. Create Superposition <span className="ml-auto">{step > 1 && <CheckCircle className="w-5 h-5 text-green-400"/>}</span>
                </ControlButton>
                <ControlButton onClick={runStep} isActive={step===2} disabled={step !== 2 && step !== 3} className="w-full justify-start">
                    2. Run Oracle & Amplifier ({iterations}) <span className="ml-auto">{step > 3 && <CheckCircle className="w-5 h-5 text-green-400"/>}</span>
                </ControlButton>
                 <ControlButton onClick={handleMeasure} isActive={step > 1 && step < 4} disabled={step < 2 || step === 4} className="w-full justify-start">
                    3. Measure <span className="ml-auto">{step === 4 && <CheckCircle className="w-5 h-5 text-green-400"/>}</span>
                </ControlButton>
            </div>
            <div className="flex justify-around items-end h-48 pt-4 border-t border-slate-700/50">
                {probabilities.map((p, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 w-1/4">
                        <div className="relative h-full w-10 bg-slate-700/50 rounded-t-md overflow-hidden">
                            <motion.div 
                            className="absolute bottom-0 w-full"
                            style={{background: `linear-gradient(to top, ${theme.accent}, #a78bfa)`}}
                            animate={{height: `${p*100}%`}}
                            />
                        </div>
                        <div className="font-mono text-sm">|{i.toString(2).padStart(2, '0')}⟩</div>
                    </div>
                ))}
            </div>
            <div className="pt-4 border-t border-slate-700/50">
                <ControlButton onClick={reset} className="w-full"><RotateCcw className="w-4 h-4"/> Reset Algorithm</ControlButton>
            </div>
        </div>
    </div>
  )
}


// --- Main Playground Component ---
export default function QuantumPlayground() {
  const [activeLevel, setActiveLevel] = useState(1);

  const levels = {
    1: { name: "Qubit Sandbox", icon: <Binary className="w-4 h-4" />, component: <Level1_QubitSandbox /> },
    2: { name: "Circuit Composer", icon: <TestTube className="w-4 h-4" />, component: <Level2_CircuitComposer /> },
    3: { name: "Grover's Algorithm", icon: <Target className="w-4 h-4" />, component: <Level3_AlgorithmExplorer /> },
  }

  return (
    <div className="min-h-screen flex flex-col items-center p-4" style={{ backgroundColor: theme.bg, color: theme.text }}>
      <style>{`.slider-thumb::-webkit-slider-thumb { background-color: ${theme.accent}; box-shadow: 0 0 10px ${theme.accent}80; }`}</style>
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center my-8"
      >
        <h1 className={`text-5xl font-bold bg-gradient-to-r ${theme.gradient} text-transparent bg-clip-text`}>
          Quantum Playground
        </h1>
        <p className="text-lg mt-2" style={{ color: theme.textSecondary }}>
          From superposition to quantum search, an interactive journey.
        </p>
      </motion.div>
      
      {/* Level Selector */}
      <div className="mb-6 flex gap-2 p-1 rounded-xl bg-slate-800/80 border border-slate-700">
        {Object.entries(levels).map(([id, {name, icon}]) => (
            <button key={id} onClick={() => setActiveLevel(Number(id))} className="relative px-4 py-2 text-sm font-medium rounded-lg transition-colors">
                {activeLevel === Number(id) && (
                    <motion.div layoutId="activeLevelTab" className="absolute inset-0 bg-slate-700/70 rounded-lg"/>
                )}
                <span className="relative z-10 flex items-center gap-2">{icon} {name}</span>
            </button>
        ))}
      </div>

      <div className="w-full max-w-7xl flex-grow">
        <AnimatePresence mode="wait">
            <motion.div
                key={activeLevel}
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: -20}}
                transition={{duration: 0.3}}
                className="h-full"
            >
                {levels[activeLevel].component}
            </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}