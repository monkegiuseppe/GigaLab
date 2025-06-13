import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Heart, ExternalLink } from "lucide-react"
import { Link } from 'react-router-dom'

// Simulation data for each card
const simulations = [
  {
    id: "quantum-playground",
    title: "Atom Simulation", 
    description: "Interactive iron atom with electron orbitals and X-ray absorption", 
    color: "#06b6d4",
    image: "⚛️",
    path: "/atom", 
    available: true,
  },

    {
    id: "physics-calculator",
    title: "Advanced Calculator",
    description: "Graphing, calculus, and linear algebra tools",
    color: "#10b981",
    image: "🧮",
    path: "/calculator",
    available: true,
  },
  {
    id: "EloMath",
    title: "EloMath",
    description: "Learn math with Elo-based ranking",
    color: "#10b981",
    image: "📊", 
    path: "/elo-math", 
    available: true,
  },
  {
      id: "quantum", 
      title: "Quantum Computing",
      description: "(WIP)An interactive journey from single qubits to quantum algorithms.",
      color: "#8b5cf6", 
      image: "🌌",
      path: "/quantum",
      available: false,
    },
  {
    id: "particle-collider",
    title: "Placeholder",
    description: "Placeholder",
    color: "#8b5cf6",
    image: "💥",
    path: "/particle-collider",
    available: false,
  },
  {
    id: "electric-fields",
    title: "Placeholder",
    description: "Placeholder",
    color: "#0ea5e9",
    image: "⚡",
    path: "/electric-fields",
    available: false,
  },
]

