import { HashRouter as Router, Routes, Route,} from 'react-router-dom';
import Home from './pages/Home';
import QuantumPlayground from './pages/QuantumPlayground';
import Calculator from './pages/calculator';
import EloMath from './pages/EloMath';
import Quantum from './pages/Quantum';
import { useEffect } from 'react';
import ReactGA from 'react-ga4';

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

// Component to track route changes
const RouteChangeTracker = () => {
  const location = useLocation();
 
   useEffect(() => {
     // Send a pageview event to Google Analytics
     ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
   }, [location]);
 
   return null; // This component does not render anything
 };

// Using HashRouter instead of BrowserRouter for GitHub Pages compatibility
export default function App() {
   useEffect(() => {
     // Initialize Google Analytics
     if (GA_MEASUREMENT_ID) {
       ReactGA.initialize(GA_MEASUREMENT_ID);
       console.log("GA Initialized");
     }
   }, []);
}

// Using HashRouter instead of BrowserRouter for GitHub Pages compatibility
export default function App() {
  return (
    <Router>
      <RouteChangeTracker />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/atom" element={<QuantumPlayground />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/elo-math" element={<EloMath />} />
        <Route path="/quantum" element={<Quantum />} />
        {/* Add more routes as you develop new simulations */}
      </Routes>
    </Router>
  );
}
