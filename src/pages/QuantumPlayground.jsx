import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Link } from 'react-router-dom';

// Placeholder for your quantum playground simulation
export default function QuantumPlayground() {
  const mountRef = useRef(null);
  
  useEffect(() => {
    // This is where you'll integrate your Three.js simulation
    // This is just a placeholder - replace with your actual simulation code
    
    // Basic Three.js setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    
    const camera = new THREE.PerspectiveCamera(
      75, 
      window.innerWidth / window.innerHeight, 
      0.1, 
      1000
    );
    camera.position.z = 5;
    
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);
    
    // Create a simple sphere to represent an electron
    const geometry = new THREE.SphereGeometry(0.5, 32, 32);
    const material = new THREE.MeshBasicMaterial({ 
      color: 0x1a73e8,
      transparent: true,
      opacity: 0.8
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    
    // Add points for electron cloud visualization
    const cloudGeometry = new THREE.BufferGeometry();
    const cloudMaterial = new THREE.PointsMaterial({
      color: 0x88aaff,
      size: 0.05
    });
    
    // Create a cloud of points around the sphere
    const particleCount = 2000;
    const positions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      // Create random points in a spherical shell
      const radius = 1 + Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    
    cloudGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const electronCloud = new THREE.Points(cloudGeometry, cloudMaterial);
    scene.add(electronCloud);
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate the electron cloud
      electronCloud.rotation.x += 0.002;
      electronCloud.rotation.y += 0.001;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col">
      <header className="bg-slate-800 p-4 flex items-center">
        <Link to="/" className="text-white hover:text-blue-300 transition mr-4">
          ← Back to Home
        </Link>
        <h1 className="text-2xl font-bold">Quantum Playground</h1>
      </header>
      
      <div className="flex flex-1">
        {/* This is where your Three.js simulation will be mounted */}
        <div ref={mountRef} className="w-3/4 bg-black" />
        
        <div className="w-1/4 bg-slate-800 p-4 overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">Controls</h2>
          
          <div className="mb-4">
            <label className="block mb-2">Energy Level</label>
            <input
              type="range"
              min="1"
              max="5"
              defaultValue="1"
              className="w-full"
            />
          </div>
          
          <div className="mb-4">
            <label className="block mb-2">Photon Energy (eV)</label>
            <input
              type="range"
              min="0.5"
              max="20"
              step="0.1"
              defaultValue="10.2"
              className="w-full"
            />
          </div>
          
          <button className="w-full bg-blue-600 py-2 rounded font-medium">
            Emit Photon
          </button>
          
          <div className="mt-6">
            <h2 className="text-xl font-bold mb-2">Information</h2>
            <p className="text-sm text-gray-300">
              This is a placeholder. Replace this section with your simulation's
              controls and information. You'll integrate your electron cloud and 
              photon interaction simulation here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