// SimulationCard component
function SimulationCard({ simulation, isActive, onMouseEnter, onMouseLeave }) {
  const { id, title, description, color, image, path, available } = simulation
  const cardRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()

    // Get mouse position relative to card
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    // Convert to center-based coordinates
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Calculate offset from center
    const offsetX = mouseX - centerX
    const offsetY = mouseY - centerY

    // Normalize to -1 to 1 range and apply sensitivity
    // Increased from 12 to 20 for more drastic effect
    const normalizedX = (offsetX / centerX) * 20
    const normalizedY = (offsetY / centerY) * 20

    setMousePosition({ x: normalizedX, y: normalizedY })
  }

  const handleMouseEnter = (e) => {
    setIsHovering(true)
    onMouseEnter(id)
    handleMouseMove(e)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    onMouseLeave()
    setMousePosition({ x: 0, y: 0 })
  }

  // Calculate rotation - the card should tilt AWAY from the mouse
  // When mouse is at top (negative Y), card should tilt down (positive rotateX)
  // When mouse is at bottom (positive Y), card should tilt up (negative rotateX)
  const rotateX = isHovering ? mousePosition.y : 0 // Positive when mouse at top, negative when mouse at bottom
  const rotateY = isHovering ? -mousePosition.x : 0 // Negative when mouse at right, positive when mouse at left

  // Calculate parallax offsets for different layers
  const parallaxStrength = 0.8 // Increased from 0.5 for more drastic effect
  const backgroundParallax = {
    x: mousePosition.x * parallaxStrength * 0.3,
    y: mousePosition.y * parallaxStrength * 0.3,
  }
  const iconParallax = {
    x: mousePosition.x * parallaxStrength * 0.8,
    y: mousePosition.y * parallaxStrength * 0.8,
  }
  const titleParallax = {
    x: mousePosition.x * parallaxStrength * 0.6,
    y: mousePosition.y * parallaxStrength * 0.6,
  }
  const contentParallax = {
    x: mousePosition.x * parallaxStrength * 0.4,
    y: mousePosition.y * parallaxStrength * 0.4,
  }
  const progressParallax = {
    x: mousePosition.x * parallaxStrength * 0.7,
    y: mousePosition.y * parallaxStrength * 0.7,
  }

  return (
    <motion.div
      ref={cardRef}
      className="relative min-h-[280px]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{ perspective: "1000px" }}
    >
      <Link to={available ? path : "#"} className="block h-full">
        <motion.div
          className="backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl overflow-hidden h-full relative"
          animate={{
            y: isActive ? -8 : 0,
            scale: isActive ? 1.02 : 1,
            rotateX: rotateX,
            rotateY: rotateY,
            boxShadow: isActive
              ? `0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px ${color}40, inset 0 1px 0 rgba(255, 255, 255, 0.1)`
              : "0 20px 40px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
          }}
          transition={{
            type: "spring",
            stiffness: 800, // Increased from 400 for more responsiveness
            damping: 15, // Reduced from 30 for faster response
            mass: 0.5, // Added lower mass for quicker movement
          }}
          style={{
            opacity: available ? 1 : 0.7,
            cursor: available ? "pointer" : "not-allowed",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Background Gradient with Parallax */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br"
            style={{
              background: `linear-gradient(to bottom right, ${color}20, ${color}10)`,
              opacity: 0.5,
            }}
            animate={{
              opacity: isActive ? 0.8 : 0.5,
              x: backgroundParallax.x,
              y: backgroundParallax.y,
              scale: isActive ? 1.05 : 1,
            }}
            transition={{ duration: 0.2 }} // Reduced from 0.3 for faster response
          />

          {/* Floating Background Elements for Depth */}
          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{
              x: backgroundParallax.x * 1.5,
              y: backgroundParallax.y * 1.5,
              rotate: isActive ? mousePosition.x * 0.1 : 0,
            }}
            transition={{ duration: 0.2 }} // Reduced from 0.4 for faster response
          >
            <div
              className="absolute top-4 right-4 w-16 h-16 rounded-full blur-xl"
              style={{ background: `radial-gradient(circle, ${color}40, transparent)` }}
            />
            <div
              className="absolute bottom-6 left-6 w-12 h-12 rounded-full blur-lg"
              style={{ background: `radial-gradient(circle, ${color}30, transparent)` }}
            />
          </motion.div>

          {/* Card Content with Layered Parallax */}
          <div className="relative p-6 flex flex-col h-full">
            {/* Icon with strongest parallax effect */}
            <motion.div
              className="text-5xl mb-4 relative z-30"
              animate={{
                scale: isActive ? 1.1 : 1,
                filter: isActive ? `drop-shadow(0 0 8px ${color})` : "none",
                rotateX: rotateX * 0.2, // Reduced secondary rotation
                rotateY: rotateY * 0.2,
                x: iconParallax.x,
                y: iconParallax.y,
                z: isActive ? 30 : 0, // Increased from 20 for more depth
              }}
              transition={{ duration: 0.15 }} // Reduced from 0.2 for faster response
              style={{ transformStyle: "preserve-3d" }}
            >
              {image}
              {/* Icon shadow for depth */}
              <motion.div
                className="absolute inset-0 text-5xl opacity-20 blur-sm"
                animate={{
                  x: iconParallax.x * -0.3,
                  y: iconParallax.y * -0.3 + 2,
                  z: -10,
                }}
                style={{
                  color: color,
                  transformStyle: "preserve-3d",
                  zIndex: -1,
                }}
              >
                {image}
              </motion.div>
            </motion.div>

            {/* Title with medium parallax */}
            <motion.h2
              className="text-2xl font-bold mb-2 relative z-20"
              animate={{
                scale: isActive ? 1.05 : 1,
                transformOrigin: "left",
                x: titleParallax.x,
                y: titleParallax.y,
                z: isActive ? 15 : 0, // Increased from 10 for more depth
              }}
              transition={{ duration: 0.2 }} // Reduced from 0.3 for faster response
              style={{ transformStyle: "preserve-3d" }}
            >
              {title}
            </motion.h2>

            {/* Description with subtle parallax */}
            <motion.p
              className="text-slate-300 mb-6 flex-grow relative z-10"
              animate={{
                x: contentParallax.x,
                y: contentParallax.y,
                z: isActive ? 5 : 0,
              }}
              transition={{ duration: 0.2 }} // Reduced from 0.3 for faster response
              style={{ transformStyle: "preserve-3d" }}
            >
              {description}
            </motion.p>

            {/* Status and Progress Bar with parallax */}
            <motion.div
              className="mt-auto relative z-20"
              animate={{
                x: progressParallax.x,
                y: progressParallax.y,
                z: isActive ? 20 : 0, // Increased from 15 for more depth
              }}
              transition={{ duration: 0.2 }} // Reduced from 0.3 for faster response
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className={`text-sm font-medium ${available ? "text-green-400" : "text-amber-400"}`}>
                {available ? "Available Now" : "Coming Soon"}
              </div>

              <motion.div
                className="h-1 mt-3 rounded-full relative overflow-hidden"
                style={{
                  background: `linear-gradient(to right, ${color}20, ${color}10)`,
                }}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{
                  scaleX: isActive ? 1 : 0,
                  opacity: isActive ? 1 : 0,
                }}
                transition={{ duration: 0.3 }} // Reduced from 0.5 for faster response
              >
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: `linear-gradient(to right, ${color}80, ${color})`,
                  }}
                  animate={{
                    x: isActive ? progressParallax.x * 0.2 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Floating particles for extra depth */}
          {isActive && (
            <>
              <motion.div
                className="absolute w-1 h-1 bg-white rounded-full opacity-60"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: [20, iconParallax.x + 40, 60],
                  y: [30, iconParallax.y + 20, 10],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 0,
                }}
              />
              <motion.div
                className="absolute w-0.5 h-0.5 rounded-full opacity-40"
                style={{ backgroundColor: color }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: [200, titleParallax.x + 180, 160],
                  y: [100, titleParallax.y + 80, 60],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 0.5,
                }}
              />
              <motion.div
                className="absolute w-0.5 h-0.5 bg-white rounded-full opacity-30"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: [150, contentParallax.x + 130, 110],
                  y: [200, contentParallax.y + 180, 160],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 1,
                }}
              />
            </>
          )}
        </motion.div>
      </Link>
    </motion.div>
  )
}

