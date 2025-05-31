"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Zap, Settings, Activity, LineChart, BarChart3, Waves, Box, Atom, TrendingUp, Gauge } from "lucide-react"
import { Button } from "../components/ui/button"
import { Slider } from "../components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"

export default function ControlsSection({
  onModeToggle,
  onPerformanceToggle,
  onPhotonEnergyChange,
  onCrossSectionChange,
  onEmitPhoton,
}) {
  const [mode, setMode] = useState("Focused Shell")
  const [performance, setPerformance] = useState("Normal")
  const [photonEnergy, setPhotonEnergy] = useState([1])
  const [sliderValue, setSliderValue] = useState([0]) // 0-100 for logarithmic mapping
  const [crossSection, setCrossSection] = useState([100]) // Start at 100%
  const [isEmitting, setIsEmitting] = useState(false)
  const [isLocked, setIsLocked] = useState(false)
  const [activeTab, setActiveTab] = useState("photon")
  const [currentTool, setCurrentTool] = useState(0)
  const [scrollDirection, setScrollDirection] = useState("down")

  // Diagnostic tools
  const diagnosticTools = [
    {
      name: "Absorption Spectrum",
      icon: <LineChart className="w-5 h-5" />,
      description: "Visualize absorption peaks across energy levels",
      color: "from-cyan-500 to-blue-600",
    },
    {
      name: "Dipole Spectrum",
      icon: <Waves className="w-5 h-5" />,
      description: "Analyze harmonic generation in strong fields",
      color: "from-purple-500 to-pink-600",
    },
    {
      name: "Density Visualization",
      icon: <Box className="w-5 h-5" />,
      description: "Examine electron density distribution ρ(r,t)",
      color: "from-emerald-500 to-teal-600",
    },
    {
      name: "Expectation Values",
      icon: <TrendingUp className="w-5 h-5" />,
      description: "Track observables like ⟨r⟩(t) and ⟨H⟩(t) over time",
      color: "from-amber-500 to-orange-600",
    },
    {
      name: "Photoelectron Spectrum",
      icon: <BarChart3 className="w-5 h-5" />,
      description: "Analyze energy distribution of ejected electrons",
      color: "from-rose-500 to-red-600",
    },
    {
      name: "Ionization Yield",
      icon: <Gauge className="w-5 h-5" />,
      description: "Measure ionization probability vs. field parameters",
      color: "from-indigo-500 to-violet-600",
    },
  ]

  // Excitation energy levels for electron transitions
  const excitationLevels = [1, 7.9, 52, 92, 707, 720, 844, 7112]
  const minEnergy = 0.1
  const maxEnergy = 8000

  const wavelength = (1239.84 / photonEnergy[0]).toFixed(2)

  // Convert slider position (0-100) to logarithmic energy value
  const sliderToEnergy = (sliderPos) => {
    const minLog = Math.log10(minEnergy)
    const maxLog = Math.log10(maxEnergy)
    const energyLog = minLog + (sliderPos / 100) * (maxLog - minLog)
    return Math.pow(10, energyLog)
  }

  // Convert energy value to slider position (0-100)
  const energyToSlider = (energy) => {
    const minLog = Math.log10(minEnergy)
    const maxLog = Math.log10(maxEnergy)
    const energyLog = Math.log10(energy)
    return ((energyLog - minLog) / (maxLog - minLog)) * 100
  }

  // Get clean logarithmic scale labels
  const getScaleValues = () => {
    // Clean logarithmic values: 0.1, 1, 10, 100, 1k, 10k
    const cleanValues = [0.1, 1, 10, 100, 1000, 8000]
    return cleanValues.map((energy) => ({
      energy,
      position: energyToSlider(energy),
      label: energy >= 1000 ? `${energy / 1000}k` : energy.toString(),
    }))
  }

  // Get excitation level positions for blue markers
  const getExcitationMarkers = () => {
    return excitationLevels.map((energy) => ({
      energy,
      position: energyToSlider(energy),
    }))
  }

  // Initialize slider position based on initial energy
  useEffect(() => {
    setSliderValue([energyToSlider(photonEnergy[0])])
  }, [])

  // Check if current energy is close to an excitation level
  useEffect(() => {
    const snapThreshold = 0.015 // Match the handleSliderChange threshold
    const closestLevel = excitationLevels.find((level) => {
      const tolerance = level * snapThreshold
      return Math.abs(photonEnergy[0] - level) < tolerance
    })

    setIsLocked(!!closestLevel)
  }, [photonEnergy])

  const toggleMode = () => {
    setMode(mode === "Focused Shell" ? "Show All" : "Focused Shell")
    if (onModeToggle) onModeToggle()
  }

  const togglePerformance = () => {
    setPerformance(performance === "Normal" ? "Low" : "Normal")
    if (onPerformanceToggle) onPerformanceToggle()
  }

  const handleEmitPhoton = () => {
    setIsEmitting(true)
    if (onEmitPhoton) onEmitPhoton()
    setTimeout(() => setIsEmitting(false), 2000)
  }

  const handleSliderChange = (value) => {
    const newSliderValue = value[0]
    const newEnergy = sliderToEnergy(newSliderValue)

    // Enhanced snap-to behavior with extremely sticky lock-in and "magnetic" stickiness
    const snapThreshold = 0.02 // Increased from 0.015 for initial lock
    const stickyThreshold = 0.35 // Increased from 0.25 for wider "magnetic" area (35%!)
    let snappedEnergy = newEnergy
    let foundLock = false

    for (const level of excitationLevels) {
      const tolerance = level * snapThreshold
      const stickyTolerance = level * stickyThreshold

      // If we're already locked and within the much wider sticky range, stay locked
      if (isLocked && Math.abs(newEnergy - level) < stickyTolerance) {
        snappedEnergy = level
        foundLock = true
        break
      }
      // Otherwise, normal snap behavior with tighter tolerance
      else if (!isLocked && Math.abs(newEnergy - level) < tolerance) {
        snappedEnergy = level
        foundLock = true
        break
      }
    }

    // Update both energy and slider position simultaneously for perfect sync
    const finalSliderValue = energyToSlider(snappedEnergy)
    setPhotonEnergy([snappedEnergy])
    setSliderValue([finalSliderValue])
    if (onPhotonEnergyChange) onPhotonEnergyChange(snappedEnergy)
  }

  const handleToolChange = (direction) => {
    setScrollDirection(direction)
    if (direction === "up") {
      setCurrentTool((prev) => (prev > 0 ? prev - 1 : prev))
    } else {
      setCurrentTool((prev) => (prev < diagnosticTools.length - 1 ? prev + 1 : prev))
    }
  }

  const scaleValues = getScaleValues()
  const excitationMarkers = getExcitationMarkers()

  // Define inline styles for the tab triggers to ensure they work
  const getTabTriggerStyle = (tabValue, isActive) => {
    const baseStyle = {
      height: "40px",
      borderRadius: "12px",
      fontWeight: "500",
      transition: "all 0.3s ease",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderWidth: "0px",
      borderStyle: "solid",
      borderColor: "transparent",
    }

    if (isActive) {
      if (tabValue === "photon") {
        return {
          ...baseStyle,
          background: "linear-gradient(to right, #06b6d4, #3b82f6)",
          color: "white",
          boxShadow: "0 8px 25px rgba(6, 182, 212, 0.3)",
          borderColor: "rgba(6, 182, 212, 0.3)",
        }
      } else if (tabValue === "data") {
        return {
          ...baseStyle,
          background: "linear-gradient(to right, #22c55e, #10b981)",
          color: "white",
          boxShadow: "0 8px 25px rgba(34, 197, 94, 0.3)",
          borderColor: "rgba(34, 197, 94, 0.3)",
        }
      } else if (tabValue === "settings") {
        return {
          ...baseStyle,
          background: "linear-gradient(to right, #a855f7, #ec4899)",
          color: "white",
          boxShadow: "0 8px 25px rgba(168, 85, 247, 0.3)",
          borderColor: "rgba(168, 85, 247, 0.3)",
        }
      }
    } else {
      return {
        ...baseStyle,
        background: "transparent",
        color: "#cbd5e1",
      }
    }
  }

  const getButtonStyle = (isEmitting) => {
    if (isEmitting) {
      return {
        background: "linear-gradient(to right, #eab308, #f97316)",
        boxShadow: "0 8px 25px rgba(251, 146, 60, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "rgba(251, 146, 60, 0.5)",
      }
    } else {
      return {
        background: "linear-gradient(to right, #06b6d4, #3b82f6)",
        boxShadow: "0 8px 25px rgba(6, 182, 212, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "rgba(6, 182, 212, 0.3)",
      }
    }
  }

  // Render the appropriate visualization based on the current tool
  const renderToolVisualization = () => {
    const currentToolData = diagnosticTools[currentTool]

    switch (currentToolData.name) {
      case "Absorption Spectrum":
        return (
          <div className="bg-slate-700/30 rounded-xl p-3 md:p-4 border border-slate-600/30 h-36 md:h-40 lg:h-48">
            <div className="w-full h-full relative">
              {/* Graph Background Grid */}
              <svg className="w-full h-full absolute inset-0" viewBox="0 0 300 120">
                {/* Grid lines */}
                <defs>
                  <pattern id="grid" width="30" height="15" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 15" fill="none" stroke="rgba(148, 163, 184, 0.1)" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />

                {/* Axes */}
                <line x1="30" y1="100" x2="280" y2="100" stroke="rgba(148, 163, 184, 0.3)" strokeWidth="1" />
                <line x1="30" y1="20" x2="30" y2="100" stroke="rgba(148, 163, 184, 0.3)" strokeWidth="1" />

                {/* Sample absorption peaks */}
                <path
                  d="M 30 130 Q 60 120 80 90 Q 100 60 120 80 Q 140 100 160 70 Q 180 40 200 60 Q 220 80 240 50 Q 260 30 280 40"
                  fill="none"
                  stroke="url(#gradient1)"
                  strokeWidth="2"
                />

                {/* Gradient definition */}
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>

                {/* Peak markers */}
                <circle cx="80" cy="90" r="3" fill="#06b6d4" opacity="0.8" />
                <circle cx="160" cy="70" r="3" fill="#8b5cf6" opacity="0.8" />
                <circle cx="240" cy="50" r="3" fill="#ec4899" opacity="0.8" />

                {/* Labels */}
                <text x="80" y="115" textAnchor="middle" fill="rgba(148, 163, 184, 0.6)" fontSize="10">
                  1s
                </text>
                <text x="160" y="115" textAnchor="middle" fill="rgba(148, 163, 184, 0.6)" fontSize="10">
                  2p
                </text>
                <text x="240" y="115" textAnchor="middle" fill="rgba(148, 163, 184, 0.6)" fontSize="10">
                  3d
                </text>

                <text
                  x="15"
                  y="25"
                  textAnchor="middle"
                  fill="rgba(148, 163, 184, 0.6)"
                  fontSize="8"
                  transform="rotate(-90, 15, 25)"
                >
                  Intensity
                </text>
                <text x="155" y="115" textAnchor="middle" fill="rgba(148, 163, 184, 0.6)" fontSize="8">
                  Energy (eV)
                </text>
              </svg>
            </div>
          </div>
        )

      case "Dipole Spectrum":
        return (
          <div className="bg-slate-700/30 rounded-xl p-3 md:p-4 border border-slate-600/30 h-36 md:h-40 lg:h-48">
            <div className="w-full h-full relative">
              <svg className="w-full h-full absolute inset-0" viewBox="0 0 300 120">
                <defs>
                  <pattern id="grid" width="30" height="15" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 15" fill="none" stroke="rgba(148, 163, 184, 0.1)" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />

                {/* Axes */}
                <line x1="30" y1="100" x2="280" y2="100" stroke="rgba(148, 163, 184, 0.3)" strokeWidth="1" />
                <line x1="30" y1="20" x2="30" y2="100" stroke="rgba(148, 163, 184, 0.3)" strokeWidth="1" />

                {/* Harmonic peaks */}
                {[1, 3, 5, 7, 9, 11, 13, 15].map((harmonic, i) => {
                  const x = 30 + (harmonic / 15) * 250
                  const height = harmonic === 1 ? 100 : 130 - Math.max(20, 110 * Math.exp(-harmonic / 8))
                  return (
                    <g key={harmonic}>
                      <line
                        x1={x}
                        y1="130"
                        x2={x}
                        y2={height}
                        stroke={`hsl(${280 - harmonic * 15}, 80%, 60%)`}
                        strokeWidth="2"
                      />
                      <text x={x} y="145" textAnchor="middle" fill="rgba(148, 163, 184, 0.6)" fontSize="8">
                        {harmonic}
                      </text>
                    </g>
                  )
                })}

                <text
                  x="15"
                  y="25"
                  textAnchor="middle"
                  fill="rgba(148, 163, 184, 0.6)"
                  fontSize="8"
                  transform="rotate(-90, 15, 25)"
                >
                  Intensity
                </text>
                <text x="155" y="115" textAnchor="middle" fill="rgba(148, 163, 184, 0.6)" fontSize="8">
                  Harmonic Order
                </text>
              </svg>
            </div>
          </div>
        )

      case "Density Visualization":
        return (
          <div className="bg-slate-700/30 rounded-xl p-3 md:p-4 border border-slate-600/30 h-36 md:h-40 lg:h-48">
            <div className="w-full h-full relative flex items-center justify-center">
              <div className="relative w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32">
                {/* Electron density visualization */}
                <div className="absolute inset-0 rounded-full bg-gradient-radial from-emerald-400/80 via-emerald-500/40 to-transparent animate-pulse"></div>
                <div className="absolute inset-4 rounded-full bg-gradient-radial from-emerald-300/90 via-emerald-400/30 to-transparent"></div>
                <div className="absolute inset-8 rounded-full bg-gradient-radial from-emerald-200 via-emerald-300/20 to-transparent"></div>
                <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                  <Atom className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 text-xs text-slate-400">Density ρ(r,t) visualization</div>
            </div>
          </div>
        )

      case "Expectation Values":
        return (
          <div className="bg-slate-700/30 rounded-xl p-3 md:p-4 border border-slate-600/30 h-36 md:h-40 lg:h-48">
            <div className="w-full h-full relative">
              <svg className="w-full h-full absolute inset-0" viewBox="0 0 300 120">
                <defs>
                  <pattern id="grid" width="30" height="15" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 15" fill="none" stroke="rgba(148, 163, 184, 0.1)" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />

                {/* Axes */}
                <line x1="30" y1="100" x2="280" y2="100" stroke="rgba(148, 163, 184, 0.3)" strokeWidth="1" />
                <line x1="30" y1="20" x2="30" y2="100" stroke="rgba(148, 163, 184, 0.3)" strokeWidth="1" />

                {/* Energy expectation value */}
                <path
                  d="M 30 80 L 50 82 L 70 85 L 90 90 L 110 70 L 130 75 L 150 80 L 170 85 L 190 90 L 210 70 L 230 75 L 250 80 L 270 85"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="2"
                />

                {/* Position expectation value */}
                <path
                  d="M 30 90 L 50 85 L 70 80 L 90 75 L 110 95 L 130 90 L 150 85 L 170 80 L 190 75 L 210 95 L 230 90 L 250 85 L 270 80"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2"
                />

                <text
                  x="15"
                  y="25"
                  textAnchor="middle"
                  fill="rgba(148, 163, 184, 0.6)"
                  fontSize="8"
                  transform="rotate(-90, 15, 25)"
                >
                  Value
                </text>
                <text x="155" y="115" textAnchor="middle" fill="rgba(148, 163, 184, 0.6)" fontSize="8">
                  Time (fs)
                </text>

                {/* Legend */}
                <circle cx="40" cy="30" r="3" fill="#f59e0b" />
                <text x="50" y="33" fill="rgba(148, 163, 184, 0.8)" fontSize="8">
                  ⟨H⟩(t)
                </text>
                <circle cx="80" cy="30" r="3" fill="#3b82f6" />
                <text x="90" y="33" fill="rgba(148, 163, 184, 0.8)" fontSize="8">
                  ⟨r⟩(t)
                </text>
              </svg>
            </div>
          </div>
        )

      case "Photoelectron Spectrum":
        return (
          <div className="bg-slate-700/30 rounded-xl p-3 md:p-4 border border-slate-600/30 h-36 md:h-40 lg:h-48">
            <div className="w-full h-full relative">
              <svg className="w-full h-full absolute inset-0" viewBox="0 0 300 120">
                <defs>
                  <pattern id="grid" width="30" height="15" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 15" fill="none" stroke="rgba(148, 163, 184, 0.1)" strokeWidth="0.5" />
                  </pattern>
                  <linearGradient id="barGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#e11d48" />
                    <stop offset="100%" stopColor="#be123c" />
                  </linearGradient>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />

                {/* Axes */}
                <line x1="30" y1="100" x2="280" y2="100" stroke="rgba(148, 163, 184, 0.3)" strokeWidth="1" />
                <line x1="30" y1="20" x2="30" y2="100" stroke="rgba(148, 163, 184, 0.3)" strokeWidth="1" />

                {/* Photoelectron peaks */}
                {[0.5, 1.5, 2.5, 3.5, 4.5, 5.5, 6.5].map((energy, i) => {
                  const x = 30 + (energy / 7) * 250
                  const width = 15
                  const height = 130 - Math.max(20, 90 * Math.exp(-Math.pow(energy - 2.5, 2) / 3))
                  return (
                    <rect
                      key={i}
                      x={x - width / 2}
                      y={height}
                      width={width}
                      height={130 - height}
                      fill="url(#barGradient)"
                      opacity="0.8"
                    />
                  )
                })}

                <text
                  x="15"
                  y="25"
                  textAnchor="middle"
                  fill="rgba(148, 163, 184, 0.6)"
                  fontSize="8"
                  transform="rotate(-90, 15, 25)"
                >
                  Yield
                </text>
                <text x="155" y="115" textAnchor="middle" fill="rgba(148, 163, 184, 0.6)" fontSize="8">
                  Energy (eV)
                </text>
              </svg>
            </div>
          </div>
        )

      case "Ionization Yield":
        return (
          <div className="bg-slate-700/30 rounded-xl p-3 md:p-4 border border-slate-600/30 h-36 md:h-40 lg:h-48">
            <div className="w-full h-full relative">
              <svg className="w-full h-full absolute inset-0" viewBox="0 0 300 120">
                <defs>
                  <pattern id="grid" width="30" height="15" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 15" fill="none" stroke="rgba(148, 163, 184, 0.1)" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />

                {/* Axes */}
                <line x1="30" y1="100" x2="280" y2="100" stroke="rgba(148, 163, 184, 0.3)" strokeWidth="1" />
                <line x1="30" y1="20" x2="30" y2="100" stroke="rgba(148, 163, 184, 0.3)" strokeWidth="1" />

                {/* Ionization curve */}
                <path
                  d="M 30 130 Q 60 128 90 125 Q 120 120 150 100 Q 180 70 210 40 Q 240 30 270 25"
                  fill="none"
                  stroke="#7c3aed"
                  strokeWidth="2"
                />

                {/* Data points */}
                {[0, 1, 2, 3, 4, 5, 6].map((i) => {
                  const x = 30 + i * 40
                  const y = 130 - i * (i < 3 ? 5 : 20)
                  return <circle key={i} cx={x} cy={y} r="3" fill="#7c3aed" opacity="0.8" />
                })}

                <text
                  x="15"
                  y="25"
                  textAnchor="middle"
                  fill="rgba(148, 163, 184, 0.6)"
                  fontSize="8"
                  transform="rotate(-90, 15, 25)"
                >
                  Ionization
                </text>
                <text x="155" y="115" textAnchor="middle" fill="rgba(148, 163, 184, 0.6)" fontSize="8">
                  Intensity (W/cm²)
                </text>
              </svg>
            </div>
          </div>
        )

      default:
        return (
          <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/30 h-48 flex items-center justify-center">
            <div className="text-slate-400 text-center">
              <p>Visualization not available</p>
            </div>
          </div>
        )
    }
  }

  return (
  <div className="w-full max-h-[calc(100vh-120px)] md:max-h-none">
    <motion.div
      className="backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl overflow-hidden"
      style={{
        backgroundColor: "rgba(30, 41, 59, 0.8)",
        backdropFilter: "blur(12px)",
        borderColor: "rgba(51, 65, 85, 0.5)",
        height: "auto",
        minHeight: window.innerHeight < 768 ? "auto" : "420px",
        maxHeight: window.innerHeight < 768 ? "calc(100vh - 120px)" : "calc(100vh - 200px)",
      }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Background Gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom right, rgba(30, 41, 59, 0.2), rgba(51, 65, 85, 0.1), rgba(15, 23, 42, 0.2))",
          }}
        />

        <div className="relative h-full flex flex-col">
          <Tabs
            defaultValue="photon"
            className="w-full h-full flex flex-col"
            value={activeTab}
            onValueChange={setActiveTab}
          >
            {/* Header with Tabs - Fixed at top */}
            <motion.div
              className="flex-shrink-0 p-4 md:p-6 pb-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <TabsList
                className="grid w-full grid-cols-3 h-12"
                style={{
                  backgroundColor: "rgba(15, 23, 42, 0.95)",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "rgba(148, 163, 184, 0.2)",
                  padding: "2px",
                  borderRadius: "14px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                }}
              >
                <TabsTrigger value="photon" style={getTabTriggerStyle("photon", activeTab === "photon")}>
                  ⚡
                </TabsTrigger>
                <TabsTrigger value="data" style={getTabTriggerStyle("data", activeTab === "data")}>
                  📊
                </TabsTrigger>
                <TabsTrigger value="settings" style={getTabTriggerStyle("settings", activeTab === "settings")}>
                  ⚙️
                </TabsTrigger>
              </TabsList>
            </motion.div>

            {/* Scrollable Content Area */}
            <div
              className="flex-1 overflow-y-auto px-4 md:px-6 pb-4 md:pb-6 pt-3 md:pt-4 custom-scrollbar"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "rgba(148, 163, 184, 0.3) transparent",
                maxHeight: "calc(100% - 60px)", // Account for tab header
              }}
            >
              <TabsContent value="photon" className="space-y-6 mt-0 data-[state=active]:block">
                {/* Photon Energy Slider - Always Visible */}
                <motion.div
                  className="space-y-4 w-full flex flex-col items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-slate-200 font-medium text-center text-sm md:text-base">Photon Energy</h3>
                  <div className="space-y-4 w-full">
                    <div className="relative w-full">
                      {/* Custom slider with gradient background */}
                      <div className="relative h-8 flex items-center w-full">
                        {/* Background track - light gray */}
                        <div className="w-full h-1.5 bg-slate-300 rounded-full relative overflow-hidden">
                          {/* Fixed gradient background - always full width */}
                          <div
                            className="absolute top-0 left-0 h-full w-full rounded-full"
                            style={{
                              background: "linear-gradient(to right, #dc2626 0%, #8b5cf6 100%)",
                            }}
                          />

                          {/* White overlay that covers the gradient, with a "window" that reveals it */}
                          <div
                            className="absolute top-0 right-0 h-full bg-slate-300 rounded-full transition-all duration-75 ease-out"
                            style={{
                              width: `${100 - sliderValue[0]}%`,
                            }}
                          />
                        </div>

                        {/* Excitation level markers - subtle blue lines above the track */}
                        {excitationMarkers.map((marker, index) => (
                          <div
                            key={index}
                            className="absolute w-0.5 h-3 bg-blue-400/60 rounded-full"
                            style={{
                              left: `${marker.position}%`,
                              top: "-4px",
                              transform: "translateX(-50%)",
                            }}
                          />
                        ))}

                        {/* Slider thumb - positioned above and centered on the track */}
                        <div
                          className={`absolute w-5 h-5 rounded-full border-2 cursor-pointer z-10 transition-all duration-75 ease-out ${
                            isLocked
                              ? "bg-cyan-300 border-cyan-400 shadow-lg shadow-cyan-400/50"
                              : "bg-white border-slate-300 shadow-md"
                          }`}
                          style={{
                            left: `calc(${sliderValue[0]}% - 10px)`,
                            top: "50%",
                            transform: "translateY(-50%)",
                          }}
                        />

                        {/* Invisible input for interaction */}
                        <input
                          type="range"
                          min={0}
                          max={100}
                          step={0.1}
                          value={sliderValue[0]}
                          onChange={(e) => handleSliderChange([Number.parseFloat(e.target.value)])}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                        />
                      </div>

                      {/* Clean logarithmic scale labels */}
                      <div className="relative mt-2 h-4">
                        {scaleValues.map((scale, index) => (
                          <div
                            key={index}
                            className="absolute text-xs text-slate-500"
                            style={{
                              left: `${scale.position}%`,
                              transform: "translateX(-50%)",
                            }}
                          >
                            {scale.label}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                      <div className="flex items-center justify-center">
                        <div
                          className={`text-xl md:text-2xl font-bold transition-colors duration-200 ${
                            isLocked ? "text-cyan-300" : "text-slate-200"
                          }`}
                          style={{ width: "140px", textAlign: "center" }}
                        >
                          {photonEnergy[0] >= 1000
                            ? `${(photonEnergy[0] / 1000).toFixed(1)} keV`
                            : `${photonEnergy[0].toFixed(1)} eV`}
                        </div>

                        {/* Static indicator when locked on excitation energy */}
                        {isLocked && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="ml-2 w-2 h-2 bg-cyan-400 rounded-full"
                          />
                        )}
                      </div>
                      <div className="text-sm text-slate-300 font-medium text-center">λ = {wavelength} nm</div>
                    </div>
                  </div>
                </motion.div>

                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent my-4" />

                {/* Emit Photon Wave Button - Always Visible */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  style={{ height: "56px" }} // Fixed height container
                >
                  <Button
                    onClick={handleEmitPhoton}
                    disabled={isEmitting}
                    className="w-full h-full text-white font-semibold rounded-xl transition-all duration-300"
                    style={getButtonStyle(isEmitting)}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Zap className={`w-5 h-5 ${isEmitting ? "animate-spin" : ""}`} />
                      {isEmitting ? "Emitting..." : "Emit Photon Wave"}
                    </div>
                  </Button>
                </motion.div>
              </TabsContent>

              <TabsContent value="data" className="space-y-6 mt-0 data-[state=active]:block">
                <motion.div
                  className="space-y-3 md:space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {/* Diagnostic Tool Card Selector */}
                  <div className="backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-lg overflow-hidden">
                    {/* Background Gradient */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${diagnosticTools[currentTool].color}`}
                      animate={{ opacity: 0.15 }}
                      transition={{ duration: 0.5 }}
                    />

                    {/* Content */}
                    <div className="relative p-3 md:p-4">
                      {/* Tool Info */}
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={`tool-info-${currentTool}`}
                          className="flex items-start gap-4"
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
                          <div
                            className={`p-2 rounded-lg bg-gradient-to-br ${diagnosticTools[currentTool].color} text-white`}
                          >
                            {diagnosticTools[currentTool].icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-slate-100 mb-1">
                              {diagnosticTools[currentTool].name}
                            </h3>
                            <p className="text-sm text-slate-300">{diagnosticTools[currentTool].description}</p>
                          </div>
                        </motion.div>
                      </AnimatePresence>

                      {/* Navigation Controls */}
                      <div className="flex justify-between items-center mt-4">
                        <motion.button
                          className="w-8 h-8 rounded-full bg-slate-700/50 flex items-center justify-center text-slate-300 hover:bg-slate-600 hover:text-white transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleToolChange("up")}
                          disabled={currentTool === 0}
                          style={{ opacity: currentTool === 0 ? 0.5 : 1 }}
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
                            {diagnosticTools.map((_, idx) => (
                              <motion.div
                                key={idx}
                                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                  idx === currentTool ? "bg-slate-300 w-6" : "bg-slate-600"
                                }`}
                                animate={{
                                  scale: idx === currentTool ? 1.2 : 1,
                                }}
                              />
                            ))}
                          </div>
                        </motion.div>

                        <motion.button
                          className="w-8 h-8 rounded-full bg-slate-700/50 flex items-center justify-center text-slate-300 hover:bg-slate-600 hover:text-white transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleToolChange("down")}
                          disabled={currentTool === diagnosticTools.length - 1}
                          style={{ opacity: currentTool === diagnosticTools.length - 1 ? 0.5 : 1 }}
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
                  </div>

                  {/* Tool Visualization */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`tool-viz-${currentTool}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {renderToolVisualization()}
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              </TabsContent>

              <TabsContent value="settings" className="space-y-8 mt-0 data-[state=active]:block">
                {/* Cross-Section View  */}
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="flex items-center gap-2 text-slate-300 text-sm">
                    <span className="text-lg">🔍</span>
                    <span>Cross-Section View:</span>
                  </div>
                  <div className="space-y-3">
                    <Slider
                      value={crossSection}
                      onValueChange={(value) => {
                        setCrossSection(value)
                        if (onCrossSectionChange) onCrossSectionChange(value[0])
                      }}
                      max={100}
                      min={50}
                      step={1}
                      className="w-full"
                    />
                    <div className="text-center">
                      <span className="text-sm text-slate-300 font-medium">{crossSection[0]}%</span>
                    </div>
                  </div>
                </motion.div>

                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-slate-600 to-transparent" />

                {/* Mode Toggle */}
                <motion.div
                  className="space-y-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="flex items-center gap-2 text-slate-300 text-sm">
                    <Settings className="w-4 h-4" />
                    <span>Mode:</span>
                  </div>
                  <motion.button
                    className="w-full p-3 rounded-xl text-slate-200 shadow-lg transition-all duration-300"
                    onClick={toggleMode}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      background: "linear-gradient(to right, rgba(51, 65, 85, 1), rgba(71, 85, 105, 1))",
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                      borderWidth: "1px",
                      borderStyle: "solid",
                      borderColor: "rgba(71, 85, 105, 0.3)",
                    }}
                  >
                    {mode}
                  </motion.button>
                </motion.div>

                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-slate-600 to-transparent" />

                {/* Performance Toggle */}
                <motion.div
                  className="space-y-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center gap-2 text-slate-300 text-sm">
                    <Activity className="w-4 h-4" />
                    <span>Performance:</span>
                  </div>
                  <motion.button
                    className="w-full p-3 rounded-xl text-slate-200 shadow-lg transition-all duration-300"
                    onClick={togglePerformance}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      background: "linear-gradient(to right, rgba(51, 65, 85, 1), rgba(71, 85, 105, 1))",
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                      borderWidth: "1px",
                      borderStyle: "solid",
                      borderColor: "rgba(71, 85, 105, 0.3)",
                    }}
                  >
                    {performance}
                  </motion.button>
                </motion.div>
              </TabsContent>
            </div>
          </Tabs>
        </div>

        {/* Custom Scrollbar Styles */}
        <style jsx>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          
          .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(15, 23, 42, 0.3);
            border-radius: 3px;
          }
          
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, rgba(6, 182, 212, 0.6), rgba(59, 130, 246, 0.6));
            border-radius: 3px;
            border: 1px solid rgba(148, 163, 184, 0.2);
          }
          
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(to bottom, rgba(6, 182, 212, 0.8), rgba(59, 130, 246, 0.8));
          }
          
          .custom-scrollbar::-webkit-scrollbar-corner {
            background: transparent;
          }
        `}</style>
      </motion.div>
    </div>
  )
}
