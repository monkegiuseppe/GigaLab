import { useState, useRef, useCallback } from "react" 
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion" 
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

// ---  SimulationCard component ---

const SimulationCard = ({ simulation, isActive, onMouseEnter, onMouseLeave }) => {
  const { id, title, description, color, image, path, available } = simulation
  const cardRef = useRef(null)

  // --- Use MotionValues instead of useState ---
  // These values can be updated without triggering a re-render.
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // ---Use useTransform for declarative transformations ---
  // Create derived motion values. These will update automatically when mouseX/mouseY change.
  // The second argument is the input range, the third is the output range.
  const rotateX = useTransform(mouseY, [-20, 20], [20, -20]) // Inverted for natural feel
  const rotateY = useTransform(mouseX, [-20, 20], [-20, 20])

  // Add a spring for smoother return-to-center animation
  const springConfig = { stiffness: 400, damping: 25, mass: 0.5 }
  const springRotateX = useSpring(rotateX, springConfig)
  const springRotateY = useSpring(rotateY, springConfig)

  const parallaxStrength = 0.8
  const backgroundParallax = {
    x: useTransform(mouseX, [-20, 20], [-5, 5]),
    y: useTransform(mouseY, [-20, 20], [-5, 5]),
  }
  const iconParallax = {
    x: useTransform(mouseX, [-20, 20], [-16, 16]),
    y: useTransform(mouseY, [-20, 20], [-16, 16]),
  }
  const titleParallax = {
    x: useTransform(mouseX, [-20, 20], [-12, 12]),
    y: useTransform(mouseY, [-20, 20], [-12, 12]),
  }
  const contentParallax = {
    x: useTransform(mouseX, [-20, 20], [-8, 8]),
    y: useTransform(mouseY, [-20, 20], [-8, 8]),
  }
  const progressParallax = {
    x: useTransform(mouseX, [-20, 20], [-14, 14]),
    y: useTransform(mouseY, [-20, 20], [-14, 14]),
  }


  // --- event handlers ---
  const handleMouseMove = (e) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const relativeX = e.clientX - rect.left
    const relativeY = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    // Set the motion values. 
    mouseX.set((relativeX - centerX) / centerX * 20)
    mouseY.set((relativeY - centerY) / centerY * 20)
  }

  const handleMouseEnter = () => {
    onMouseEnter(id)
  }

  const handleMouseLeave = () => {
    onMouseLeave()
    // Reset motion values on leave
    mouseX.set(0)
    mouseY.set(0)
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
          // --- Connect motion values to the style prop ---
          style={{
            rotateX: springRotateX, // Use the spring-animated value
            rotateY: springRotateY,
            transformStyle: "preserve-3d",
            opacity: available ? 1 : 0.7,
            cursor: available ? "pointer" : "not-allowed",
          }}
          // Use the `animate` prop for state-driven changes (active vs inactive)
          animate={{
            y: isActive ? -8 : 0,
            scale: isActive ? 1.02 : 1,
            boxShadow: isActive
              ? `0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px ${color}40, inset 0 1px 0 rgba(255, 255, 255, 0.1)`
              : "0 20px 40px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
          }}
          transition={{
            type: "spring",
            stiffness: 800,
            damping: 15,
            mass: 0.5,
          }}
        >
          {/* Background Gradient with Parallax */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br"
            style={{
              background: `linear-gradient(to bottom right, ${color}20, ${color}10)`,
              opacity: 0.5,
              x: backgroundParallax.x,
              y: backgroundParallax.y,
            }}
            animate={{
              opacity: isActive ? 0.8 : 0.5,
              scale: isActive ? 1.05 : 1,
            }}
            transition={{ duration: 0.2 }}
          />

          {/* Floating Background Elements for Depth */}
          <motion.div
            className="absolute inset-0 opacity-10"
            style={{
                x: useTransform(mouseX, [-20, 20], [-10, 10]),
                y: useTransform(mouseY, [-20, 20], [-10, 10]),
                rotate: useTransform(mouseX, [-20, 20], [-5, 5])
            }}
            transition={{ duration: 0.2 }}
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
              style={{
                x: iconParallax.x,
                y: iconParallax.y,
                z: isActive ? 30 : 0,
                transformStyle: "preserve-3d",
              }}
              animate={{
                scale: isActive ? 1.1 : 1,
                filter: isActive ? `drop-shadow(0 0 8px ${color})` : "none",
              }}
              transition={{ duration: 0.15 }}
            >
              {image}
              {/* Icon shadow for depth */}
              <motion.div
                className="absolute inset-0 text-5xl opacity-20 blur-sm"
                style={{
                  color: color,
                  transformStyle: "preserve-3d",
                  zIndex: -1,
                  x: useTransform(iconParallax.x, val => val * -0.3),
                  y: useTransform(iconParallax.y, val => val * -0.3 + 2),
                  z: -10,
                }}
              >
                {image}
              </motion.div>
            </motion.div>

            {/* Title with medium parallax */}
            <motion.h2
              className="text-2xl font-bold mb-2 relative z-20"
              style={{
                x: titleParallax.x,
                y: titleParallax.y,
                z: isActive ? 15 : 0,
                transformStyle: "preserve-3d",
              }}
              animate={{
                scale: isActive ? 1.05 : 1,
                transformOrigin: "left",
              }}
              transition={{ duration: 0.2 }}
            >
              {title}
            </motion.h2>

            {/* Description with subtle parallax */}
            <motion.p
              className="text-slate-300 mb-6 flex-grow relative z-10"
              style={{
                x: contentParallax.x,
                y: contentParallax.y,
                z: isActive ? 5 : 0,
                transformStyle: "preserve-3d",
              }}
              transition={{ duration: 0.2 }}
            >
              {description}
            </motion.p>

            {/* Status and Progress Bar with parallax */}
            <motion.div
              className="mt-auto relative z-20"
              style={{
                x: progressParallax.x,
                y: progressParallax.y,
                z: isActive ? 20 : 0,
                transformStyle: "preserve-3d",
              }}
              transition={{ duration: 0.2 }}
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
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: `linear-gradient(to right, ${color}80, ${color})`,
                    x: useTransform(progressParallax.x, val => val * 0.2),
                  }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Floating particles - opacity is cheaper than mounting/unmounting */}
          <motion.div animate={{ opacity: isActive ? 1 : 0 }}>
            <motion.div
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                x: useTransform(mouseX, val => 40 + val * 0.5),
                y: useTransform(mouseY, val => 20 + val * 0.5),
              }}
              animate={{
                opacity: [0, 0.6, 0],
                scale: [0, 1, 0],
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0 }}
            />
            {/* ... other particles ... */}
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  )
}


