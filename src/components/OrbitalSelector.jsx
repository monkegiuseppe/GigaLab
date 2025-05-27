"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp, ChevronDown } from "lucide-react"


const orbitals = [
  {
    name: "1s",
    energy: 7112,
    unit: "eV",
    shell: "K-shell",
    shellColor: "from-red-500 to-red-600",
    electronCount: 2,
    shellRadius: 30,
  },
  {
    name: "2s",
    energy: 844,
    unit: "eV",
    shell: "L-shell",
    shellColor: "from-orange-500 to-orange-600",
    electronCount: 2,
    shellRadius: 50,
  },
  {
    name: "2p₁/₂",
    energy: 720,
    unit: "eV",
    shell: "L-shell",
    shellColor: "from-orange-500 to-orange-600",
    electronCount: 2,
    shellRadius: 50,
  },
  {
    name: "2p₃/₂",
    energy: 707,
    unit: "eV",
    shell: "L-shell",
    shellColor: "from-orange-500 to-orange-600",
    electronCount: 4,
    shellRadius: 50,
  },
  {
    name: "3s",
    energy: 92,
    unit: "eV",
    shell: "M-shell",
    shellColor: "from-blue-500 to-blue-600",
    electronCount: 2,
    shellRadius: 70,
  },
  {
    name: "3p",
    energy: 52,
    unit: "eV",
    shell: "M-shell",
    shellColor: "from-blue-500 to-blue-600",
    electronCount: 6,
    shellRadius: 70,
  },
  {
    name: "3d",
    energy: 1,
    unit: "eV",
    shell: "M-shell",
    shellColor: "from-blue-500 to-blue-600",
    electronCount: 6,
    shellRadius: 70,
  },
  {
    name: "4s",
    energy: 7.9,
    unit: "eV",
    shell: "N-shell",
    shellColor: "from-purple-500 to-purple-600",
    electronCount: 2,
    shellRadius: 90,
  },
]

// Iron atom electron configuration positions
const getElectronPositions = (currentOrbital) => {
  const positions = []

  // 1s electrons (2)
  for (let i = 0; i < 2; i++) {
    const angle = i * 180 * (Math.PI / 180)
    positions.push({
      x: 30 * Math.cos(angle),
      y: 30 * Math.sin(angle),
      isActive: currentOrbital === "1s",
      orbital: "1s",
    })
  }

  // 2s electrons (2)
  for (let i = 0; i < 2; i++) {
    const angle = (i * 180 + 45) * (Math.PI / 180)
    positions.push({
      x: 50 * Math.cos(angle),
      y: 50 * Math.sin(angle),
      isActive: currentOrbital === "2s",
      orbital: "2s",
    })
  }

  // 2p electrons (6) - split between 2p1/2 (2) and 2p3/2 (4)
  for (let i = 0; i < 6; i++) {
    const angle = i * 60 * (Math.PI / 180)
    const isP1Half = i < 2
    positions.push({
      x: 50 * Math.cos(angle),
      y: 50 * Math.sin(angle),
      isActive: (currentOrbital === "2p₁/₂" && isP1Half) || (currentOrbital === "2p₃/₂" && !isP1Half),
      orbital: isP1Half ? "2p₁/₂" : "2p₃/₂",
    })
  }

  // 3s electrons (2)
  for (let i = 0; i < 2; i++) {
    const angle = (i * 180 + 90) * (Math.PI / 180)
    positions.push({
      x: 70 * Math.cos(angle),
      y: 70 * Math.sin(angle),
      isActive: currentOrbital === "3s",
      orbital: "3s",
    })
  }

  // 3p electrons (6)
  for (let i = 0; i < 6; i++) {
    const angle = (i * 60 + 30) * (Math.PI / 180)
    positions.push({
      x: 70 * Math.cos(angle),
      y: 70 * Math.sin(angle),
      isActive: currentOrbital === "3p",
      orbital: "3p",
    })
  }

  // 3d electrons (6)
  for (let i = 0; i < 6; i++) {
    const angle = (i * 60 + 15) * (Math.PI / 180)
    positions.push({
      x: 70 * Math.cos(angle),
      y: 70 * Math.sin(angle),
      isActive: currentOrbital === "3d",
      orbital: "3d",
    })
  }

  // 4s electrons (2)
  for (let i = 0; i < 2; i++) {
    const angle = i * 180 * (Math.PI / 180)
    positions.push({
      x: 90 * Math.cos(angle),
      y: 90 * Math.sin(angle),
      isActive: currentOrbital === "4s",
      orbital: "4s",
    })
  }

  return positions
}

