import { HashRouter as Router, Routes, Route,} from 'react-router-dom';
import Home from './pages/Home';
import QuantumPlayground from './pages/QuantumPlayground';
import Calculator from './pages/calculator';
import EloMath from './pages/EloMath';

// Using HashRouter instead of BrowserRouter for GitHub Pages compatibility
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/atom" element={<QuantumPlayground />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/elo-math" element={<EloMath />} />
        {/* Add more routes as you develop new simulations */}
      </Routes>
    </Router>
  );
}
