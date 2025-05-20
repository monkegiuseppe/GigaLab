import { useState } from 'react';
import { Link } from 'react-router-dom';

// Simulation data for each card
const simulations = [
  {
    id: 'quantum-playground',
    title: 'Atom',
    description: 'Explore electron clouds and photon interactions',
    color: '#1a73e8',
    image: '⚛️',
    path: '/quantum-playground',
    available: true
  },
  {
    id: 'gravity-wells',
    title: 'Placeholder',
    description: 'Placeholder',
    color: '#ea4335',
    image: '🪐',
    path: '/gravity-wells',
    available: false
  },
  {
    id: 'fluid-dynamics',
    title: 'Placeholder',
    description: 'Placeholder',
    color: '#34a853',
    image: '💧',
    path: '/fluid-dynamics',
    available: false
  },
  {
    id: 'wave-mechanics',
    title: 'Placeholder',
    description: 'Placeholder',
    color: '#fbbc04',
    image: '🌊',
    path: '/wave-mechanics',
    available: false
  },
  {
    id: 'particle-collider',
    title: 'Placeholder',
    description: 'Placeholder',
    color: '#9c27b0',
    image: '💥',
    path: '/particle-collider',
    available: false
  },
  {
    id: 'electric-fields',
    title: 'Placeholder',
    description: 'Placeholder',
    color: '#00bcd4',
    image: '⚡',
    path: '/electric-fields',
    available: false
  },
];