const RutherfordAtom = ({ currentOrbital }) => {
  const electronPositions = getElectronPositions(currentOrbital)

  return (
    <div className="relative w-48 h-48 mx-auto">
      {/* Electron shells */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[30, 50, 70, 90].map((radius, index) => (
          <div
            key={radius}
            className="absolute border border-slate-600/30 rounded-full"
            style={{
              width: radius * 2,
              height: radius * 2,
            }}
          />
        ))}

        {/* Nucleus */}
        <div className="w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg relative z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full animate-pulse opacity-50" />
        </div>

        {/* Electrons */}
        {electronPositions.map((pos, index) => (
          <motion.div
            key={index}
            className={`absolute w-2 h-2 rounded-full transition-all duration-500 ${
              pos.isActive
                ? "bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg shadow-cyan-400/50 scale-150"
                : "bg-slate-400"
            }`}
            style={{
              left: `calc(50% + ${pos.x}px - 4px)`,
              top: `calc(50% + ${pos.y}px - 4px)`,
            }}
            animate={{
              scale: pos.isActive ? 1.5 : 1,
              boxShadow: pos.isActive ? "0 0 20px rgba(34, 211, 238, 0.6)" : "0 0 0px rgba(0, 0, 0, 0)",
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </div>
  )
}

export default function OrbitalSelector({ currentOrbital, onOrbitalChange }) {
  // Find the initial index based on currentOrbital prop
  const initialIndex = orbitals.findIndex(o => o.name === currentOrbital) || 3;
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isScrolling, setIsScrolling] = useState(false)
  const [shellChanged, setShellChanged] = useState(false)
  const [scrollDirection, setScrollDirection] = useState("down")

  const selectedOrbitalData = orbitals[currentIndex]

  const handleScroll = (direction) => {
    if (isScrolling) return

    const newIndex =
      direction === "up" ? Math.max(0, currentIndex - 1) : Math.min(orbitals.length - 1, currentIndex + 1)

    if (newIndex === currentIndex) return

    setIsScrolling(true)
    setScrollDirection(direction)

    if (orbitals[newIndex].shell !== selectedOrbitalData.shell) {
      setShellChanged(true)
      setTimeout(() => setShellChanged(false), 1000)
    }

    setCurrentIndex(newIndex);
    // Call the parent's callback
    if (onOrbitalChange) {
      onOrbitalChange(orbitals[newIndex].name);
    }

    setTimeout(() => {
      setIsScrolling(false)
    }, 300)
  }

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault()
      if (Math.abs(e.deltaY) > 5) {
        handleScroll(e.deltaY > 0 ? "down" : "up")
      }
    }

    const handleKeyDown = (e) => {
      if (e.key === "ArrowUp") {
        e.preventDefault()
        handleScroll("up")
      } else if (e.key === "ArrowDown") {
        e.preventDefault()
        handleScroll("down")
      }
    }

    window.addEventListener("wheel", handleWheel, { passive: false })
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("wheel", handleWheel)
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [currentIndex, isScrolling])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-8 overflow-hidden"
      style={{
        background: 'transparent',
        minHeight: 'auto',
        width: '100%',
        height: '100%'
      }}>
      <div className="relative w-full max-w-2xl h-[600px]">
        {/* Shell Change Indicator */}
        <AnimatePresence>
          {shellChanged && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="absolute -top-16 left-1/2 -translate-x-1/2 z-30"
            >
              <div
                className={`px-6 py-3 rounded-full bg-gradient-to-r ${selectedOrbitalData.shellColor} text-white font-semibold text-sm shadow-2xl border border-white/20`}
              >
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                  {selectedOrbitalData.shell}
                </motion.span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Hints */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-8 flex items-center gap-4 text-slate-400 text-xs z-20">
          <div className="flex items-center gap-1">
            <ChevronUp className="w-3 h-3" />
            <span>{currentIndex > 0 ? orbitals[currentIndex - 1].name : "—"}</span>
          </div>
          <div className="w-px h-4 bg-slate-600"></div>
          <div className="flex items-center gap-1">
            <span>{currentIndex < orbitals.length - 1 ? orbitals[currentIndex + 1].name : "—"}</span>
            <ChevronDown className="w-3 h-3" />
          </div>
        </div>

        {/* Card Container */}
        <div className="relative w-full h-full flex items-center justify-center">
          <AnimatePresence>
            <motion.div
              key={currentIndex}
              className="absolute w-full max-w-lg"
              initial={{
                y: scrollDirection === "down" ? -100 : 100,
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                y: 0,
                opacity: 1,
                scale: 1,
              }}
              exit={{
                y: scrollDirection === "down" ? 100 : -100,
                opacity: 0,
                scale: 0.9,
              }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 35,
                duration: 0.25,
              }}
              style={{
                zIndex: 20,
              }}
            >
              <motion.div
                className="backdrop-blur-xl rounded-3xl border border-slate-700/50 shadow-2xl overflow-hidden bg-slate-800/80"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {/* Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${selectedOrbitalData.shellColor}`}
                  animate={{ opacity: 0.15 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Content */}
                <div className="relative p-8">
                  {/* Shell Badge */}
                  <motion.div
                    className="absolute top-4 right-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.15, delay: 0.1 }}
                  >
                    <div
                      className={`px-3 py-1 rounded-full bg-gradient-to-r ${selectedOrbitalData.shellColor} text-white text-xs font-medium shadow-lg`}
                    >
                      {selectedOrbitalData.shell}
                    </div>
                  </motion.div>

                  {/* Full Content */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <motion.div
                      className="text-center lg:text-left"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                    >
                      <h1 className="text-5xl lg:text-6xl font-bold text-slate-100 mb-4 font-mono">
                        {selectedOrbitalData.name}
                      </h1>
                      <div className="w-16 h-1 bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto lg:mx-0 mb-6"></div>

                      <div className="mb-6">
                        <div className="text-3xl lg:text-4xl font-bold text-slate-200 mb-2">
                          {selectedOrbitalData.energy}
                          <span className="text-lg lg:text-xl text-slate-400 ml-2">{selectedOrbitalData.unit}</span>
                        </div>
                        <p className="text-slate-400 text-sm">Binding Energy</p>
                      </div>

                      <div className="text-slate-300">
                        <p className="text-sm mb-1">Electrons in orbital:</p>
                        <p className="text-2xl font-bold text-cyan-400">{selectedOrbitalData.electronCount}</p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex flex-col items-center"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: 0.15 }}
                    >
                      <h3 className="text-slate-300 text-sm mb-4 font-medium">Iron Atom Model</h3>
                      <RutherfordAtom currentOrbital={selectedOrbitalData.name} />
                      <p className="text-xs text-slate-500 mt-4 text-center">
                        Highlighted electrons belong to {selectedOrbitalData.name} orbital
                      </p>
                    </motion.div>
                  </div>

                  {/* Progress Indicator */}
                  <motion.div
                    className="flex justify-center mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                  >
                    <div className="flex gap-2">
                      {orbitals.map((_, idx) => (
                        <motion.div
                          key={idx}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            idx === currentIndex ? "bg-slate-300 w-8" : "bg-slate-600"
                          }`}
                          animate={{
                            scale: idx === currentIndex ? 1.2 : 1,
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Instructions */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-center text-slate-500 text-xs">
          <p>Scroll or use arrow keys to navigate through orbitals</p>
          <p className="mt-1">
            {currentIndex + 1} of {orbitals.length}
          </p>
        </div>
      </div>
    </div>
  )
}
