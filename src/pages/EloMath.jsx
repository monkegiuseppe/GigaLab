import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, XCircle, SkipForward, BrainCircuit, RefreshCw, Notebook, Info, X } from "lucide-react";
import { mathProblems } from "../lib/elomath/mathProblems";
import { calculateNewElo } from "../lib/elomath/Elo";
import Notepad from "../components/Notepad";
import ProblemRenderer from '../components/ProblemRenderer';

const isAnswerCorrect = (userAnswer, correctAnswer) => {
  const cleanUserAnswer = userAnswer.trim();
  const cleanCorrectAnswer = String(correctAnswer).trim();
  const userNum = parseFloat(cleanUserAnswer);
  const correctNum = parseFloat(cleanCorrectAnswer);
  if (!isNaN(userNum) && !isNaN(correctNum)) {
    return Math.abs(userNum - correctNum) < 0.001;
  }
  try {
    const evalCorrect = new Function('return ' + cleanCorrectAnswer.replace('π', 'Math.PI').replace('√', 'Math.sqrt').replace('^','**').replace('e', 'Math.E'));
    if (Math.abs(userNum - evalCorrect()) < 0.001) return true;
  } catch (e) {}
  return cleanUserAnswer.replace(/[\s()<>]/g, '').toLowerCase() === cleanCorrectAnswer.replace(/[\s()<>]/g, '').toLowerCase();
};