export default function Home() {
  const [activeSim, setActiveSim] = useState(null)
  const [theme, setTheme] = useState("blue")
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ---  Stabilize event handlers with useCallback ---
  // This ensures the functions aren't recreated on every render, which is
  // important for the `React.memo` optimization on SimulationCard.
  const handleMouseEnter = useCallback((id) => {
    setActiveSim(id)
  }, []) // Empty dependency array means this function is created only once.

  const handleMouseLeave = useCallback(() => {
    setActiveSim(null)
  }, [])

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
      className="min-h-screen relative"
      style={{
        backgroundColor: currentTheme.bg,
        color: currentTheme.text,
      }}
    >
      {/* Left Sidebar */}
      <motion.div
        className={`fixed top-0 left-0 z-50 h-full w-64 p-4 flex-col backdrop-blur-xl border-r border-slate-700/30 transition-transform duration-300 ease-in-out md:flex ${
          isMenuOpen ? "translate-x-0 flex" : "-translate-x-full"
        }`}
        initial={{ x: -256, opacity: 0 }} // Start further left to match width
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ background: currentTheme.sidebar }}
      >
        {/*Close button for mobile view */}
        <button onClick={() => setIsMenuOpen(false)} className="absolute top-4 right-4 text-white md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        
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
                to={sim.available ? sim.path : "#"}
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

        {/* Theme Selector  */}
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

      {/* Hamburger Menu Button  */}
      <div className="md:hidden p-4 fixed top-0 left-0 z-40">
        <button onClick={() => setIsMenuOpen(true)} className="p-2 rounded-md" style={{ background: currentTheme.sidebar }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>

      {/* Main Content */}
      <main className="px-4 py-16 w-full md:pl-72"> 
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto max-w-7xl">
          {simulations.map((sim) => (
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
      </main>

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