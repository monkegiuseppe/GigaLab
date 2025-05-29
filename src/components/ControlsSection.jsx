"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Zap, Settings, Activity, LineChart } from "lucide-react"
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

  return (
    <div className="w-full">
      <motion.div
        className="backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl overflow-hidden"
        style={{
          backgroundColor: "rgba(30, 41, 59, 0.8)",
          backdropFilter: "blur(12px)",
          borderColor: "rgba(51, 65, 85, 0.5)",
          height: "420px", // Fixed height for the entire component
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
              className="flex-shrink-0 p-6 pb-0"
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
              className="flex-1 overflow-y-auto px-6 pb-6 pt-4 custom-scrollbar"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "rgba(148, 163, 184, 0.3) transparent",
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
                  <h3 className="text-slate-200 font-medium text-center">Photon Energy</h3>
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
                          className={`text-2xl font-bold transition-colors duration-200 ${
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
                  className="space-y-5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="flex items-center gap-2 text-slate-300 text-sm mb-4">
                    <LineChart className="w-4 h-4" />
                    <span>Absorption Spectrum</span>
                  </div>

                  {/* Graph Container */}
                  <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/30 h-48">
                    <div className="w-full h-full relative">
                      {/* Graph Background Grid */}
                      <svg className="w-full h-full absolute inset-0" viewBox="0 0 300 150">
                        {/* Grid lines */}
                        <defs>
                          <pattern id="grid" width="30" height="15" patternUnits="userSpaceOnUse">
                            <path
                              d="M 30 0 L 0 0 0 15"
                              fill="none"
                              stroke="rgba(148, 163, 184, 0.1)"
                              strokeWidth="0.5"
                            />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />

                        {/* Axes */}
                        <line x1="30" y1="130" x2="280" y2="130" stroke="rgba(148, 163, 184, 0.3)" strokeWidth="1" />
                        <line x1="30" y1="20" x2="30" y2="130" stroke="rgba(148, 163, 184, 0.3)" strokeWidth="1" />

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
                        <text x="80" y="145" textAnchor="middle" fill="rgba(148, 163, 184, 0.6)" fontSize="10">
                          1s
                        </text>
                        <text x="160" y="145" textAnchor="middle" fill="rgba(148, 163, 184, 0.6)" fontSize="10">
                          2p
                        </text>
                        <text x="240" y="145" textAnchor="middle" fill="rgba(148, 163, 184, 0.6)" fontSize="10">
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
                        <text x="155" y="145" textAnchor="middle" fill="rgba(148, 163, 184, 0.6)" fontSize="8">
                          Energy (eV)
                        </text>
                      </svg>
                    </div>
                  </div>

                  {/* Placeholder notice */}
                  <div className="text-xs text-slate-400 italic text-center">
                    This visualization is a placeholder for demonstration purposes
                  </div>
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
