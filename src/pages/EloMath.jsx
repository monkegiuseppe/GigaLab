import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, XCircle, SkipForward, BrainCircuit, RefreshCw, Notebook } from "lucide-react";
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
  return cleanUserAnswer.replace(/\s/g, '').toLowerCase() === cleanCorrectAnswer.replace(/\s/g, '').toLowerCase();
};


export default function EloMath() {
  const STARTING_ELO = 1200;
  const [userElo, setUserElo] = useState(STARTING_ELO);
  const [currentProblem, setCurrentProblem] = useState(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [sessionStats, setSessionStats] = useState({ correct: 0, incorrect: 0, skipped: 0 });
  const [isNotepadOpen, setIsNotepadOpen] = useState(false);

  const getNewProblem = (currentElo) => {
    setFeedback(null);
    setUserAnswer("");
    const eloRange = 250;
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

      <motion.div 
        className="w-full max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <header className="flex items-center justify-between mb-6">
          <Link to="/" className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors">
            <ArrowLeft size={20} />
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
               <button onClick={handleResetElo} title="Reset ELO and Stats" className="text-slate-500 hover:text-red-400 transition-colors">
                 <RefreshCw size={16} />
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
                      className="top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-md text-sm text-slate-300 bg-slate-700/50 hover:bg-slate-700 transition-colors"
                      title="Open Scratchpad"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Notebook size={16} />
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
                            className="w-full bg-slate-900 border-2 border-slate-700 rounded-lg py-3 px-4 text-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all disabled:opacity-50"
                        />
                    </div>
                    <div className="flex items-center justify-end gap-4 mt-4">
                        {!feedback && (
                            <motion.button 
                                type="button" 
                                onClick={handleSkip}
                                className="flex items-center gap-2 px-4 py-2 text-sm text-amber-400 hover:text-amber-300 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                               <SkipForward size={16} /> Skip
                            </motion.button>
                        )}
                        <motion.button 
                            type="submit" 
                            disabled={!!feedback}
                            className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-500 transition-all disabled:bg-slate-600 disabled:cursor-not-allowed"
                            whileHover={{ scale: 1.05 }}
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
                          <div className="text-sm flex items-center"></div>
                            <p className="text-sm">The correct answer is: <span className="font-mono">{feedback.correctAnswer}</span></p>
                        </div>
                    </div>
                    <motion.button 
                        onClick={() => getNewProblem()} 
                        className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Next Question →
                    </motion.button>
                </motion.div>
            )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}