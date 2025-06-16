import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import QuantumPlayground from './pages/QuantumPlayground';
import Calculator from './pages/calculator';
import EloMath from './pages/EloMath';
import Quantum from './pages/Quantum';
import { useEffect } from 'react';

// Component to track route changes using gtag
const RouteChangeTracker = () => {
  const location = useLocation();
 
  useEffect(() => {
    // Send pageview to Google Analytics using gtag
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', 'G-JLHG9V26Y1', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
 
  return null;
};

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