export default function Home() {
  const [activeSim, setActiveSim] = useState(null)
  const [theme, setTheme] = useState("blue")

  const handleMouseEnter = (id) => {
    setActiveSim(id)
  }

  const handleMouseLeave = () => {
    setActiveSim(null)
  }

  // Theme variables
  const themeStyles = {
    dark: {
      bg: "rgba(20, 40, 45, 1)",
      sidebar: "rgba(50, 90, 100, 0.3)",
      card: "rgba(50, 90, 100, 0.8)",
      accent: "rgb(0, 160, 170)",
      accentHover: "rgb(0, 190, 210)",
      text: "rgba(230, 240, 245, 0.9)",
      textSecondary: "rgba(180, 200, 210, 0.7)",
      gradient: "from-[rgb(0,160,170)] to-[rgb(0,190,210)]",
    },
    light: {
      bg: "rgba(245, 240, 230, 1)",
      sidebar: "rgba(230, 220, 200, 0.7)",
      card: "rgba(235, 225, 210, 0.9)",
      accent: "rgb(210, 120, 50)",
      accentHover: "rgb(230, 150, 80)",
      text: "rgba(70, 60, 50, 0.9)",
      textSecondary: "rgba(100, 90, 80, 0.7)",
      gradient: "from-[rgb(230,150,80)] to-[rgb(210,120,50)]",
    },
    blue: {
      bg: "#0f172a",
      sidebar: "rgba(30, 41, 59, 0.8)",
      card: "rgba(30, 41, 59, 0.8)",
      accent: "rgb(59, 130, 246)",
      accentHover: "rgb(96, 165, 250)",
      text: "rgba(255, 255, 255, 0.87)",
      textSecondary: "rgba(203, 213, 225, 0.7)",
      gradient: "from-blue-400 via-purple-500 to-pink-500",
    },
    gray: {
      bg: "#1a1a1a",
      sidebar: "rgba(40, 40, 40, 0.8)",
      card: "rgba(50, 50, 50, 0.8)",
      accent: "rgb(220, 40, 40)",
      accentHover: "rgb(240, 70, 70)",
      text: "rgba(220, 220, 220, 0.9)",
      textSecondary: "rgba(180, 180, 180, 0.7)",
      gradient: "from-[rgb(220,40,40)] to-[rgb(240,70,70)]",
    },
  }

  const currentTheme = themeStyles[theme]

  return (
    <div
      className="min-h-screen grid grid-cols-12"
      style={{
        backgroundColor: currentTheme.bg,
        color: currentTheme.text,
      }}
    >
      {/* Left Sidebar */}
      <motion.div
        className="col-span-2 fixed h-full p-4 flex flex-col backdrop-blur-xl border-r border-slate-700/30"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ background: currentTheme.sidebar }}
      >
        <motion.div
          className="text-xl font-bold mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{ color: currentTheme.accent }}
        >
          GigaLab
        </motion.div>

        <nav className="flex flex-col space-y-2">
          {simulations.map((sim, index) => (
            <motion.div
              key={sim.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index + 0.5 }}
            >
              <Link
                href={sim.available ? sim.path : "#"}
                className={`p-2 rounded-lg transition-colors flex items-center gap-2 ${
                  sim.available ? "hover:bg-slate-700/30" : "opacity-50 cursor-not-allowed"
                }`}
                style={{
                  color: currentTheme.text,
                  backgroundColor: sim.id === activeSim ? `${currentTheme.accent}20` : "transparent",
                }}
              >
                <span>{sim.image}</span>
                {sim.available ? sim.title : `${sim.title} (Soon)`}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Theme Selector */}
        <motion.div className="mt-8 mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
          <p className="text-sm mb-2" style={{ color: currentTheme.textSecondary }}>
            Select Theme
          </p>
          <div className="flex space-x-2">
            <motion.button
              onClick={() => setTheme("dark")}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${theme === "dark" ? "ring-2 scale-110" : ""}`}
              whileHover={{ scale: theme === "dark" ? 1.1 : 1.2 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: "rgba(20, 40, 45, 1)",
                ringColor: themeStyles.dark.accent,
              }}
              title="Dark Theme"
            >
              {theme === "dark" && <span className="text-xs">✓</span>}
            </motion.button>
            <motion.button
              onClick={() => setTheme("light")}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${theme === "light" ? "ring-2 scale-110" : ""}`}
              whileHover={{ scale: theme === "light" ? 1.1 : 1.2 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: "rgba(245, 240, 230, 1)",
                ringColor: themeStyles.light.accent,
              }}
              title="Light Theme"
            >
              {theme === "light" && <span className="text-xs text-gray-800">✓</span>}
            </motion.button>
            <motion.button
              onClick={() => setTheme("blue")}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${theme === "blue" ? "ring-2 scale-110" : ""}`}
              whileHover={{ scale: theme === "blue" ? 1.1 : 1.2 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: "#0f172a",
                ringColor: themeStyles.blue.accent,
              }}
              title="Blue Theme"
            >
              {theme === "blue" && <span className="text-xs">✓</span>}
            </motion.button>
            <motion.button
              onClick={() => setTheme("gray")}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${theme === "gray" ? "ring-2 scale-110" : ""}`}
              whileHover={{ scale: theme === "gray" ? 1.1 : 1.2 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: "#1a1a1a",
                ringColor: themeStyles.gray.accent,
              }}
              title="Gray Theme"
            >
              {theme === "gray" && <span className="text-xs">✓</span>}
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          className="mt-auto space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <motion.button
            className="w-full p-2 rounded-xl flex items-center justify-center gap-2 transition-all"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              backgroundColor: currentTheme.accent,
              color: theme === "light" ? "#fff" : currentTheme.text,
              boxShadow: `0 8px 20px ${currentTheme.accent}30`,
            }}
          >
            <Heart className="w-4 h-4" />
            About
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="col-span-10 col-start-3 px-8 py-16 max-w-7xl mx-auto">
        <motion.header
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1
            className={`text-6xl font-bold mb-4 bg-gradient-to-r ${currentTheme.gradient} text-transparent bg-clip-text px-4 py-4`}
          >
            GigaLab
          </h1>
          <p className="text-xl" style={{ color: currentTheme.text }}>
            Interactive physics simulations (and other stuff)
          </p>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
          {simulations.map((sim, index) => (
            <SimulationCard
              key={sim.id}
              simulation={sim}
              isActive={activeSim === sim.id}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium"
            style={{ color: currentTheme.accent }}
            whileHover={{ scale: 1.05 }}
          >
            <ExternalLink className="w-4 h-4" />
            Learn more about my projects
          </motion.div>
        </motion.div>
      </div>

      {/* Background animation */}
      <div className="fixed inset-0 -z-10 bg-animate">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      {/* CSS for background patterns */}
      <style>{`
        .bg-grid-pattern {
          background-image: radial-gradient(circle, ${currentTheme.accent}20 1px, transparent 1px);
          background-size: 30px 30px;
        }
        
        @keyframes pulse {
          0% { opacity: 0.03; }
          50% { opacity: 0.06; }
          100% { opacity: 0.03; }
        }
        
        .bg-animate {
          animation: pulse 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
