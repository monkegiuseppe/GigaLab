"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

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
  const scale = window.innerWidth < 768 ? 0.5 : 0.6 // Responsive scale

  return (
    <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto">
      {/* Electron shells */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[30, 50, 70, 90].map((radius, index) => (
          <motion.div
            key={radius}
            className="absolute border border-slate-600/30 rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{
              width: `${radius * 2 * scale}px`,
              height: `${radius * 2 * scale}px`,
            }}
          />
        ))}

        {/* Nucleus */}
        <motion.div
          className="w-3 h-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg relative z-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 15,
            delay: 0.2,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full animate-pulse opacity-50" />
        </motion.div>

        {/* Electrons */}
        <AnimatePresence mode="wait">
          {electronPositions.map((pos, index) => (
            <motion.div
              key={`${pos.orbital}-${index}`}
              className={`absolute w-1.5 h-1.5 rounded-full ${
                pos.isActive
                  ? "bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg shadow-cyan-400/50"
                  : "bg-slate-400"
              }`}
              style={{
                left: `calc(50% + ${pos.x * scale}px - 3px)`,
                top: `calc(50% + ${pos.y * scale}px - 3px)`,
              }}
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={{
                opacity: 1,
                scale: pos.isActive ? 1.5 : 1,
                boxShadow: pos.isActive ? "0 0 20px rgba(34, 211, 238, 0.6)" : "0 0 0px rgba(0, 0, 0, 0)",
              }}
              exit={{
                opacity: 0,
                scale: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 15,
                delay: index * 0.01 + 0.3,
              }}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default function OrbitalSelector({ currentOrbital, onOrbitalChange }) {
  // Find the initial index based on currentOrbital prop
  const initialIndex =
    orbitals.findIndex((o) => o.name === currentOrbital) !== -1
      ? orbitals.findIndex((o) => o.name === currentOrbital)
      : 3
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [isScrolling, setIsScrolling] = useState(false)
  const [shellChanged, setShellChanged] = useState(false)
  const [scrollDirection, setScrollDirection] = useState("down")

  const safeCurrentIndex = Math.max(0, Math.min(currentIndex, orbitals.length - 1))
  const selectedOrbitalData = orbitals[safeCurrentIndex]

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

    setCurrentIndex(newIndex)
    // Call the parent's callback
    if (onOrbitalChange) {
      onOrbitalChange(orbitals[newIndex].name)
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
    <div className="w-full">
      <motion.div
        className="backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        }}
      >
        {/* Background Gradient */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${selectedOrbitalData.shellColor}`}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 0.5 }}
        />

        {/* Content */}
        <div className="relative p-3 md:p-5">
          {/* Shell Badge */}
          <motion.div
            className="absolute top-5 right-5 z-10"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div
              className={`px-3 py-1 rounded-full bg-gradient-to-r ${selectedOrbitalData.shellColor} text-white text-xs font-medium shadow-lg border border-white/20`}
              style={{
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
              }}
            >
              {selectedOrbitalData.shell}
            </div>
          </motion.div>

          {/* Compact Content Layout */}
          <div className="flex items-center gap-6">
            {/* Left side - Orbital info */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`orbital-info-${currentIndex}`}
                className="flex-1"
                initial={{ opacity: 0, x: scrollDirection === "down" ? 30 : -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: scrollDirection === "down" ? -30 : 30 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                  duration: 0.4,
                }}
              >
                <h1 className="text-xl md:text-2xl font-bold text-slate-100 mb-1 md:mb-2 font-mono">
                  {selectedOrbitalData.name.includes("₁/₂") || selectedOrbitalData.name.includes("₃/₂") ? (
                    <span>
                      {selectedOrbitalData.name.substring(0, 2)}
                      <sub style={{ fontSize: "0.7em" }}>{selectedOrbitalData.name.substring(2)}</sub>
                    </span>
                  ) : (
                    selectedOrbitalData.name
                  )}
                </h1>

                <div className="mb-3">
                  <div className="text-xl font-bold text-slate-200">
                    {selectedOrbitalData.energy}
                    <span className="text-sm text-slate-400 ml-1">{selectedOrbitalData.unit}</span>
                  </div>
                  <p className="text-slate-400 text-xs">Binding Energy</p>
                </div>

                <div className="text-slate-300">
                  <p className="text-xs mb-1">Electrons in orbital:</p>
                  <p className="text-lg font-bold text-cyan-400">{selectedOrbitalData.electronCount}</p>
                </div>

                {/* Move Iron Atom text here */}
                <div className="mt-4">
                  <h3 className="text-slate-300 text-xs font-medium">Iron Atom Model</h3>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Right side - Atom model */}
            <div className="flex flex-col items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`atom-model-${currentIndex}`}
                  initial={{ opacity: 0, rotateY: -90 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: 90 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                    duration: 0.5,
                  }}
                >
                  <RutherfordAtom currentOrbital={selectedOrbitalData.name} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-4">
            <motion.button
              className="w-8 h-8 rounded-full bg-slate-700/50 flex items-center justify-center text-slate-300 hover:bg-slate-600 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleScroll("up")}
              disabled={currentIndex === 0}
              style={{ opacity: currentIndex === 0 ? 0.5 : 1 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
            </motion.button>

            {/* Progress Indicator */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.2 }}
            >
              <div className="flex gap-1.5">
                {orbitals.map((_, idx) => (
                  <motion.div
                    key={idx}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentIndex ? "bg-slate-300 w-6" : "bg-slate-600"
                    }`}
                    animate={{
                      scale: idx === currentIndex ? 1.2 : 1,
                    }}
                  />
                ))}
              </div>
            </motion.div>

            <motion.button
              className="w-8 h-8 rounded-full bg-slate-700/50 flex items-center justify-center text-slate-300 hover:bg-slate-600 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleScroll("down")}
              disabled={currentIndex === orbitals.length - 1}
              style={{ opacity: currentIndex === orbitals.length - 1 ? 0.5 : 1 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
