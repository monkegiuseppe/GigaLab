"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Zap, Settings, Activity } from "lucide-react"
import { Button } from "../components/ui/button"
import { Slider } from "../components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"


// Custom styles for better tab visibility
const tabsListStyle = {
  backgroundColor: 'rgba(51, 65, 85, 0.5)', // slate-700 with opacity
  border: '1px solid rgba(100, 116, 139, 0.5)' // slate-500 border
};

const tabsTriggerStyle = {
  '&[data-state="inactive"]': {
    color: 'rgba(203, 213, 225, 0.9)', // Better contrast for inactive
    backgroundColor: 'transparent'
  },
  '&[data-state="active"]': {
    backgroundColor: 'rgba(71, 85, 105, 0.8)', // slate-600
    color: 'white'
  }
};


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

  return (
      <div className="w-full mx-auto" style={{ maxWidth: '440px' }}>      <motion.div
        className="backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl overflow-hidden bg-slate-800/80"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 via-slate-700/10 to-slate-900/20" />

        <div className="relative p-6">
          {/* Header with Tabs */}
          <motion.div
            className="flex items-center justify-between mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Tabs defaultValue="photon" className="w-full" value={activeTab} onValueChange={setActiveTab}>
              <TabsList 
                className="grid w-full grid-cols-2" 
                style={{
                  backgroundColor: 'rgba(15, 23, 42, 0.9)',
                  border: '1px solid rgba(99, 102, 241, 0.3)',
                  padding: '3px',
                  borderRadius: '12px',
                  boxShadow: '0 0 20px rgba(99, 102, 241, 0.1)'
                }}
              >
                <TabsTrigger 
                  value="photon"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-cyan-500/25 data-[state=inactive]:text-slate-400 data-[state=inactive]:hover:text-slate-300 transition-all duration-300 font-medium"
                >
                  ⚡ Photon
                </TabsTrigger>
                <TabsTrigger 
                  value="settings"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-purple-500/25 data-[state=inactive]:text-slate-400 data-[state=inactive]:hover:text-slate-300 transition-all duration-300 font-medium"
                >
                  ⚙️ Settings
                </TabsTrigger>
              </TabsList>

              <TabsContent value="photon" className="space-y-4 mt-4">
                {/* Photon Energy Slider - Always Visible */}
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-slate-200 font-medium text-center">Photon Energy</h3>
                  <div className="space-y-4">
                    <div className="relative">
                      {/* Custom slider with gradient background */}
                      <div className="relative h-8 flex items-center">
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
                          <div className={`text-2xl font-bold transition-all duration-200 ${
                            isLocked ? "text-cyan-300" : "text-slate-200"
                          }`} style={{ width: '140px', textAlign: 'center' }}
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
                  style={{ height: '56px' }} // Fixed height container
                >
                  <Button
                    onClick={handleEmitPhoton}
                    disabled={isEmitting}
                    className={`w-full h-full text-white font-semibold rounded-lg transition-all duration-300 ${
                      isEmitting
                        ? "bg-gradient-to-r from-yellow-500 to-orange-500 shadow-lg shadow-orange-500/50"
                        : "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50"
                    }`}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Zap className={`w-5 h-5 ${isEmitting ? "animate-spin" : ""}`} />
                      {isEmitting ? "Emitting..." : "Emit Photon Wave"}
                    </div>
                  </Button>
                </motion.div>
              </TabsContent>

              <TabsContent value="settings" className="space-y-6 mt-4">

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
                    className="w-full p-3 rounded-lg bg-gradient-to-r from-slate-700 to-slate-600 text-slate-200 shadow-lg transition-all duration-300 hover:from-slate-600 hover:to-slate-500 border border-slate-600/50"
                    onClick={toggleMode}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {mode}
                  </motion.button>
                </motion.div>

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
                    className="w-full p-3 rounded-lg bg-gradient-to-r from-slate-700 to-slate-600 text-slate-200 shadow-lg transition-all duration-300 hover:from-slate-600 hover:to-slate-500 border border-slate-600/50"
                    onClick={togglePerformance}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {performance}
                  </motion.button>
                </motion.div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
