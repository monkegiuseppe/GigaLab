"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Zap, Settings, Activity, LineChart, BarChart3, Waves, Target, PieChart, Info, X } from "lucide-react"
import * as THREE from "three"
import { Button } from "../components/ui/button"
import { Slider } from "../components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"

// ---  New Analytics Info Modal Component ---
const AnalyticsInfoModal = ({ onClose, tools }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Panel */}
      <motion.div
        className="relative w-full max-w-2xl max-h-[85vh] flex flex-col backdrop-blur-2xl rounded-2xl border border-slate-700/50 shadow-2xl overflow-hidden"
        style={{
          backgroundColor: "rgba(30, 41, 59, 0.85)",
          borderColor: "rgba(51, 65, 85, 0.5)",
        }}
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Header */}
        <div className="flex-shrink-0 flex items-center justify-between p-4 border-b border-slate-700/50">
          <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
            <Info className="w-5 h-5 text-cyan-400" />
            <span>Analytics Tools Explained</span>
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-700/50 flex items-center justify-center text-slate-300 hover:bg-slate-600 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 p-6 overflow-y-auto space-y-8 custom-scrollbar">
          {tools.map((tool, index) => (
            <div key={index} className="flex items-start gap-4">
              <div
                className={`flex-shrink-0 mt-1 p-2 rounded-lg bg-gradient-to-br ${tool.color} text-white shadow-lg`}
              >
                {tool.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-100 mb-1">
                  {tool.name}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {tool.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
// --- END: New Analytics Info Modal Component ---


export default function ControlsSection({
  onModeToggle,
  onPerformanceToggle,
  onPhotonEnergyChange,
  onCrossSectionChange,
  onEmitPhoton,
  photonEnergyProp,
  orbitalData,
}) {
  const [mode, setMode] = useState("Focused Shell")
  const [performance, setPerformance] = useState("Normal")
  // Internal state for immediate UI feedback, synced with prop
  const [photonEnergy, setPhotonEnergy] = useState([photonEnergyProp])
  const [sliderValue, setSliderValue] = useState([0]) // 0-100 for logarithmic mapping
  const [crossSection, setCrossSection] = useState([100]) // Start at 100%
  const [isEmitting, setIsEmitting] = useState(false)
  const [isLocked, setIsLocked] = useState(false)
  const [activeTab, setActiveTab] = useState("photon")
  const [currentTool, setCurrentTool] = useState(0)
  const [scrollDirection, setScrollDirection] = useState("down")
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false) // State for info modal

  // Diagnostic tools with detailed explanations
  const diagnosticTools = [
    {
      name: "Absorption Spectrum",
      icon: <LineChart className="w-5 h-5" />,
      description: "Visualize absorption peaks across energy levels",
      color: "from-cyan-500 to-blue-600",
      details: "This graph shows the probability that the atom will absorb an incoming photon at a given energy. The tall peaks, or 'absorption lines', occur at specific energies that precisely match the energy difference between two electron orbitals. When a photon with this exact energy hits the atom, an electron can 'jump' to a higher energy orbital. This is a fundamental concept in spectroscopy."
    },
    {
        name: "Photon Emission Pattern",
        icon: <Target className="w-5 h-5" />,
        description: "See the probable direction of emitted photons",
        color: "from-rose-500 to-red-600",
        details: "When an atom emits a photon, it doesn't do so uniformly in all directions. This visualization shows the anisotropic probability distribution of photon emission, which depends on the selection rules of the transition (ΔL, Δm). The 'lobes' indicate the directions where the photon is most likely to be detected, providing insight into the angular momentum change. [19, 23]"
    },
    {
      name: "Photoelectron Spectrum",
      icon: <BarChart3 className="w-5 h-5" />,
      description: "Analyze energy distribution of ejected electrons",
      color: "from-emerald-500 to-teal-600",
      details: "If an incoming photon has more energy than an electron's binding energy (the energy holding it to the atom), the electron can be completely ejected. This is the photoelectric effect. This graph shows the kinetic energy (KE) of these ejected 'photoelectrons'. By measuring the KE, we can deduce the electron's original binding energy using the formula: Binding Energy = Photon Energy - KE. Each bar corresponds to electrons ejected from a different orbital."
    },
    {
        name: "Rabi Oscillations",
        icon: <Waves className="w-5 h-5" />,
        description: "Observe the energy exchange with a resonant field",
        color: "from-purple-500 to-pink-600",
        details: "When an atom is exposed to a continuous, resonant electromagnetic field, it doesn't just absorb the energy and stay excited. Instead, it coherently exchanges energy with the field, oscillating between its ground and excited states. The frequency of these 'Rabi oscillations' is a key parameter in quantum computing and control. [20, 28, 31, 32]"
    },
    {
        name: "Elastic & Inelastic Scattering",
        icon: <PieChart className="w-5 h-5" />,
        description: "Differentiate between scattering event types",
        color: "from-amber-500 to-orange-600",
        details: "This chart shows the probabilities of two different outcomes when a photon interacts with the atom. In elastic (Rayleigh) scattering, the photon changes direction but not energy. In inelastic (Raman) scattering, the photon exchanges energy with the atom, emerging with a different color. The ratio depends on the photon's energy relative to the atom's energy levels. [6, 7, 16, 17, 27]"
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
    if (energy <= 0) return 0
    const minLog = Math.log10(minEnergy)
    const maxLog = Math.log10(maxEnergy)
    const energyLog = Math.log10(energy)
    return ((energyLog - minLog) / (maxLog - minLog)) * 100
  }

  // Get clean logarithmic scale labels
  const getScaleValues = () => {
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

  // Sync internal state with prop from parent
  useEffect(() => {
    setPhotonEnergy([photonEnergyProp])
    setSliderValue([energyToSlider(photonEnergyProp)])
  }, [photonEnergyProp])

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
    let newEnergy = sliderToEnergy(newSliderValue)

    const snapThreshold = 0.02
    const stickyThreshold = 0.35
    let snappedEnergy = newEnergy
    let foundLock = false

    for (const level of excitationLevels) {
      const tolerance = level * snapThreshold
      const stickyTolerance = level * stickyThreshold

      if (isLocked && Math.abs(newEnergy - level) < stickyTolerance) {
        snappedEnergy = level
        foundLock = true
        break
      } else if (!isLocked && Math.abs(newEnergy - level) < tolerance) {
        snappedEnergy = level
        foundLock = true
        break
      }
    }

    // Update both local state for immediate feedback and parent state via callback
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
    if (!orbitalData) {
      return (
        <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/30 h-48 flex items-center justify-center">
          <p className="text-slate-400">Loading analytics data...</p>
        </div>
      )
    }

    const currentToolData = diagnosticTools[currentTool]
    const currentPhotonEnergy = photonEnergy[0]

    // Graph constants
    const graphWidth = 250
    const graphHeight = 80
    const xStart = 30
    const yBaseline = 100
    const yTop = 20

    switch (currentToolData.name) {
      case "Absorption Spectrum": {
        const minLog = Math.log10(minEnergy)
        const maxLog = Math.log10(maxEnergy)

        const energyToX = (e) => {
          if (e <= 0) return xStart
          const logE = Math.log10(e)
          return xStart + graphWidth * ((logE - minLog) / (maxLog - minLog))
        }

        // Generate a spectral curve by summing Lorentzian functions for each orbital
        const spectralLine = (e, center, width) => {
          const halfWidth = width / 2
          return (halfWidth * halfWidth) / (Math.pow(e - center, 2) + halfWidth * halfWidth)
        }

        let pathD = `M ${xStart} ${yBaseline} `
        for (let i = 0; i <= graphWidth; i++) {
          const x = xStart + i
          const currentLogE = minLog + (i / graphWidth) * (maxLog - minLog)
          const currentE = Math.pow(10, currentLogE)

          let totalIntensity = 0
          for (const orb of Object.values(orbitalData)) {
            const lineWidth = orb.energy * 0.1 // Line width proportional to energy
            totalIntensity += spectralLine(currentE, orb.energy, lineWidth)
          }

          const y = yBaseline - Math.min(graphHeight - 5, totalIntensity * 60)
          pathD += `L ${x} ${y} `
        }

        const currentEnergyX = energyToX(currentPhotonEnergy)

        return (
          <div className="bg-slate-700/30 rounded-xl p-3 md:p-4 border border-slate-600/30 h-36 md:h-40 lg:h-48">
            <div className="w-full h-full relative">
              <svg className="w-full h-full absolute inset-0" viewBox="0 0 300 120">
                <defs>
                  <pattern id="grid" width="30" height="15" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 15" fill="none" stroke="rgba(148, 163, 184, 0.1)" strokeWidth="0.5" />
                  </pattern>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                <line x1={xStart} y1={yBaseline} x2={xStart + graphWidth} y2={yBaseline} stroke="rgba(148, 163, 184, 0.3)" strokeWidth="1" />
                <line x1={xStart} y1={yTop} x2={xStart} y2={yBaseline} stroke="rgba(148, 163, 184, 0.3)" strokeWidth="1" />
                
                <path d={pathD} fill="none" stroke="url(#gradient1)" strokeWidth="2" />

                {/* Marker for current photon energy */}
                <line x1={currentEnergyX} y1={yTop} x2={currentEnergyX} y2={yBaseline} stroke={isLocked ? "#06b6d4" : "#f59e0b"} strokeWidth="1.5" strokeDasharray="3 3"/>
                <circle cx={currentEnergyX} cy={yTop} r="3" fill={isLocked ? "#06b6d4" : "#f59e0b"} />

                {/* X-axis labels */}
                {getScaleValues().map(v => (
                    <text key={v.energy} x={energyToX(v.energy)} y="115" textAnchor="middle" fill="rgba(148, 163, 184, 0.6)" fontSize="10">{v.label}</text>
                ))}

                <text x="155" y="115" textAnchor="middle" fill="rgba(148, 163, 184, 0.6)" fontSize="8">
                  Energy (eV)
                </text>
                <text x="15" y="60" textAnchor="middle" fill="rgba(148, 163, 184, 0.6)" fontSize="8" transform="rotate(-90, 15, 60)">
                  Absorption
                </text>
              </svg>
            </div>
          </div>
        )
      }

    case "Photon Emission Pattern": {
        const centerX = 150;
        const centerY = 65;
        const maxR = 40;

        // Determine transition type based on energy
        let patternType = "isotropic"; // Default
        if (isLocked) {
            // Simple logic: associate certain energies with certain patterns
            if (currentPhotonEnergy > 7000) patternType = "quadrupole"; // K-shell
            else if (currentPhotonEnergy > 700) patternType = "dipole_sigma"; // L-shell
            else patternType = "dipole_pi"; // M/N shell
        }

        const getPath = (type) => {
            let path = `M ${centerX},${centerY} `;
            for (let i = 0; i <= 360; i++) {
                const angle = (i * Math.PI) / 180;
                let r;
                if (type === "dipole_pi") { // sin^2(θ)
                    r = maxR * Math.pow(Math.sin(angle), 2);
                } else if (type === "dipole_sigma") { // 1 + cos^2(θ)
                    r = maxR * (1 + Math.pow(Math.cos(angle), 2)) / 2.5;
                } else if (type === "quadrupole") { // sin^2(2θ)
                    r = maxR * Math.pow(Math.sin(2 * angle), 2);
                } else { // Isotropic
                    r = maxR * 0.8;
                }
                const x = centerX + r * Math.cos(angle - Math.PI / 2);
                const y = centerY + r * Math.sin(angle - Math.PI / 2);
                path += `L ${x},${y} `;
            }
            return path + 'Z';
        };
        
        const patternPath = getPath(patternType);
        const patternLabel = {
            dipole_pi: "Dipole (Δm=0)",
            dipole_sigma: "Dipole (Δm=±1)",
            quadrupole: "Quadrupole",
            isotropic: "Isotropic (Forbidden)"
        }[patternType];

        return (
            <div className="bg-slate-700/30 rounded-xl p-3 md:p-4 border border-slate-600/30 h-36 md:h-40 lg:h-48 flex flex-col items-center justify-center">
                <svg className="flex-grow w-full" viewBox="0 0 300 120">
                    <defs>
                        <radialGradient id="patternGlow">
                            <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="#f43f5e" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                    <circle cx={centerX} cy={centerY} r={maxR*1.5} fill="url(#patternGlow)" />
                    <path d={patternPath} fill="none" stroke="#f43f5e" strokeWidth="2.5" />
                    <circle cx={centerX} cy={centerY} r="4" fill="#f43f5e" stroke="white" strokeWidth="1.5" />
                </svg>
                <p className="text-xs text-rose-300 font-medium mt-1">{patternLabel}</p>
            </div>
        );
    }

      case "Photoelectron Spectrum": {
        const photoelectronPeaks = Object.values(orbitalData)
          .filter(o => currentPhotonEnergy > o.energy)
          .map(o => ({
            ke: currentPhotonEnergy - o.energy,
            yield: o.shell === "K" ? 1 : o.shell === "L" ? 0.8 : 0.6,
            color: `#${new THREE.Color(o.color).getHexString()}`,
            name: o.name,
          }))

        const maxKE = Math.max(...photoelectronPeaks.map(p => p.ke), 1)
        const keToX = (ke) => xStart + (ke / maxKE) * graphWidth

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
                <line x1={xStart} y1={yBaseline} x2={xStart + graphWidth} y2={yBaseline} stroke="rgba(148, 163, 184, 0.3)" strokeWidth="1" />
                <line x1={xStart} y1={yTop} x2={xStart} y2={yBaseline} stroke="rgba(148, 163, 184, 0.3)" strokeWidth="1" />

                {photoelectronPeaks.length === 0 ? (
                  <text x="155" y="65" textAnchor="middle" fill="rgba(148, 163, 184, 0.6)" fontSize="12">
                    Photon energy too low for ionization
                  </text>
                ) : (
                  <g>
                    {photoelectronPeaks.map((peak, i) => {
                      const x = keToX(peak.ke)
                      const barWidth = 12
                      const barHeight = peak.yield * graphHeight
                      return (
                        <rect
                          key={i}
                          x={x - barWidth / 2}
                          y={yBaseline - barHeight}
                          width={barWidth}
                          height={barHeight}
                          fill={peak.color}
                          opacity="0.9"
                          rx="2"
                        />
                      )
                    })}
                  </g>
                )}
                
                <text x="155" y="115" textAnchor="middle" fill="rgba(148, 163, 184, 0.6)" fontSize="8">
                  Kinetic Energy (eV)
                </text>
                <text x="15" y="60" textAnchor="middle" fill="rgba(148, 163, 184, 0.6)" fontSize="8" transform="rotate(-90, 15, 60)">
                  Yield
                </text>
                {photoelectronPeaks.length > 0 && (
                  <>
                    <text x={xStart} y="115" textAnchor="middle" fill="rgba(148, 163, 184, 0.6)" fontSize="10">0</text>
                    <text x={xStart + graphWidth} y="115" textAnchor="end" fill="rgba(148, 163, 184, 0.6)" fontSize="10">{maxKE.toFixed(1)}</text>
                  </>
                )}
              </svg>
            </div>
          </div>
        )
      }

      case "Rabi Oscillations": {
        const rabiFreq = Math.sqrt(currentPhotonEnergy) * 0.1;
        let pathD = `M ${xStart} ${yBaseline} `;
        for (let i = 0; i <= graphWidth; i++) {
            const t = (i / graphWidth) * 20;
            const y = yBaseline - (graphHeight * Math.pow(Math.sin(rabiFreq * t), 2));
            pathD += `L ${xStart + i} ${y} `;
        }
        return (
            <div className="bg-slate-700/30 rounded-xl p-3 md:p-4 border border-slate-600/30 h-36 md:h-40 lg:h-48">
                <svg className="w-full h-full" viewBox="0 0 300 120">
                    <path d={pathD} fill="none" stroke="#a855f7" strokeWidth="2" />
                    <text x="155" y="115" textAnchor="middle" fill="rgba(148, 163, 184, 0.6)" fontSize="8">Time</text>
                    <text x="15" y="60" textAnchor="middle" fill="rgba(148, 163, 184, 0.6)" fontSize="8" transform="rotate(-90, 15, 60)">Excited State</text>
                </svg>
            </div>
        );
    }

    case "Elastic & Inelastic Scattering": {
        const inelasticProb = 1 / (1 + Math.pow((currentPhotonEnergy - 500) / 100, 2));
        const elasticProb = 1 - inelasticProb;
        const elasticAngle = elasticProb * 360;

        const centerX = 150;
        const centerY = 60;
        const radius = 40;

        const elasticPath = `M ${centerX} ${centerY} L ${centerX + radius} ${centerY} A ${radius} ${radius} 0 ${elasticAngle > 180 ? 1 : 0} 1 ${centerX + radius * Math.cos(elasticAngle * Math.PI / 180)} ${centerY + radius * Math.sin(elasticAngle * Math.PI / 180)} Z`;
        const inelasticPath = `M ${centerX} ${centerY} L ${centerX + radius * Math.cos(elasticAngle * Math.PI / 180)} ${centerY + radius * Math.sin(elasticAngle * Math.PI / 180)} A ${radius} ${radius} 0 ${elasticAngle < 180 ? 1 : 0} 1 ${centerX + radius} ${centerY} Z`;

        return (
            <div className="bg-slate-700/30 rounded-xl p-3 md:p-4 border border-slate-600/30 h-36 md:h-40 lg:h-48 flex items-center justify-center">
                <svg className="w-2/3 h-2/3" viewBox="0 0 300 120">
                    <path d={elasticPath} fill="#f59e0b" />
                    <path d={inelasticPath} fill="#fbbf24" />
                    <text x="150" y="115" textAnchor="middle" fill="#f59e0b" fontSize="10">Elastic</text>
                    <text x="150" y="10" textAnchor="middle" fill="#fbbf24" fontSize="10">Inelastic</text>
                </svg>
            </div>
        );
    }
    
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
                            <div className="flex items-center gap-2">
                              <h3 className="text-lg font-bold text-slate-100 mb-1">
                                {diagnosticTools[currentTool].name}
                              </h3>
                              <button onClick={() => setIsInfoModalOpen(true)} className="text-slate-400 hover:text-white transition-colors mb-1">
                                  <Info className="w-4 h-4" />
                              </button>
                            </div>
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
    
    {/* Render the modal when state is true */}
    <AnimatePresence>
        {isInfoModalOpen && (
          <AnalyticsInfoModal
            onClose={() => setIsInfoModalOpen(false)}
            tools={diagnosticTools}
          />
        )}
      </AnimatePresence>
    </div>
  )
}