// SimulationCard component
function SimulationCard({ simulation, isActive, onMouseEnter, onMouseLeave, themeColors }) {
  const { id, title, description, color, image, path, available } = simulation;
  
  // Use the simulation's color for card accents
  const cardAccentColor = color;
  
  return (
    <Link 
      to={available ? path : '#'}
      className="block rounded-xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl"
      style={{ 
        opacity: available ? 1 : 0.7,
        cursor: available ? 'pointer' : 'not-allowed',
        transform: isActive ? 'translateY(-5px)' : 'translateY(0)'
      }}
      onMouseEnter={() => onMouseEnter(id)}
      onMouseLeave={onMouseLeave}
    >
      <div 
        className="glass card-content transition-transform duration-500 ease-out h-full p-6 flex flex-col"
        style={{ 
          borderLeft: `3px solid ${cardAccentColor}`,
          boxShadow: isActive ? `0 0 20px ${cardAccentColor}80` : 'none',
          background: themeColors.card
        }}
      >
        <div className="emoji-icon text-5xl mb-4 transition-all duration-300" style={{ 
          filter: isActive ? `drop-shadow(0 0 10px ${cardAccentColor})` : 'none',
          transform: isActive ? 'scale(1.05)' : 'scale(1)',
          transformOrigin: 'center'
        }}>
          {image}
        </div>
        
        <h2 className="text-2xl font-bold mb-2 transition-all duration-300" style={{ 
          color: cardAccentColor,
          transform: isActive ? 'scale(1.05)' : 'scale(1)',
          transformOrigin: 'left'
        }}>
          {title}
        </h2>
        
        <p style={{ color: themeColors.textSecondary }} className="mb-6 flex-grow">
          {description}
        </p>
        
        <div className="mt-auto">
          <div className={`text-sm font-medium ${available ? 'text-green-400' : 'text-amber-400'}`}>
            {available ? 'Available Now' : 'Coming Soon'}
          </div>
          
          <div className="progress-bar h-1 mt-3 rounded-full transition-all duration-500" 
            style={{ 
              background: `linear-gradient(to right, ${cardAccentColor}80, ${cardAccentColor})`,
              opacity: isActive ? 1 : 0,
              transform: isActive ? 'scaleX(1)' : 'scaleX(0)'
            }}>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  const [activeSim, setActiveSim] = useState(null);
  const [theme, setTheme] = useState('gray'); // Changed from 'dark' to 'gray'
  
  const handleMouseEnter = (id) => {
    setActiveSim(id);
  };
  
  const handleMouseLeave = () => {
    setActiveSim(null);
  };
  
  // Theme variables
  const themeStyles = {
    dark: {
      bg: 'rgba(20, 40, 45, 1)',
      sidebar: 'rgba(50, 90, 100, 0.3)',
      card: 'rgba(50, 90, 100, 0.8)',
      accent: 'rgb(0, 160, 170)',
      accentHover: 'rgb(0, 190, 210)',
      text: 'rgba(230, 240, 245, 0.9)',
      textSecondary: 'rgba(180, 200, 210, 0.7)',
      gradient: 'from-[rgb(0,160,170)] to-[rgb(0,190,210)]'
    },
    light: {
      bg: 'rgba(245, 240, 230, 1)',
      sidebar: 'rgba(230, 220, 200, 0.7)',
      card: 'rgba(235, 225, 210, 0.9)',
      accent: 'rgb(210, 120, 50)',
      accentHover: 'rgb(230, 150, 80)',
      text: 'rgba(70, 60, 50, 0.9)',
      textSecondary: 'rgba(100, 90, 80, 0.7)',
      gradient: 'from-[rgb(230,150,80)] to-[rgb(210,120,50)]'
    },
    blue: {
      bg: '#0f172a',
      sidebar: 'rgba(30, 41, 59, 0.8)',
      card: 'rgba(30, 41, 59, 0.8)',
      accent: 'rgb(59, 130, 246)',
      accentHover: 'rgb(96, 165, 250)',
      text: 'rgba(255, 255, 255, 0.87)',
      textSecondary: 'rgba(203, 213, 225, 0.7)',
      gradient: 'from-blue-400 via-purple-500 to-pink-500'
    },
    gray: {
      bg: '#1a1a1a',
      sidebar: 'rgba(40, 40, 40, 0.8)',
      card: 'rgba(50, 50, 50, 0.8)',
      accent: 'rgb(220, 40, 40)',
      accentHover: 'rgb(240, 70, 70)',
      text: 'rgba(220, 220, 220, 0.9)',
      textSecondary: 'rgba(180, 180, 180, 0.7)',
      gradient: 'from-[rgb(220,40,40)] to-[rgb(240,70,70)]'
    }
  };
  
  const currentTheme = themeStyles[theme];
  
  // Apply theme to CSS variables
  document.documentElement.style.setProperty('--accent-color', currentTheme.accent);
  document.documentElement.style.setProperty('--accent-color-hover', currentTheme.accentHover);
  document.documentElement.style.setProperty('--text-primary', currentTheme.text);
  document.documentElement.style.setProperty('--text-secondary', currentTheme.textSecondary);
  document.documentElement.style.setProperty('--bg-card', currentTheme.card);
  
  return (
    <div className="min-h-screen grid grid-cols-12" style={{ 
      backgroundColor: currentTheme.bg,
      color: currentTheme.text
    }}>
      {/* Left Sidebar */}
      <div className="col-span-2 glass fixed h-full p-4 flex flex-col" style={{ background: currentTheme.sidebar }}>
        <div className="text-xl font-bold mb-8" style={{ color: currentTheme.accent }}>GigaLab</div>
        <nav className="flex flex-col space-y-4">
          {simulations.map(sim => (
            <Link 
              key={sim.id} 
              to={sim.available ? sim.path : '#'} 
              className={`p-2 rounded transition-colors ${sim.available ? 'hover:bg-opacity-20' : 'opacity-50 cursor-not-allowed'}`}
              style={{ 
                color: currentTheme.text,
                backgroundColor: sim.available && theme === activeSim ? `${currentTheme.accent}20` : 'transparent'
              }}
            >
              <span className="mr-2">{sim.image}</span>
              {sim.title}
            </Link>
          ))}
        </nav>
        
        {/* Theme Selector */}
        <div className="mt-8 mb-4">
          <p className="text-sm mb-2" style={{ color: currentTheme.textSecondary }}>Select Theme</p>
          <div className="flex space-x-2">
            <button 
              onClick={() => setTheme('dark')}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${theme === 'dark' ? 'ring-2 scale-110' : ''}`}
              style={{ 
                background: 'rgba(20, 40, 45, 1)',
                ringColor: themeStyles.dark.accent
              }}
              title="Dark Theme"
            >
              {theme === 'dark' && <span className="text-xs">✓</span>}
            </button>
            <button 
              onClick={() => setTheme('light')}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${theme === 'light' ? 'ring-2 scale-110' : ''}`}
              style={{ 
                background: 'rgba(245, 240, 230, 1)',
                ringColor: themeStyles.light.accent
              }}
              title="Light Theme"
            >
              {theme === 'light' && <span className="text-xs text-gray-800">✓</span>}
            </button>
            <button 
              onClick={() => setTheme('blue')}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${theme === 'blue' ? 'ring-2 scale-110' : ''}`}
              style={{ 
                background: '#0f172a',
                ringColor: themeStyles.blue.accent
              }}
              title="Blue Theme"
            >
              {theme === 'blue' && <span className="text-xs">✓</span>}
            </button>
            <button 
              onClick={() => setTheme('gray')}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${theme === 'gray' ? 'ring-2 scale-110' : ''}`}
              style={{ 
                background: '#1a1a1a',
                ringColor: themeStyles.gray.accent
              }}
              title="Gray Theme"
            >
              {theme === 'gray' && <span className="text-xs">✓</span>}
            </button>
          </div>
        </div>
        
        <div className="mt-auto text-sm">
          <button 
            className="w-full p-2 rounded border transition-all hover:bg-opacity-90" 
            style={{ 
              backgroundColor: currentTheme.accent,
              borderColor: currentTheme.accent,
              color: theme === 'light' ? '#fff' : currentTheme.text
            }}
          >
            Contact
          </button>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="col-span-10 col-start-3 px-8 py-16 max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h1 className={`text-6xl font-bold mb-4 bg-gradient-to-r ${currentTheme.gradient} text-transparent bg-clip-text px-4 py-4`}>
            GigaLab
          </h1>
          <p className="text-xl" style={{ color: currentTheme.text }}>
            Interactive physics simulations (and other stuff)
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
          {simulations.map((sim) => (
            <SimulationCard
              key={sim.id}
              simulation={sim}
              isActive={activeSim === sim.id}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              themeColors={currentTheme}
            />
          ))}
        </div>
      </div>
      
      {/* Background animation */}
      <div className="bg-animate"></div>
    </div>
  );
}