// --- Helper Component for the Info Modal ---
const InfoPopup = ({ isOpen, onClose, title, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-slate-800 border border-slate-700 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col"
          >
            <header className="flex items-center justify-between p-4 border-b border-slate-700 sticky top-0 bg-slate-800">
              <h2 className="text-lg font-semibold text-slate-100">{title}</h2>
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-white transition-colors rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <X size={24} />
              </button>
            </header>
            <div className="p-6 overflow-y-auto text-slate-300 space-y-6">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// --- Content for the Info Modal ---
const Code = ({ children }) => <code className="bg-slate-900/70 text-amber-300 px-1.5 py-0.5 rounded-md font-mono text-sm">{children}</code>;

const AnswerFormatGuide = () => (
  <>
    <div className="space-y-2">
      <h3 className="text-md font-semibold text-blue-300">1. Numbers & Decimals</h3>
      <p>For most problems, the answer is a single number.</p>
      <ul className="list-disc list-inside space-y-1 pl-2 text-slate-400">
        <li>Integers: <Code>34</Code>, <Code>-16</Code>, <Code>0</Code></li>
        <li>Decimals: <Code>0.5</Code>, <Code>-1.2</Code>, <Code>1.75</Code></li>
        <li>Fractions: <Code>1/6</Code>, <Code>3/7</Code>, <Code>29/30</Code>. Always simplify fractions.</li>
      </ul>
    </div>
    <div className="space-y-2">
      <h3 className="text-md font-semibold text-blue-300">2. Expressions with Constants (π, e, √)</h3>
      <p>Some problems require answers involving mathematical constants. Use the following formats:</p>
      <ul className="list-disc list-inside space-y-1 pl-2 text-slate-400">
        <li>Pi (π): Enter as <Code>pi</Code>. Examples: <Code>8pi</Code>, <Code>pi/6</Code>, <Code>(2*pi)/3</Code></li>
        <li>Euler's Number (e): Enter as <Code>e</Code>. Use <Code>^</Code> for exponents. Examples: <Code>5e</Code>, <Code>e^2</Code>, <Code>1/e</Code></li>
        <li>Square Roots (√): Enter as <Code>sqrt()</Code>. Examples: <Code>sqrt(3)</Code>, <Code>5*sqrt(3)</Code></li>
        <li>Logarithms (ln): Enter as <Code>ln()</Code>. Example: <Code>ln(2)</Code>, <Code>ln(4/3)</Code></li>
        <li>Trigonometric Functions: Use standard function names like <Code>sin()</Code>, <Code>cos()</Code>, <Code>tan()</Code>, <Code>arcsin()</Code>. Example: <Code>arcsin(1/2) + 1/sqrt(3)</Code></li>
      </ul>
    </div>
    <div className="space-y-2">
      <h3 className="text-md font-semibold text-blue-300">3. Algebraic Expressions</h3>
      <p>For problems asking for a derivative or antiderivative, enter the expression as written.</p>
      <ul className="list-disc list-inside space-y-1 pl-2 text-slate-400">
        <li>Use <Code>^</Code> for exponents: <Code>x^3</Code> for x<sup>3</sup>.</li>
        <li>Use <Code>*</Code> for multiplication where needed.</li>
        <li>Examples: <Code>28x^3 - 6x</Code>, <Code>-4x^-5 + 3sin(x)</Code></li>
        <li className="!mt-2"><strong className="text-amber-400">Important:</strong> Do NOT include the constant of integration, <Code>+ C</Code>, for indefinite integrals.</li>
      </ul>
    </div>
    <div className="space-y-2">
        <h3 className="text-md font-semibold text-blue-300">4. Word-Based Answers</h3>
        <p>Some questions require a specific word or short phrase. These are typically not case-sensitive.</p>
        <ul className="list-disc list-inside space-y-1 pl-2 text-slate-400">
            <li>Examples: <Code>converge</Code>, <Code>diverge</Code>, <Code>yes</Code>, <Code>no</Code>, <Code>local minimum</Code>, <Code>A^T</Code></li>
        </ul>
    </div>
    <div className="space-y-2">
        <h3 className="text-md font-semibold text-blue-300">5. Linear Algebra Notation</h3>
        <ul className="list-disc list-inside space-y-1 pl-2 text-slate-400">
            <li>Vectors: Use angle brackets <Code>{'< >'}</Code> with comma-separated components. Example: <Code>{'<4, -2>'}</Code></li>
            <li>Matrices: Use nested square brackets <Code>[ ]</Code>. Example: <Code>[[1, 0], [0, -1]]</Code></li>
        </ul>
    </div>
    <div className="space-y-2">
        <h3 className="text-md font-semibold text-blue-300">6. Interval Notation</h3>
        <p>Use parentheses <Code>()</Code> for open intervals and square brackets <Code>[]</Code> for closed intervals. Use <Code>inf</Code> for infinity.</p>
        <ul className="list-disc list-inside space-y-1 pl-2 text-slate-400">
            <li>Examples: <Code>(-2, inf)</Code>, <Code>[0, 2)</Code>, <Code>{"{0}"}</Code> for a single point.</li>
        </ul>
    </div>
    <div className="border-t border-slate-700 pt-4 mt-4">
        <h3 className="text-md font-semibold text-blue-300">General Tips</h3>
        <ul className="list-disc list-inside space-y-1 pl-2 text-slate-400 mt-2">
            <li><strong>Read the Question Carefully!</strong> Pay attention to requests like "find the x-coordinate" or "the answer is a multiple of π".</li>
            <li><strong>No Units:</strong> Do not include units like "cm/s" or "Joules" in your answer.</li>
            <li><strong>Check for Simplification:</strong> Always provide the most simplified form of your answer.</li>
        </ul>
    </div>
  </>
);


export default function EloMath() {
  const STARTING_ELO = 1200;
  const [userElo, setUserElo] = useState(STARTING_ELO);
  const [currentProblem, setCurrentProblem] = useState(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [sessionStats, setSessionStats] = useState({ correct: 0, incorrect: 0, skipped: 0 });
  const [isNotepadOpen, setIsNotepadOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  const getNewProblem = (currentElo) => {
    setFeedback(null);
    setUserAnswer("");
    const eloRange = 150;
    const effectiveElo = currentElo || userElo;
    let eligibleProblems = mathProblems.filter(
      p => Math.abs(p.difficulty - effectiveElo) <= eloRange && p.id !== currentProblem?.id
    );
    if (eligibleProblems.length === 0) {
      eligibleProblems = mathProblems.filter(p => p.id !== currentProblem?.id);
    }
    const randomIndex = Math.floor(Math.random() * eligibleProblems.length);
    setCurrentProblem(eligibleProblems[randomIndex]);
  };
  useEffect(() => {
    const savedElo = localStorage.getItem('userElo');
    let initialElo = STARTING_ELO;
    if (savedElo) {
      initialElo = parseInt(savedElo, 10);
      setUserElo(initialElo);
    }
    getNewProblem(initialElo);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userAnswer.trim()) return;
    const correct = isAnswerCorrect(userAnswer, currentProblem.answer);
    const newElo = calculateNewElo(userElo, currentProblem.difficulty, correct);
    const eloChange = newElo - userElo;
    setUserElo(newElo);
    localStorage.setItem('userElo', newElo);
    if (correct) {
      setSessionStats(prev => ({ ...prev, correct: prev.correct + 1 }));
      setFeedback({ type: 'correct', message: `Correct! ELO ${eloChange >= 0 ? '+' : ''}${eloChange}`, correctAnswer: currentProblem.answer });
    } else {
      setSessionStats(prev => ({ ...prev, incorrect: prev.incorrect + 1 }));
      setFeedback({ type: 'incorrect', message: `Incorrect. ELO ${eloChange}`, correctAnswer: currentProblem.answer });
    }
  };
  const handleSkip = () => {
    setSessionStats(prev => ({ ...prev, skipped: prev.skipped + 1 }));
    getNewProblem();
  };
  const handleResetElo = () => {
    if (window.confirm("Are you sure you want to reset your ELO and session stats?")) {
      setUserElo(STARTING_ELO);
      localStorage.removeItem('userElo');
      setSessionStats({ correct: 0, incorrect: 0, skipped: 0 });
      getNewProblem(STARTING_ELO);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
      <AnimatePresence>
        {isNotepadOpen && <Notepad onClose={() => setIsNotepadOpen(false)} />}
      </AnimatePresence>
      
      <InfoPopup isOpen={isInfoOpen} onClose={() => setIsInfoOpen(false)} title="Answer Formatting Guide">
        <AnswerFormatGuide />
      </InfoPopup>

      <motion.div 
        className="w-full max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <header className="flex items-center justify-between mb-6">
          <Link to="/" className="group flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors">
            <ArrowLeft size={20} className="transition-transform duration-200 ease-out group-hover:-translate-x-1" />
            Back to Home
          </Link>
          <div className="flex items-center gap-4 text-center">
             <div className="flex items-center gap-2 text-lg font-semibold text-blue-400">
               <BrainCircuit size={24} />
               <span>ELO: {userElo}</span>
             </div>
             <div className="text-sm text-slate-400 flex items-center gap-4">
               <span>
                 <span className="text-green-400">✓ {sessionStats.correct}</span> | <span className="text-red-400">✗ {sessionStats.incorrect}</span> | <span className="text-amber-400">» {sessionStats.skipped}</span>
               </span>
               <button onClick={handleResetElo} title="Reset ELO and Stats" className="group text-slate-500 hover:text-red-400 transition-colors">
                 <RefreshCw size={16} className="transition-transform duration-300 ease-in-out group-hover:rotate-[-90deg]" />
               </button>
             </div>
          </div>
        </header>
        {/* Main Content */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl shadow-2xl backdrop-blur-xl p-8 min-h-[24rem]">
          <AnimatePresence mode="wait">
            {currentProblem && (
              <motion.div
                key={currentProblem.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex flex-col h-full"
              >
                {/* Problem Info */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-blue-400 bg-blue-900/50 px-3 py-1 rounded-full">{currentProblem.topic}</span>
                  <div className="flex items-center gap-3">
                    <motion.button
                      onClick={() => setIsNotepadOpen(true)}
                      className="group top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-md text-sm text-slate-300 bg-slate-700/50 hover:bg-slate-700 transition-colors"
                      title="Open Scratchpad"
                      whileTap={{ scale: 0.95 }}
                    >
                      <Notebook size={16} className="transition-transform duration-200 ease-out group-hover:scale-110" />
                      Scratchpad
                    </motion.button>
                    <span className="text-sm font-medium text-slate-400">Difficulty: {currentProblem.difficulty}</span>
                  </div>
                </div>
                {/* Problem Statement */}
                <div className="flex-grow mb-6">
                  <ProblemRenderer text={currentProblem.problem} />
                </div>
                {/* Answer Form */}
                <form onSubmit={handleSubmit} className="mt-auto">
                    <div className="relative">
                        <input
                            type="text"
                            value={userAnswer}
                            onChange={(e) => setUserAnswer(e.target.value)}
                            placeholder="Your Answer..."
                            disabled={!!feedback}
                            className="w-full bg-slate-900 border-2 border-slate-700 rounded-lg py-3 pr-12 pl-4 text-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all disabled:opacity-50"
                        />
                         <button 
                            type="button" 
                            onClick={() => setIsInfoOpen(true)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-400 p-1 rounded-full transition-all duration-200 ease-out hover:scale-110"
                            title="Answer Formatting Guide"
                        >
                            <Info size={20} />
                        </button>
                    </div>
                    <div className="flex items-center justify-end gap-4 mt-4">
                        {!feedback && (
                            <motion.button 
                                type="button" 
                                onClick={handleSkip}
                                className="group flex items-center gap-2 px-4 py-2 text-sm text-amber-400 hover:text-amber-300 transition-colors"
                                whileTap={{ scale: 0.95 }}
                            >
                               <SkipForward size={16} className="transition-transform duration-200 ease-out group-hover:scale-110" /> Skip
                            </motion.button>
                        )}
                        <motion.button 
                            type="submit" 
                            disabled={!!feedback}
                            className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:bg-blue-500 transition-all duration-200 ease-out hover:-translate-y-0.5 disabled:bg-slate-600 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-lg"
                            whileTap={{ scale: 0.95 }}
                        >
                            {feedback ? "Answered" : "Submit"}
                        </motion.button>
                    </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* Feedback Section */}
        <AnimatePresence>
            {feedback && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className={`mt-6 p-4 rounded-lg flex items-center justify-between ${
                        feedback.type === 'correct' ? 'bg-green-500/20 text-green-300 border border-green-500/30' : 'bg-red-500/20 text-red-300 border border-red-500/30'
                    }`}
                >
                    <div className="flex items-center gap-3">
                        {feedback.type === 'correct' ? <CheckCircle /> : <XCircle />}
                        <div>
                            <p className="font-bold">{feedback.message}</p>
                            <p className="text-sm">The correct answer is: <span className="font-mono">{feedback.correctAnswer}</span></p>
                        </div>
                    </div>
                    <motion.button 
                        onClick={() => getNewProblem()} 
                        className="group px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all duration-200 ease-out flex items-center gap-2"
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="transition-transform duration-200 ease-out group-hover:translate-x-1">Next Question →</span>
                    </motion.button>
                </motion.div>
            )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}