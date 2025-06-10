import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import './QuantumPlayground.css';
import OrbitalSelector from '../components/OrbitalSelector';
import ControlsSection from '../components/ControlsSection';


export default function QuantumPlayground() {
  const containerRef = useRef(null);
  const [selectedOrbital, setSelectedOrbital] = useState('3p');
  const [photonEnergy, setPhotonEnergy] = useState(52); // Source of truth for photon energy
  const photonEnergyRef = useRef(photonEnergy); // Ref to hold the latest energy for closures
  const [orbitalDataForControls, setOrbitalDataForControls] = useState(null); // Data for graphs
  const switchOrbitalRef = useRef(null);
  const updatePhotonWavelengthRef = useRef(null);
  const [controlsReady, setControlsReady] = useState(false);
  const sceneControlsRef = useRef({
    toggleMode: null,
    togglePerformance: null,
    updateCrossSection: null,
    emitWave: null
  });

  // Handler for orbital changes from UI
  const handleOrbitalChange = (orbitalName) => {
    if (switchOrbitalRef.current) {
      // The switchOrbital function will now also handle setting the photon energy
      switchOrbitalRef.current(orbitalName);
    }
  };

  // Handler for photon energy changes from ControlsSection
  const handlePhotonEnergyChange = (energy) => {
    setPhotonEnergy(energy);
    if (updatePhotonWavelengthRef.current) {
      updatePhotonWavelengthRef.current(energy);
    }
  };

  // Effect to keep the photonEnergyRef synchronized with the state
  useEffect(() => {
    photonEnergyRef.current = photonEnergy;
  }, [photonEnergy]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Core variables
    let scene, camera, renderer, controls;
    const orbitalGroups = {}; 
    let currentOrbital = '3p';
    const particleData = {}; 
    let absorbingOrbitalName = null;
    
    // Shell layering mode
    let layeringMode = 'focused'; // 'focused' or 'all'
    let secondaryOpacity = 0.03; // Changed from 0.1 to 0.05 (5% instead of 10%)
    let performanceMode = 'normal'; // 'normal' or 'low'

    const particleCount = 45000; 
    const particleSize = 0.05;  // Reduced base size for less overlap  

    const spatialGrid = new Map();

    let waveType = 'linear';
    let photons = [];
    let photonWavelength = 0.5;
    let photonSpeed = 2.0;
    let isPhotonActive = false;
    
    let time = 0;
    let waveSpeed = 1.0;
    let waveHeight = 0.8;
    let waveFrequency = 0.3;
    let photonWave = null;

    let absorptionActive = false;
    let absorptionStrength = 0.0;
    let absorptionFrequency = 0.0;
    let absorptionPhase = 0.0;
    let lastWavePosition = 0;

    // Shaders with camera-based culling and improved visibility
    const vertexShader = `
      attribute float a_initialPhase;
      
      uniform float orbitalScale;
      uniform float u_time;
      uniform float u_maxSpeedAtCenter;
      uniform float u_minSpeedAtEdge;
      uniform float u_exponentialFalloffRate;
      uniform float u_crossSectionX;
      uniform float u_absorptionStrength;
      uniform float u_absorptionFrequency;
      uniform float u_absorptionPhase;
      uniform float u_particleScale;
      uniform vec3 u_cameraPosition;
      uniform float u_cameraCullDistance;
      uniform float u_depthCullDistance;
      uniform mat4 u_projectionMatrix;
      uniform float u_frustumPadding;
      uniform bool u_isPrimaryOrbital;
      uniform float u_overlapCullDistance;
      uniform float u_densityThreshold;
      
      varying vec3 vWorldPosition;
      varying vec3 vNormalWorld;
      varying float vDepthFactor;
      varying float vCrossSectionVisibility;
      varying float vCameraCull;
      
      void main() {
          vec3 original_pos = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);

          float angularSpeed = u_maxSpeedAtCenter; // Use only one speed per orbital
          float currentRotationY = angularSpeed * u_time;

          float s = sin(currentRotationY);
          float c = cos(currentRotationY);
          mat4 rotationAnimMatrix = mat4(
              c, 0, s, 0,
              0, 1, 0, 0,
              -s, 0, c, 0,
              0, 0, 0, 1
          );

          vec3 animated_position = (rotationAnimMatrix * vec4(original_pos, 1.0)).xyz;

          float density = exp(-length(animated_position) / orbitalScale);
          if (density < u_densityThreshold) {
              vCameraCull = 0.0; // Hide particle if outside density region
          }

          if (u_absorptionStrength > 0.01) {
              float dist = length(animated_position);
              vec3 direction = normalize(animated_position);
              float displacement = sin(dist * u_absorptionFrequency - u_absorptionPhase) * u_absorptionStrength;
              float scaleFactor = smoothstep(0.0, orbitalScale * 0.8, dist);
              displacement *= scaleFactor * 0.5;
              animated_position += direction * displacement;
          }

          mat4 translationToAnimatedCenter = mat4(
              1.0, 0.0, 0.0, 0.0,
              0.0, 1.0, 0.0, 0.0,
              0.0, 0.0, 1.0, 0.0,
              animated_position.x, animated_position.y, animated_position.z, 1.0
          );

          if (!u_isPrimaryOrbital) {
              // For secondary orbitals, hide particles that are too close to origin
              // where primary orbital particles would be dense
              float distToOrigin = length(animated_position);
              if (distToOrigin < u_overlapCullDistance) {
                  vCameraCull = 0.0; // Hide this particle
              }
          }

          // Apply particle scale uniform
          vec3 scaledPosition = position * u_particleScale;
          vec4 worldPosition = modelMatrix * translationToAnimatedCenter * vec4(scaledPosition, 1.0);
          vWorldPosition = worldPosition.xyz;
          
          vCrossSectionVisibility = worldPosition.x <= u_crossSectionX ? 1.0 : 0.0;
          
          // Camera-based culling with different behavior for primary vs secondary orbitals
          float distanceToCamera = distance(worldPosition.xyz, u_cameraPosition);
          float distanceFromOrigin = length(worldPosition.xyz);

          if (u_isPrimaryOrbital) {
              // Minimal culling for primary orbital - only cull very close particles
              vCameraCull = distanceToCamera > u_cameraCullDistance * 0.5 ? 1.0 : 0.0;
          } else {
              // Aggressive culling for secondary orbitals
              
              // Basic bulldozer effect
              vCameraCull = distanceToCamera > u_cameraCullDistance ? 1.0 : 0.0;
              
              // Calculate if particle is between camera and origin
              vec3 cameraToOrigin = normalize(-u_cameraPosition);
              vec3 cameraToParticle = normalize(worldPosition.xyz - u_cameraPosition);
              float alignment = dot(cameraToOrigin, cameraToParticle);
              
              // Cull secondary particles that are:
              // 1. In front of the camera's view toward origin (alignment > 0.7)
              // 2. Closer to camera than the primary orbital's typical radius
              if (alignment > 0.7 && distanceToCamera < distanceFromOrigin) {
                  vCameraCull = 0.0;
              }
              
              // Also cull particles that are far from origin AND in front
              vec3 toCameraDir = normalize(u_cameraPosition - worldPosition.xyz);
              vec3 toOriginDir = normalize(-worldPosition.xyz);
              float viewAlignment = dot(toCameraDir, toOriginDir);
              
              if (distanceFromOrigin > u_depthCullDistance && viewAlignment < 0.3) {
                  vCameraCull = 0.0;
              }
          }
          
          vNormalWorld = normalize(mat3(modelMatrix) * normal);

          vec4 viewPosition = viewMatrix * worldPosition; 
          float rawDepth = -viewPosition.z; 
          
          vDepthFactor = smoothstep(orbitalScale * 0.45, orbitalScale * 2.8, rawDepth); 

          gl_Position = projectionMatrix * viewPosition;

          vec4 clipPos = gl_Position;
          float w = clipPos.w;
          if (clipPos.x < -w * u_frustumPadding || clipPos.x > w * u_frustumPadding ||
              clipPos.y < -w * u_frustumPadding || clipPos.y > w * u_frustumPadding ||
              clipPos.z < -w || clipPos.z > w) {
              vCameraCull = 0.0;
          }
      }
    `;

    const fragmentShader = `
      uniform vec3 baseColor;
      uniform vec3 lowDensityColor;
      uniform vec3 midDensityColor;
      uniform vec3 highDensityColor;
      uniform vec3 ambientLightColor;
      uniform vec3 directionalLightColor1;
      uniform vec3 directionalLightDirection1;
      uniform vec3 directionalLightColor2;
      uniform vec3 directionalLightDirection2;
      uniform float u_crossSectionX;
      uniform float u_opacity;
      uniform bool u_isWireframe;
      uniform bool u_isPrimaryOrbital;
      uniform float u_overlapCullDistance;
      uniform float u_orbitalScale;

      varying vec3 vWorldPosition;
      varying vec3 vNormalWorld;
      varying float vDepthFactor;
      varying float vCrossSectionVisibility;
      varying float vCameraCull;
      
      const float minOverallBrightness = 0.12;
      const float maxOverallBrightness = 0.98;
      const float minRawLight = 0.15;
      const float maxRawLight = 1.9;

      void main() {
          // Apply camera culling and cross-section visibility
          if (vCrossSectionVisibility < 0.5 || vCameraCull < 0.5) {
              discard;
          }
          
          vec3 N = normalize(vNormalWorld);

          vec3 L1 = normalize(directionalLightDirection1);
          float lambertian1 = max(dot(N, L1), 0.0);
          vec3 diffuse1 = directionalLightColor1 * lambertian1;

          vec3 L2 = normalize(directionalLightDirection2);
          float lambertian2 = max(dot(N, L2), 0.0);
          vec3 diffuse2 = directionalLightColor2 * lambertian2;

          vec3 rawLighting = ambientLightColor + diffuse1 + diffuse2;
          float crossSectionFactor = 10.0 - min(u_crossSectionX, 10.0);
          float lightBoost = 1.0 + (crossSectionFactor * 0.05);

          rawLighting *= 1.5;
          
          rawLighting = clamp(rawLighting, vec3(minRawLight), vec3(maxRawLight));
          
          float distFromCenter = length(vWorldPosition);
          float maxDist = 10.0;
          float normalizedDist = clamp(distFromCenter / maxDist, 0.0, 1.0);
          
          float density = 1.0 - normalizedDist;
          density = pow(density, 2.0);
          
          vec3 densityColor;
          if (u_isWireframe) {
              // For wireframe mode, use a single color
              densityColor = baseColor;
          } else {
              if (density > 0.7) {
                  float t = (density - 0.7) / 0.3;
                  densityColor = mix(midDensityColor, highDensityColor, t);
              } else if (density > 0.3) {
                  float t = (density - 0.3) / 0.4;
                  densityColor = mix(lowDensityColor, midDensityColor, t);
              } else {
                  float t = density / 0.3;
                  densityColor = mix(lowDensityColor, lowDensityColor, t);
              }
          }
          
          vec3 litColor = densityColor * rawLighting;

          float isKorLShell = u_orbitalScale < 1.0 ? 1.0 : 0.0;
          float isPrimary = u_isPrimaryOrbital ? 1.0 : 0.0;

          // For K/L shells when primary: 85% brightness, otherwise normal 25%
          float darkeningStrength = mix(0.25, 0.85, isKorLShell * isPrimary);

          float adjustedDepthFactor = vDepthFactor * (1.0 - (crossSectionFactor * 0.02));
          vec3 darkColorMultiplier = vec3(darkeningStrength, darkeningStrength, darkeningStrength); 
          vec3 finalColor = mix(litColor, litColor * darkColorMultiplier, adjustedDepthFactor);

          finalColor = clamp(finalColor, vec3(minOverallBrightness), vec3(maxOverallBrightness));

          gl_FragColor = vec4(finalColor, u_opacity);
      }
    `;

    // Iron orbital parameters with less aggressive camera positioning
    const orbitalParams = {
      // K-shell - reduced zoom-in
      '1s': {
        name: "1s",
        shell: "K",
        color: 0xFF4444,
        lowDensityColor: 0xFFAAAA,
        midDensityColor: 0xFF6666,
        highDensityColor: 0xCC0000,
        scale: 0.3,
        particleCount: 5000,
        generatePoints: generate1sPoints,
        cameraPosition: new THREE.Vector3(2, 1.5, 0.5), // Less zoom-in
        energy: 7112,
        particleScale: 1.5,
        renderMode: 'solid',
        rotationSpeed: 0.5,
        renderOrder: 1000
      },
      // L-shell - reduced zoom-in
      '2s': {
        name: "2s",
        shell: "L",
        color: 0x44FF44,
        lowDensityColor: 0xAAFFAA,
        midDensityColor: 0x66FF66,
        highDensityColor: 0x00CC00,
        scale: 0.65,
        particleCount: 10000,
        generatePoints: generate2sPoints,
        cameraPosition: new THREE.Vector3(3, 2.5, 1), // Less zoom-in
        energy: 844,
        particleScale: 1.0,
        renderMode: 'solid',
        rotationSpeed: 0.3,
        renderOrder: 500
      },
      "2p₁/₂": {
        name: "2p₁/₂",
        shell: "L",
        color: 0x44FFAA,
        lowDensityColor: 0xAAFFDD,
        midDensityColor: 0x66FFBB,
        highDensityColor: 0x00CC88,
        scale: 0.75,
        particleCount: 10000,
        generatePoints: generate2pzPoints,
        cameraPosition: new THREE.Vector3(3, 2.5, 1),
        energy: 720,
        particleScale: 1.0,
        renderMode: 'solid',
        rotationSpeed: 0.3,
        renderOrder: 400
      },
      "2p₃/₂": {
        name: "2p₃/₂",
        shell: "L",
        color: 0x44AAFF,
        lowDensityColor: 0xAADDFF,
        midDensityColor: 0x66BBFF,
        highDensityColor: 0x0088CC,
        scale: 0.85,
        particleCount: 10000,
        generatePoints: generate2pzPoints,
        cameraPosition: new THREE.Vector3(3, 2.5, 1),
        energy: 707,
        particleScale: 1.0,
        renderMode: 'solid',
        rotationSpeed: 0.3,
        renderOrder: 300
      },
      // M-shell - keep larger distances
      '3s': {
        name: "3s",
        shell: "M",
        color: 0xFFFF44,
        lowDensityColor: 0xFFFFAA,
        midDensityColor: 0xFFFF66,
        highDensityColor: 0xCCCC00,
        scale: 1.5,
        particleCount: 20000,
        generatePoints: generate3sPoints,
        cameraPosition: new THREE.Vector3(3, 3, 1.5),
        energy: 92,
        particleScale: 0.8,
        renderMode: 'solid',
        rotationSpeed: 0.12,
        renderOrder: 2
      },
      '3p': {
        name: "3p",
        shell: "M",
        color: 0xFFAA44,
        lowDensityColor: 0xFFDDAA,
        midDensityColor: 0xFFBB66,
        highDensityColor: 0xCC8800,
        scale: 1.5,
        particleCount: 20000,
        generatePoints: generate3pzPoints,
        cameraPosition: new THREE.Vector3(3, 3, 1.5),
        energy: 52,
        particleScale: 0.8,
        renderMode: 'solid',
        rotationSpeed: 0.12,
        renderOrder: 1
      },
      '3d': {
        name: "3d",
        shell: "M",
        color: 0xFF44FF,
        lowDensityColor: 0xFFAAFF,
        midDensityColor: 0xFF66FF,
        highDensityColor: 0xCC00CC,
        scale: 1.5,
        particleCount: 20000,
        generatePoints: generate3dz2Points,
        cameraPosition: new THREE.Vector3(3, 3, 1.5),
        energy: 1,
        particleScale: 0.8,
        renderMode: 'solid',
        rotationSpeed: 0.12,
        renderOrder: 0       
      },

      '4s': {
        name: "4s",
        shell: "N",
        color: 0xAA44FF,
        lowDensityColor: 0xDDAAFF,
        midDensityColor: 0xBB66FF,
        highDensityColor: 0x8800CC,
        scale: 2.0,
        particleCount: 25000,
        generatePoints: generate4sPoints,
        cameraPosition: new THREE.Vector3(4, 3.5, 2),
        energy: 7.9,
        particleScale: 0.7,
        renderMode: 'solid',
        rotationSpeed: 0.08,
        renderOrder: -1
      }

    };

    // Helper function for spatial grid
    function getGridKey(x, y, z, gridSize = 0.1) {
        const gx = Math.floor(x / gridSize);
        const gy = Math.floor(y / gridSize);
        const gz = Math.floor(z / gridSize);
        return `${gx},${gy},${gz}`;
    }

    // Modified point generation functions with adaptive density
    function generate1sPoints(count, scale) {
      const points = [];
      const minDistance = scale * 0.05;
      spatialGrid.clear(); // Clear grid before use
      
      let attempts = 0;
      const maxAttempts = count * 2; // Reduced from 3
      
      while (points.length < count && attempts < maxAttempts) {
          attempts++;
          
          // Generate point (keep existing generation logic)
          let r, prob;
          do {
              r = scale * Math.random();
              const rScaled = r / (scale/4);
              prob = rScaled * rScaled * Math.exp(-2 * rScaled);
          } while (Math.random() > prob);
          
          const theta = Math.acos(2 * Math.random() - 1);
          const phi = Math.random() * Math.PI * 2;
          
          const x = r * Math.sin(theta) * Math.cos(phi);
          const y = r * Math.sin(theta) * Math.sin(phi);
          const z = r * Math.cos(theta);
          
          // Use spatial grid for collision detection
          const key = getGridKey(x, y, z, minDistance);
          const nearbyKeys = [];
          
          // Check only adjacent cells
          for (let dx = -1; dx <= 1; dx++) {
              for (let dy = -1; dy <= 1; dy++) {
                  for (let dz = -1; dz <= 1; dz++) {
                      nearbyKeys.push(getGridKey(
                          x + dx * minDistance,
                          y + dy * minDistance,
                          z + dz * minDistance,
                          minDistance
                      ));
                  }
              }
          }
          
          let tooClose = false;
          for (const checkKey of nearbyKeys) {
              const nearbyPoints = spatialGrid.get(checkKey) || [];
              for (const p of nearbyPoints) {
                  const dist = Math.sqrt(
                      Math.pow(x - p.x, 2) + 
                      Math.pow(y - p.y, 2) + 
                      Math.pow(z - p.z, 2)
                  );
                  if (dist < minDistance) {
                      tooClose = true;
                      break;
                  }
              }
              if (tooClose) break;
          }
          
          if (!tooClose) {
              const point = new THREE.Vector3(x, y, z);
              points.push(point);
              
              // Add to spatial grid
              if (!spatialGrid.has(key)) {
                  spatialGrid.set(key, []);
              }
              spatialGrid.get(key).push(point);
          }
      }
      
      return points;
    }

    function generate2sPoints(count, scale) {
      const points = [];
      const minDistance = scale * 0.06; // Increased for less overlap
      spatialGrid.clear();
      let attempts = 0;
      const maxAttempts = count * 3;
      
      while (points.length < count && attempts < maxAttempts) {
        attempts++;
        
        let r, prob;
        do {
          r = scale * 1.5 * Math.random();
          const rScaled = r / (scale/4);
          const nodeTerm = Math.pow(2 - rScaled/2, 2);
          const nodeEffect = Math.abs(rScaled/2 - 2) < 0.3 ? 0.05 : 1.0;
          prob = rScaled * rScaled * nodeTerm * Math.exp(-rScaled/2) * nodeEffect;
        } while (Math.random() * 2.0 > prob);
        
        const theta = Math.acos(2 * Math.random() - 1);
        const phi = Math.random() * Math.PI * 2;
        
        const x = r * Math.sin(theta) * Math.cos(phi);
        const y = r * Math.sin(theta) * Math.sin(phi);
        const z = r * Math.cos(theta);
        
         // Use spatial grid for collision detection
        const key = getGridKey(x, y, z, minDistance);
        const nearbyKeys = [];
        
        // Check only adjacent cells
        for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
                for (let dz = -1; dz <= 1; dz++) {
                    nearbyKeys.push(getGridKey(
                        x + dx * minDistance,
                        y + dy * minDistance,
                        z + dz * minDistance,
                        minDistance
                    ));
                }
            }
        }
        
        let tooClose = false;
        for (const checkKey of nearbyKeys) {
            const nearbyPoints = spatialGrid.get(checkKey) || [];
            for (const p of nearbyPoints) {
                const dist = Math.sqrt(
                    Math.pow(x - p.x, 2) + 
                    Math.pow(y - p.y, 2) + 
                    Math.pow(z - p.z, 2)
                );
                if (dist < minDistance) {
                    tooClose = true;
                    break;
                }
            }
            if (tooClose) break;
        }
        
        if (!tooClose) {
            const point = new THREE.Vector3(x, y, z);
            points.push(point);
            
            // Add to spatial grid
            if (!spatialGrid.has(key)) {
                spatialGrid.set(key, []);
            }
            spatialGrid.get(key).push(point);
        }
    }
    
    return points;
}

    function generate2pzPoints(count, scale) {
      const points = [];
      const minDistance = scale * 0.06; // Increased for less overlap
      spatialGrid.clear();
      let attempts = 0;
      const maxAttempts = count * 3;
      
      while (points.length < count && attempts < maxAttempts) {
        attempts++;
        
        let r, theta, prob;
        do {
          r = scale * 1.2 * Math.random();
          theta = Math.acos(2 * Math.random() - 1);
          
          const rScaled = r / (scale/4);
          const angularTerm = Math.pow(Math.cos(theta), 4);
          const nodalPlaneEffect = Math.abs(Math.cos(theta)) < 0.2 ? 0.01 : 1.0;
          
          prob = rScaled * rScaled * Math.exp(-rScaled) * angularTerm * nodalPlaneEffect;
        } while (Math.random() * 0.3 > prob);
        
        const phi = Math.random() * Math.PI * 2;
        
        const x = r * Math.sin(theta) * Math.cos(phi);
        const y = r * Math.sin(theta) * Math.sin(phi);
        const z = r * Math.cos(theta);
        
         // Use spatial grid for collision detection
        const key = getGridKey(x, y, z, minDistance);
        const nearbyKeys = [];
        
        // Check only adjacent cells
        for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
                for (let dz = -1; dz <= 1; dz++) {
                    nearbyKeys.push(getGridKey(
                        x + dx * minDistance,
                        y + dy * minDistance,
                        z + dz * minDistance,
                        minDistance
                    ));
                }
            }
        }
        
        let tooClose = false;
        for (const checkKey of nearbyKeys) {
            const nearbyPoints = spatialGrid.get(checkKey) || [];
            for (const p of nearbyPoints) {
                const dist = Math.sqrt(
                    Math.pow(x - p.x, 2) + 
                    Math.pow(y - p.y, 2) + 
                    Math.pow(z - p.z, 2)
                );
                if (dist < minDistance) {
                    tooClose = true;
                    break;
                }
            }
            if (tooClose) break;
        }
        
        if (!tooClose) {
            const point = new THREE.Vector3(x, y, z);
            points.push(point);
            
            // Add to spatial grid
            if (!spatialGrid.has(key)) {
                spatialGrid.set(key, []);
            }
            spatialGrid.get(key).push(point);
        }
    }
    
    return points;
}

    function generate3sPoints(count, scale) {
      const points = [];
      const minDistance = scale * 0.04; // Less restrictive for outer shells
      spatialGrid.clear();
      let attempts = 0;
      const maxAttempts = count * 3;
      
      while (points.length < count && attempts < maxAttempts) {
        attempts++;
        
        let r, prob;
        do {
          r = scale * 1.8 * Math.random();
          const rScaled = r / (scale/6);
          const nodeTerm1 = Math.pow(27 - 18*rScaled/3 + 2*Math.pow(rScaled/3, 2), 2);
          const nodeEffect = (Math.abs(rScaled - 6) < 0.4 || Math.abs(rScaled - 12) < 0.4) ? 0.05 : 1.0;
          prob = rScaled * rScaled * nodeTerm1 * Math.exp(-rScaled/3) * nodeEffect;
        } while (Math.random() * 3.0 > prob);
        
        const theta = Math.acos(2 * Math.random() - 1);
        const phi = Math.random() * Math.PI * 2;
        
        const x = r * Math.sin(theta) * Math.cos(phi);
        const y = r * Math.sin(theta) * Math.sin(phi);
        const z = r * Math.cos(theta);
        
         // Use spatial grid for collision detection
        const key = getGridKey(x, y, z, minDistance);
        const nearbyKeys = [];
        
        // Check only adjacent cells
        for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
                for (let dz = -1; dz <= 1; dz++) {
                    nearbyKeys.push(getGridKey(
                        x + dx * minDistance,
                        y + dy * minDistance,
                        z + dz * minDistance,
                        minDistance
                    ));
                }
            }
        }
        
        let tooClose = false;
        for (const checkKey of nearbyKeys) {
            const nearbyPoints = spatialGrid.get(checkKey) || [];
            for (const p of nearbyPoints) {
                const dist = Math.sqrt(
                    Math.pow(x - p.x, 2) + 
                    Math.pow(y - p.y, 2) + 
                    Math.pow(z - p.z, 2)
                );
                if (dist < minDistance) {
                    tooClose = true;
                    break;
                }
            }
            if (tooClose) break;
        }
        
        if (!tooClose) {
            const point = new THREE.Vector3(x, y, z);
            points.push(point);
            
            // Add to spatial grid
            if (!spatialGrid.has(key)) {
                spatialGrid.set(key, []);
            }
            spatialGrid.get(key).push(point);
        }
    }
    
    return points;
}

    function generate3pzPoints(count, scale) {
      const points = [];
      const minDistance = scale * 0.04; // Less restrictive for outer shells
      spatialGrid.clear();
      let attempts = 0;
      const maxAttempts = count * 3;
      
      while (points.length < count && attempts < maxAttempts) {
        attempts++;
        
        let r, theta, prob;
        do {
          r = scale * 1.5 * Math.random();
          theta = Math.acos(2 * Math.random() - 1);
          
          const rScaled = r / (scale/6);
          const angularTerm = Math.pow(Math.cos(theta), 4);
          const nodalPlaneEffect = Math.abs(Math.cos(theta)) < 0.2 ? 0.01 : 1.0;
          const radialNodeTerm = Math.pow(6 - rScaled, 2) * Math.pow(rScaled, 2);
          const radialNodeEffect = Math.abs(rScaled - 6) < 0.5 ? 0.05 : 1.0;
          
          prob = radialNodeTerm * Math.exp(-rScaled/3) * angularTerm * nodalPlaneEffect * radialNodeEffect;
        } while (Math.random() * 5.0 > prob);
        
        const phi = Math.random() * Math.PI * 2;
        
        const x = r * Math.sin(theta) * Math.cos(phi);
        const y = r * Math.sin(theta) * Math.sin(phi);
        const z = r * Math.cos(theta);
        
         // Use spatial grid for collision detection
        const key = getGridKey(x, y, z, minDistance);
        const nearbyKeys = [];
        
        // Check only adjacent cells
        for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
                for (let dz = -1; dz <= 1; dz++) {
                    nearbyKeys.push(getGridKey(
                        x + dx * minDistance,
                        y + dy * minDistance,
                        z + dz * minDistance,
                        minDistance
                    ));
                }
            }
        }
        
        let tooClose = false;
        for (const checkKey of nearbyKeys) {
            const nearbyPoints = spatialGrid.get(checkKey) || [];
            for (const p of nearbyPoints) {
                const dist = Math.sqrt(
                    Math.pow(x - p.x, 2) + 
                    Math.pow(y - p.y, 2) + 
                    Math.pow(z - p.z, 2)
                );
                if (dist < minDistance) {
                    tooClose = true;
                    break;
                }
            }
            if (tooClose) break;
        }
        
        if (!tooClose) {
            const point = new THREE.Vector3(x, y, z);
            points.push(point);
            
            // Add to spatial grid
            if (!spatialGrid.has(key)) {
                spatialGrid.set(key, []);
            }
            spatialGrid.get(key).push(point);
        }
    }
    
    return points;
}

    function generate3dz2Points(count, scale) {
      const points = [];
      const minDistance = scale * 0.04; // Less restrictive for outer shells
      spatialGrid.clear();
      let attempts = 0;
      const maxAttempts = count * 3;
      
      while (points.length < count && attempts < maxAttempts) {
        attempts++;
        
        let r, theta, prob;
        do {
          r = scale * 1.5 * Math.random();
          theta = Math.acos(2 * Math.random() - 1);
          
          const rScaled = r / (scale/6);
          const angularPart = Math.pow(3 * Math.pow(Math.cos(theta), 2) - 1, 2);
          const nodalConeEffect = Math.abs(3 * Math.pow(Math.cos(theta), 2) - 1) < 0.3 ? 0.05 : 1.0;
          
          prob = Math.pow(rScaled, 4) * Math.exp(-rScaled/3) * angularPart * nodalConeEffect;
        } while (Math.random() * 10.0 > prob);
        
        const phi = Math.random() * Math.PI * 2;
        
        const x = r * Math.sin(theta) * Math.cos(phi);
        const y = r * Math.sin(theta) * Math.sin(phi);
        const z = r * Math.cos(theta);
        
         // Use spatial grid for collision detection
        const key = getGridKey(x, y, z, minDistance);
        const nearbyKeys = [];
        
        // Check only adjacent cells
        for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
                for (let dz = -1; dz <= 1; dz++) {
                    nearbyKeys.push(getGridKey(
                        x + dx * minDistance,
                        y + dy * minDistance,
                        z + dz * minDistance,
                        minDistance
                    ));
                }
            }
        }
        
        let tooClose = false;
        for (const checkKey of nearbyKeys) {
            const nearbyPoints = spatialGrid.get(checkKey) || [];
            for (const p of nearbyPoints) {
                const dist = Math.sqrt(
                    Math.pow(x - p.x, 2) + 
                    Math.pow(y - p.y, 2) + 
                    Math.pow(z - p.z, 2)
                );
                if (dist < minDistance) {
                    tooClose = true;
                    break;
                }
            }
            if (tooClose) break;
        }
        
        if (!tooClose) {
            const point = new THREE.Vector3(x, y, z);
            points.push(point);
            
            // Add to spatial grid
            if (!spatialGrid.has(key)) {
                spatialGrid.set(key, []);
            }
            spatialGrid.get(key).push(point);
        }
    }
    
    return points;
}

    function generate4sPoints(count, scale) {
      const points = [];
      const minDistance = scale * 0.03;
      spatialGrid.clear();
      let attempts = 0;
      const maxAttempts = count * 3;
      
      while (points.length < count && attempts < maxAttempts) {
        attempts++;
        
        let r, prob;
        do {
          r = scale * 2.0 * Math.random();
          const rScaled = r / (scale/8);
          // 4s has 3 radial nodes
          const nodeTerm = Math.pow(48 - 36*rScaled/4 + 9*Math.pow(rScaled/4, 2) - Math.pow(rScaled/4, 3), 2);
          const nodeEffect = (Math.abs(rScaled - 8) < 0.5 || Math.abs(rScaled - 16) < 0.5 || Math.abs(rScaled - 24) < 0.5) ? 0.05 : 1.0;
          prob = rScaled * rScaled * nodeTerm * Math.exp(-rScaled/4) * nodeEffect;
        } while (Math.random() * 4.0 > prob);
        
        const theta = Math.acos(2 * Math.random() - 1);
        const phi = Math.random() * Math.PI * 2;
        
        const x = r * Math.sin(theta) * Math.cos(phi);
        const y = r * Math.sin(theta) * Math.sin(phi);
        const z = r * Math.cos(theta);
        
         // Use spatial grid for collision detection
        const key = getGridKey(x, y, z, minDistance);
        const nearbyKeys = [];
        
        // Check only adjacent cells
        for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
                for (let dz = -1; dz <= 1; dz++) {
                    nearbyKeys.push(getGridKey(
                        x + dx * minDistance,
                        y + dy * minDistance,
                        z + dz * minDistance,
                        minDistance
                    ));
                }
            }
        }
        
        let tooClose = false;
        for (const checkKey of nearbyKeys) {
            const nearbyPoints = spatialGrid.get(checkKey) || [];
            for (const p of nearbyPoints) {
                const dist = Math.sqrt(
                    Math.pow(x - p.x, 2) + 
                    Math.pow(y - p.y, 2) + 
                    Math.pow(z - p.z, 2)
                );
                if (dist < minDistance) {
                    tooClose = true;
                    break;
                }
            }
            if (tooClose) break;
        }
        
        if (!tooClose) {
            const point = new THREE.Vector3(x, y, z);
            points.push(point);
            
            // Add to spatial grid
            if (!spatialGrid.has(key)) {
                spatialGrid.set(key, []);
            }
            spatialGrid.get(key).push(point);
        }
    }
    
    return points;
}

    // Function to initialize the 3D scene
    function init() {
      // Add loading indicator
      const loadingDiv = document.createElement('div');
      loadingDiv.style.position = 'absolute';
      loadingDiv.style.top = '50%';
      loadingDiv.style.left = '50%';
      loadingDiv.style.transform = 'translate(-50%, -50%)';
      loadingDiv.style.color = 'rgba(220, 220, 220, 0.9)';
      loadingDiv.style.fontSize = '20px';
      loadingDiv.style.fontFamily = 'Arial, sans-serif';
      loadingDiv.textContent = 'Loading Iron Atom...';
      containerRef.current.appendChild(loadingDiv);

      // Scene
      scene = new THREE.Scene();

      // Set up data for controls
      const dataForControls = Object.fromEntries(
        Object.entries(orbitalParams).map(([name, params]) => [
            name, { energy: params.energy, shell: params.shell, color: params.color, name: params.name }
        ])
      );
      setOrbitalDataForControls(dataForControls);


      // Camera
      camera = new THREE.PerspectiveCamera(75, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.01, 1000);
      camera.position.set(2, 1.5, 0.5); // Moved more to the right to see waves from left

      // Renderer with optimized settings
      renderer = new THREE.WebGLRenderer({ 
        antialias: true,
        alpha: true,
        powerPreference: "high-performance"
      });
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for performance
      renderer.setClearColor(0x1a1a1a);
      renderer.sortObjects = true; // Enable proper sorting
      renderer.setScissorTest(false); // Disable scissor test
      containerRef.current.appendChild(renderer.domElement);

      // Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.9); 
      scene.add(ambientLight);
      
      const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.5); 
      directionalLight1.position.set(5, 10, 7.5);
      scene.add(directionalLight1);

      const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.3); 
      directionalLight2.position.set(-5, -5, -7.5); 
      scene.add(directionalLight2);

      // Store light info for shaders
      scene.userData.ambientLightColor = ambientLight.color.clone();
      scene.userData.directionalLight1 = { 
        color: directionalLight1.color.clone(), 
        direction: directionalLight1.position.clone().normalize()
      };
      scene.userData.directionalLight2 = {
        color: directionalLight2.color.clone(),
        direction: directionalLight2.position.clone().normalize()
      };

      // Controls
      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;

      // Nucleus
      const nucleusGeometry = new THREE.SphereGeometry(0.1, 32, 32);
      const nucleusMaterial = new THREE.MeshStandardMaterial({ color: 0xFFFFE0, emissive: 0x333300 });
      const nucleus = new THREE.Mesh(nucleusGeometry, nucleusMaterial);
      nucleus.visible = true;
      scene.add(nucleus);

      // Create orbital particle systems
      for (const type in orbitalParams) {
        orbitalGroups[type] = createOrbital(type);
        scene.add(orbitalGroups[type]);
      }

      // Remove loading indicator
      if (loadingDiv && loadingDiv.parentNode) {
        loadingDiv.parentNode.removeChild(loadingDiv);
      }

      // Initialize opacity based on layering mode
      updateLayeringMode();

      // UI - connect to our React refs
      createGuiControls();

      // Initialize with the default orbital
      switchOrbital(currentOrbital);

      // Initialize the photon wave system
      const updatePhotonWave = setupPhotonWave(scene);

      // Handle window resize
      window.addEventListener('resize', onWindowResize);

      // Animation loop
      let frameCounter = 0;
      let lastFrameTime = 0;
      const targetFPS = 60; 

      let animate = function() {
        requestAnimationFrame(animate);
        
        // Frame rate limiting
        const currentTime = performance.now();
        if (performanceMode === 'low' && currentTime - lastFrameTime < (1000 / targetFPS)) {
          return;
        }
        lastFrameTime = currentTime;
        
        frameCounter++;

        const deltaTime = 1/60;
        updatePhoton(deltaTime);

        if (typeof updatePhotonWave === 'function') {
          // FIX: Use the ref to get the current energy, preventing stale state in the animation loop.
          updatePhotonWave(photonEnergyRef.current, deltaTime);
        }

        time += deltaTime * waveSpeed;

        //reset absorption effects on all orbitals
        for (const type in orbitalGroups) {
          if (orbitalGroups[type].material && orbitalGroups[type].material.uniforms.u_absorptionStrength) {
              orbitalGroups[type].material.uniforms.u_absorptionStrength.value = 0.0;
          }
      }

        if (absorptionActive && absorbingOrbitalName) { // Ensure absorbingOrbitalName is set
          const targetOrbitalGroup = orbitalGroups[absorbingOrbitalName]; // Use absorbingOrbitalName
          if (targetOrbitalGroup && targetOrbitalGroup.material && targetOrbitalGroup.material.uniforms) {
              if (!targetOrbitalGroup.material.uniforms.u_absorptionStrength) {
                  targetOrbitalGroup.material.uniforms.u_absorptionStrength = { value: absorptionStrength };
                  targetOrbitalGroup.material.uniforms.u_absorptionFrequency = { value: absorptionFrequency };
                  targetOrbitalGroup.material.uniforms.u_absorptionPhase = { value: absorptionPhase };
              } else {
                  targetOrbitalGroup.material.uniforms.u_absorptionStrength.value = absorptionStrength;
                  targetOrbitalGroup.material.uniforms.u_absorptionFrequency.value = absorptionFrequency;
                  targetOrbitalGroup.material.uniforms.u_absorptionPhase.value = absorptionPhase;
              }
          }
      }
        
        // Update orbitals with frame skipping for non-primary
        for (const type in orbitalGroups) {
            if (orbitalGroups[type].material && orbitalGroups[type].material.uniforms) {
                const opacity = orbitalGroups[type].material.uniforms.u_opacity.value;
                const isPrimary = type === currentOrbital;
                
                // Skip frames for low-opacity secondary orbitals
                const shouldUpdate = isPrimary || 
                                      opacity > 0.1 || 
                                      frameCounter % 2 === 0;
                
                if (shouldUpdate && opacity > 0.01) {
                    orbitalGroups[type].material.uniforms.u_time.value = time;
                    orbitalGroups[type].material.uniforms.viewMatrix.value = camera.matrixWorldInverse;
                    orbitalGroups[type].material.uniforms.u_cameraPosition.value = camera.position;
                  
              if (orbitalGroups[type].material.uniforms.u_waveHeight) {
                orbitalGroups[type].material.uniforms.u_waveHeight.value = waveHeight;
              }
              if (orbitalGroups[type].material.uniforms.u_waveFrequency) {
                orbitalGroups[type].material.uniforms.u_waveFrequency.value = waveFrequency;
              }
            }
          }
        }
        
        if (photonWave && photonWave.material.uniforms) {
          photonWave.material.uniforms.time.value = time;
          photonWave.material.uniforms.waveHeight.value = waveHeight;
          photonWave.material.uniforms.waveFrequency.value = waveFrequency;
        }

        controls.update();
        renderer.render(scene, camera);
      };
      
      animate();
    }

    // Update layering mode - FIXED to apply immediately
    function updateLayeringMode() {
      if (layeringMode === 'focused') {
        // Shell-based layering: current orbital full opacity, same shell medium, others very low
        const currentShell = orbitalParams[currentOrbital].shell;
        
        for (const type in orbitalGroups) {
          if (orbitalGroups[type].material && orbitalGroups[type].material.uniforms) {
            if (type === currentOrbital) {
              orbitalGroups[type].material.uniforms.u_opacity.value = 1.0;
              orbitalGroups[type].material.depthWrite = true; // Write to depth buffer
              orbitalGroups[type].material.transparent = false; // Make opaque
              orbitalGroups[type].material.needsUpdate = true; // Force material update
            } else if (orbitalParams[type].shell === currentShell) {
              orbitalGroups[type].material.uniforms.u_opacity.value = secondaryOpacity * 2; // Same shell gets a bit more visibility
              orbitalGroups[type].material.depthWrite = false;
              orbitalGroups[type].material.transparent = true;
              orbitalGroups[type].material.needsUpdate = true;
            } else {
              orbitalGroups[type].material.uniforms.u_opacity.value = secondaryOpacity;
              orbitalGroups[type].material.depthWrite = false;
              orbitalGroups[type].material.transparent = true;
              orbitalGroups[type].material.needsUpdate = true;
            }
          }
        }
      } else {
        // Show all orbitals with higher opacity
        for (const type in orbitalGroups) {
          if (orbitalGroups[type].material && orbitalGroups[type].material.uniforms) {
            if (type === currentOrbital) {
              orbitalGroups[type].material.uniforms.u_opacity.value = 1.0;
              orbitalGroups[type].material.depthWrite = true;
              orbitalGroups[type].material.transparent = false;
            } else {
              orbitalGroups[type].material.uniforms.u_opacity.value = 0.4; // Higher visibility in "show all" mode
              orbitalGroups[type].material.depthWrite = false;
              orbitalGroups[type].material.transparent = true;
            }
            orbitalGroups[type].material.needsUpdate = true;
          }
        }
      }
    }

    // Enhanced inner orbital visibility function
    function updateInnerOrbitalVisibility() {
      const focusedScale = orbitalParams[currentOrbital].scale;
      const isInnerOrbital = focusedScale < 0.5; // K and inner L shells
      
      if (layeringMode === 'focused' && isInnerOrbital) {
        // Super aggressive culling for inner orbital viewing
        for (const type in orbitalGroups) {
          if (orbitalGroups[type].material && orbitalGroups[type].material.uniforms) {
            const orbitalScale = orbitalParams[type].scale;
            
            if (type === currentOrbital) {
              // Boost the focused inner orbital
              orbitalGroups[type].material.uniforms.u_opacity.value = 1.0;
              orbitalGroups[type].material.uniforms.u_particleScale.value = orbitalParams[type].particleScale * 1.8; // Bigger particles
              orbitalGroups[type].material.uniforms.u_cameraCullDistance.value = 0.3; // Closer culling
            } else {
              // Much more aggressive opacity reduction for outer orbitals
              const distanceRatio = orbitalScale / focusedScale;
              const aggressiveOpacity = secondaryOpacity / (distanceRatio * distanceRatio); // Quadratic reduction
              
              orbitalGroups[type].material.uniforms.u_opacity.value = Math.max(0.01, aggressiveOpacity);
              orbitalGroups[type].material.uniforms.u_cameraCullDistance.value = 1.0; // More aggressive culling
              orbitalGroups[type].material.uniforms.u_depthCullDistance.value = focusedScale * 2.0; // Cull outer particles more aggressively
            }
            orbitalGroups[type].material.needsUpdate = true;
          }
        }
      }
    }

    function createGuiControls() {
      // Store references to control functions
      sceneControlsRef.current = {
        toggleMode: () => {
          layeringMode = layeringMode === 'focused' ? 'all' : 'focused';
          updateLayeringMode();
        },
        togglePerformance: () => {
          performanceMode = performanceMode === 'normal' ? 'low' : 'normal';
          
          if (!orbitalParams['1s'].originalParticleCount) {
            for (const type in orbitalParams) {
              orbitalParams[type].originalParticleCount = orbitalParams[type].particleCount;
            }
          }
          
          const factor = performanceMode === 'low' ? 0.5 : 1.0;
          for (const type in orbitalGroups) {
            if (orbitalGroups[type]) {
              scene.remove(orbitalGroups[type]);
              orbitalGroups[type].geometry.dispose();
              orbitalGroups[type].material.dispose();
              
              const params = orbitalParams[type];
              const minParticles = params.shell === 'M' ? 10000 : 
                            params.shell === 'L' ? 4000 : 3000;
              params.particleCount = Math.max(minParticles, Math.floor(params.originalParticleCount * factor));
              
              orbitalGroups[type] = createOrbital(type);
              scene.add(orbitalGroups[type]);
            }
          }
          updateLayeringMode();
        },
        updateCrossSection: (value) => {
          const clippingX = (value - 50) / 5.0;

          for (const type in orbitalGroups) {
            if (orbitalGroups[type].material && orbitalGroups[type].material.uniforms) {
              orbitalGroups[type].material.uniforms.u_crossSectionX.value = clippingX;
            }
          }
        }
      };
      
      setControlsReady(true);
    }

    // Helper functions
    function updateOrbitalOpacities(activeOrbital, otherOpacity) {
      for (const type in orbitalGroups) {
        if (orbitalGroups[type].material && orbitalGroups[type].material.uniforms) {
          if (type === activeOrbital) {
            orbitalGroups[type].material.uniforms.u_opacity.value = 1.0;
            orbitalGroups[type].material.depthWrite = true;
            orbitalGroups[type].material.transparent = false;
          } else {
            orbitalGroups[type].material.uniforms.u_opacity.value = otherOpacity;
            orbitalGroups[type].material.depthWrite = false;
            orbitalGroups[type].material.transparent = true;
          }
          orbitalGroups[type].material.needsUpdate = true;
        }
      }
    }

    function updatePhotonWavelength(energyEV) {
      // E = hc/λ → λ = hc/E
      const hc = 1239.84; // eV·nm
      const wavelengthNm = hc / energyEV;
      
      // More realistic scaling for X-ray wavelengths relative to atom size
      // Iron atom has shells from 0.3 to 1.5 units
      // X-ray wavelengths should be comparable to inner shell sizes
      
      if (energyEV > 5000) {
        // K-edge X-rays - wavelength ~ 0.1-0.2 nm
        photonWavelength = 0.15;
      } else if (energyEV > 500) {
        // L-edge X-rays - wavelength ~ 0.5-2 nm
        photonWavelength = 0.3 + (5000 - energyEV) / 10000;
      } else if (energyEV > 50) {
        // M-edge and soft X-rays - wavelength ~ 2-20 nm
        photonWavelength = 0.5 + (500 - energyEV) / 500;
      } else {
        // Very soft X-rays / UV
        photonWavelength = 1.0 + (50 - energyEV) / 50;
      }
      
      // Scale to match our coordinate system where K-shell is 0.3 units
      photonWavelength *= 0.8;
    }
    updatePhotonWavelengthRef.current = updatePhotonWavelength;

    // Calculate angular radiation pattern based on transition type
  function getRadiationPattern(fromOrbital, toOrbital, theta, phi) {
      // Extract orbital types (s, p, d)
      const fromType = fromOrbital.charAt(1); // '1s' -> 's'
      const toType = toOrbital.charAt(1);
      
      // s->s forbidden, return 0
      if (fromType === 's' && toType === 's') return 0;
      
      // p->s or s->p: sin²θ pattern (dipole)
      if ((fromType === 'p' && toType === 's') || (fromType === 's' && toType === 'p')) {
          return Math.pow(Math.sin(theta), 2);
      }
      
      // d->p or p->d: four-lobed pattern
      if ((fromType === 'd' && toType === 'p') || (fromType === 'p' && toType === 'd')) {
          // Simple four-lobe: sin²θ * cos²φ
          return Math.pow(Math.sin(theta), 2) * Math.pow(Math.cos(2 * phi), 2);
      }
      
      // d->s: quadrupole pattern
      if (fromType === 'd' && toType === 's') {
          // 3cos²θ - 1 pattern
          const cosTheta = Math.cos(theta);
          return Math.pow(3 * cosTheta * cosTheta - 1, 2) * 0.25;
      }
      
      // Default: uniform emission
      return 1.0;
  }

  // Store transition info when absorption happens
  let transitionFromOrbital = null;
  let transitionToOrbital = null;

    // More function implementations
    function createOrbital(orbitalType) {
      const params = orbitalParams[orbitalType];
      const scale = params.scale;
      
      // Generate points for this orbital type
      const points = params.generatePoints(params.particleCount || particleCount, scale);
      
      // Create instanced mesh for particles - reduced complexity
      const sphereGeometry = new THREE.SphereGeometry(particleSize * 0.9, 6, 4);
      
      // Create shader material with proper transparency settings
      const isCurrentOrbital = orbitalType === currentOrbital;
      const material = new THREE.ShaderMaterial({
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        transparent: !isCurrentOrbital, // Only transparent if not the focused orbital
        depthWrite: isCurrentOrbital, // Only write depth if focused
        depthTest: true,
        blending: THREE.NormalBlending, // Use normal blending
        side: THREE.FrontSide, 
        uniforms: {
          baseColor: { value: new THREE.Color(params.color) },
          lowDensityColor: { value: new THREE.Color(params.lowDensityColor) },
          midDensityColor: { value: new THREE.Color(params.midDensityColor) },
          highDensityColor: { value: new THREE.Color(params.highDensityColor) },
          ambientLightColor: { value: scene.userData.ambientLightColor },
          directionalLightColor1: { value: scene.userData.directionalLight1.color },
          directionalLightDirection1: { value: scene.userData.directionalLight1.direction },
          directionalLightColor2: { value: scene.userData.directionalLight2.color },
          directionalLightDirection2: { value: scene.userData.directionalLight2.direction },
          orbitalScale: { value: scale },
          u_time: { value: 0.0 },
          u_maxSpeedAtCenter: { value: params.rotationSpeed || 0.3 },
          u_minSpeedAtEdge: { value: 0.005 },
          u_exponentialFalloffRate: { value: 5 },
          u_crossSectionX: { value: 10.0 }, // Changed default to 10 (full view)
          viewMatrix: { value: camera.matrixWorldInverse },
          u_waveHeight: { value: waveHeight },
          u_waveFrequency: { value: waveFrequency },
          u_absorptionStrength: { value: 0.0 },
          u_absorptionFrequency: { value: 0.3 },
          u_opacity: { value: 0.05 }, // Changed default to 5%
          u_absorptionPhase: { value: 0.0 },
          u_particleScale: { value: params.particleScale || 1.0 },
          u_isWireframe: { value: false },
          u_cameraPosition: { value: camera.position }, // Add camera position
          u_cameraCullDistance: { value: 0.2 }, // Distance for bulldozer effect
          u_depthCullDistance: { value: scale * 3.0 },
          u_projectionMatrix: { value: camera.projectionMatrix },
          u_frustumPadding: { value: 1.5 }, // Distance for depth culling
          u_isPrimaryOrbital: { value: orbitalType === currentOrbital },
          u_orbitalScale: { value: scale },
          u_overlapCullDistance: { value: orbitalParams[orbitalType].scale * 0.7 } // Distance for overlap culling
        }
      });
      
      // Create instanced mesh
      const instancedMesh = new THREE.InstancedMesh(sphereGeometry, material, points.length);
      
      // Set render order based on shell (outer shells render first)
      instancedMesh.renderOrder = params.renderOrder || 0;
      
      // Create a buffer attribute for initial phase
      const initialPhaseAttribute = new Float32Array(points.length);
      for (let i = 0; i < points.length; i++) {
        initialPhaseAttribute[i] = Math.random() * Math.PI * 2;
      }
      
      // Add the attribute to the geometry
      instancedMesh.geometry.setAttribute('a_initialPhase', new THREE.InstancedBufferAttribute(initialPhaseAttribute, 1));
      
      // Set instance matrices
      const dummy = new THREE.Object3D();
      for (let i = 0; i < points.length; i++) {
        dummy.position.set(points[i].x, points[i].y, points[i].z);
        dummy.updateMatrix();
        instancedMesh.setMatrixAt(i, dummy.matrix);
      }
      
      instancedMesh.instanceMatrix.needsUpdate = true;
      
      return instancedMesh;
    }

    function switchOrbital(orbitalType) {
      // Reset key visual parameters for ALL orbitals to their defaults
      for (const typeToReset in orbitalGroups) {
          if (orbitalGroups[typeToReset] && orbitalGroups[typeToReset].material && orbitalGroups[typeToReset].material.uniforms) {
              const paramsForReset = orbitalParams[typeToReset]; // Get parameters for the current orbital being reset

              // Reset particle scale to its defined default in orbitalParams
              orbitalGroups[typeToReset].material.uniforms.u_particleScale.value = paramsForReset.particleScale || 1.0;

              // Reset camera culling distance (bulldozer effect) to its default from createOrbital
              orbitalGroups[typeToReset].material.uniforms.u_cameraCullDistance.value = 0.2; // Default is 0.2 in createOrbital

              // Reset depth culling distance to its default from createOrbital
              orbitalGroups[typeToReset].material.uniforms.u_depthCullDistance.value = paramsForReset.scale * 3.0; // Default is scale * 3.0 in createOrbital

              // Reset lighting color uniforms to their scene defaults
              // This ensures lighting is not stuck in a dimmed state.
              if (scene.userData.directionalLight1 && scene.userData.directionalLight2) {
                  orbitalGroups[typeToReset].material.uniforms.directionalLightColor1.value.copy(scene.userData.directionalLight1.color);
                  orbitalGroups[typeToReset].material.uniforms.directionalLightColor2.value.copy(scene.userData.directionalLight2.color);
              }
          }
      }

      // Update visibility and opacity for all orbitals
      for (const type in orbitalGroups) {
        if (orbitalGroups[type]) {
          if (layeringMode === 'focused') {
            if (type === orbitalType) {
              // Highlighted orbital - full opacity and write to depth buffer
              orbitalGroups[type].visible = true;
              orbitalGroups[type].material.uniforms.u_opacity.value = 1.0;
              orbitalGroups[type].material.depthWrite = true; // Write to depth buffer
              orbitalGroups[type].material.transparent = false; // Make opaque
              orbitalGroups[type].material.needsUpdate = true; // Force material update
            } else {
              // Secondary orbitals - very low opacity and don't write to depth
              orbitalGroups[type].visible = true;
              orbitalGroups[type].material.uniforms.u_opacity.value = secondaryOpacity;
              orbitalGroups[type].material.depthWrite = false; // Don't write to depth buffer
              orbitalGroups[type].material.transparent = true; // Make transparent
              orbitalGroups[type].material.needsUpdate = true; // Force material update
              // Reset lighting to normal for secondary orbitals
              orbitalGroups[type].material.uniforms.directionalLightColor1.value.copy(scene.userData.directionalLight1.color);
              orbitalGroups[type].material.uniforms.directionalLightColor2.value.copy(scene.userData.directionalLight2.color);
            }

            // Update overlap culling
            orbitalGroups[type].material.uniforms.u_isPrimaryOrbital.value = (type === orbitalType);
            orbitalGroups[type].material.uniforms.u_overlapCullDistance.value = 
                (type === orbitalType) ? 0.0 : orbitalParams[orbitalType].scale * 0.5;

          } else {
            // Show all mode
            orbitalGroups[type].visible = true;
            if (type === orbitalType) {
              orbitalGroups[type].material.uniforms.u_opacity.value = 1.0;
              orbitalGroups[type].material.depthWrite = true;
              orbitalGroups[type].material.transparent = false;
            } else {
              orbitalGroups[type].material.uniforms.u_opacity.value = 0.4; // Higher visibility in show all mode
              orbitalGroups[type].material.depthWrite = false;
              orbitalGroups[type].material.transparent = true;
            }
            orbitalGroups[type].material.needsUpdate = true;
            // Reset lighting to normal
            orbitalGroups[type].material.uniforms.directionalLightColor1.value.copy(scene.userData.directionalLight1.color);
            orbitalGroups[type].material.uniforms.directionalLightColor2.value.copy(scene.userData.directionalLight2.color);
          }
        }
      }
      
      currentOrbital = orbitalType;
      setSelectedOrbital(orbitalType);
      
      // Auto-update photon energy to match the binding energy of the selected orbital
      if (orbitalParams[orbitalType]) {
        const newEnergy = orbitalParams[orbitalType].energy;
        setPhotonEnergy(newEnergy); // This updates the state, which is passed to ControlsSection
      }

      // Update camera position based on the selected orbital
      if (orbitalParams[orbitalType].cameraPosition) {
        const targetPos = orbitalParams[orbitalType].cameraPosition;
        // Smoothly animate to the new position
        const startPos = camera.position.clone();
        const duration = 1000; // 1 second
        const startTime = performance.now();
        
        function updateCameraPosition() {
          const elapsed = performance.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Use easing function for smoother transition
          const easeProgress = 1 - Math.pow(1 - progress, 3); // Cubic ease-out
          
          camera.position.lerpVectors(startPos, targetPos, easeProgress);
          
          if (progress < 1) {
            requestAnimationFrame(updateCameraPosition);
          }
        }
        
        updateCameraPosition();
      }

      switchOrbitalRef.current = switchOrbital;
      // Apply enhanced visibility for inner orbitals
      updateInnerOrbitalVisibility();
    }

    function onWindowResize() {
      if (!containerRef.current) return;
      
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    }

    function setupPhotonWave(scene) {
        // Configuration for the wave
        const waveConfig = {
            waveSpeed: 1.8,       // Reduced from 2.5 for better visibility
            waveHeight: 1.5,      
            waveFrequency: 0.3,   
            wavelength: photonWavelength,
            movementType: 'linear',
            waveMode: 'partial'
        };
        
        // Wave animation variables
        let waveActive = false;
        let waveTime = 0;
        let wavePosition = -10; // Starting x position (left side, closer)
        let waveAbsorbed = false; // Track if wave was absorbed
        let reemissionTime = 0; // Separate time for reemission
        
        // Create a grid of particles for the wave - Adaptive grid
        const gridSize = performanceMode === 'low' ? 50 : 100;      
        const gridSpacing = performanceMode === 'low' ? 0.3 : 0.15;  
        const totalParticles = gridSize * gridSize;
            
        
        // Consistent default particle appearance
        const defaultColor = new THREE.Color(0x00BFFF); // Cyan-blue color
        const defaultScale = 0.3;
        const defaultHeight = 0;
        
        // Create geometry for wave particles
        const waveParticleGeometry = new THREE.SphereGeometry(0.12, 8, 6);
        const waveParticleMaterial = new THREE.MeshStandardMaterial({ 
            color: defaultColor,
            emissive: defaultColor.clone().multiplyScalar(0.3),
            transparent: true,
            opacity: 0.8
        });
        

        // Create instanced mesh for wave particles
        const waveParticles = new THREE.InstancedMesh(
            waveParticleGeometry,
            waveParticleMaterial,
            totalParticles
        );
        // Add opacity attribute for per-particle visibility
        const opacities = new Float32Array(totalParticles);
        waveParticles.geometry.setAttribute('opacity', new THREE.InstancedBufferAttribute(opacities, 1));
        waveParticles.renderOrder = -1000;

        // Make the plane visible immediately
        waveParticles.visible = true;
        scene.add(waveParticles);
        // Add material transparency
        waveParticleMaterial.transparent = true;
        waveParticleMaterial.opacity = 0.8; // Start invisible
        
        // Initialize instance colors
        waveParticles.instanceColor = new THREE.InstancedBufferAttribute(
            new Float32Array(totalParticles * 3), 3
        );
        
        // Create dummy for positioning
        const dummy = new THREE.Object3D();
        
        // Default z-offset for the entire plane
        const zOffset = 0; // Center position
        
        // Initialize particle positions in a grid - in X-Z plane
        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                const index = i * gridSize + j;
                
                particleData[index] = {
                    reemissionHeight: 0,
                    intensity: 0,
                    reemissionTime: 0
                };

                // Position in a grid on the x-z plane
                const x = (i - gridSize/2) * gridSpacing;
                const z = (j - gridSize/2) * gridSpacing + zOffset;
                
                dummy.position.set(x, defaultHeight, z);
                dummy.scale.set(defaultScale, defaultScale, defaultScale);
                dummy.updateMatrix();
                waveParticles.setMatrixAt(index, dummy.matrix);
                
                // Set initial color
                waveParticles.setColorAt(index, defaultColor);
            }
        }
        waveParticles.instanceMatrix.needsUpdate = true;
        waveParticles.instanceColor.needsUpdate = true;
        
        // Function to emit a photon wave
        function emitWave() {
            waveActive = true;
            waveAbsorbed = false;
            waveTime = 0;
            reemissionTime = 0;
            wavePosition = -10;
            
            // Reset absorption state
            absorptionActive = false;
            absorptionStrength = 0.0;
            
            // FIX: Get photon energy from the ref to ensure it's up-to-date
            const energy = photonEnergyRef.current;
            
            // Update wave parameters based on the correct energy
            updatePhotonWavelength(energy);
            waveConfig.wavelength = photonWavelength;
            waveConfig.waveFrequency = 1.0 / photonWavelength;
        }
        
        // Function to update wave animation
        function updateWave(currentPhotonEnergy, deltaTime) {
            // If active wave, update its position
            if (waveActive && !waveAbsorbed) {
                // Update time and position - moving right (positive X direction)
                waveTime += deltaTime * waveConfig.waveSpeed * 0.3;
                wavePosition += deltaTime * waveConfig.waveSpeed * 0.8;
                
                // If wave has moved completely past the right edge, deactivate it
                if (wavePosition > 25) {
                    waveActive = false;
                }
                
                // Check for interaction with ANY orbital
                  let bestMatchOrbitalInfo = null;
                  let maxCombinedEffect = -1;
                  const distanceToCenter = Math.abs(wavePosition); // Distance of wave front from origin

                  Object.entries(orbitalParams).forEach(([orbitalName, params]) => {
                      const cloudRadiusForCheck = params.scale;
                      const orbitalEnergyForCheck = params.energy;

                      if (distanceToCenter < cloudRadiusForCheck * 1.5) { // Wave is near this orbital
                          const normalizedDistanceLocal = distanceToCenter / (cloudRadiusForCheck * 1.5);
                          const distanceEffectLocal = Math.pow(1 - Math.min(normalizedDistanceLocal, 1), 2);

                          const energyDifferenceLocal = Math.abs(currentPhotonEnergy - orbitalEnergyForCheck) / orbitalEnergyForCheck;
                          // FIX: Make the energy matching much stricter for more realistic absorption
                          const energyMatchLocal = Math.exp(-Math.pow(energyDifferenceLocal, 2) * 150);
                          
                          const combinedEffect = distanceEffectLocal * energyMatchLocal;

                          if (combinedEffect > maxCombinedEffect) {
                              maxCombinedEffect = combinedEffect;
                              bestMatchOrbitalInfo = {
                                  name: orbitalName,
                                  params: params,
                                  distanceEffect: distanceEffectLocal,
                                  energyMatch: energyMatchLocal,
                                  cloudRadius: cloudRadiusForCheck
                              };
                          }
                      }
                  });

                  if (bestMatchOrbitalInfo) {
                      const { name: matchedOrbitalName, params: matchedOrbitalParams, distanceEffect, energyMatch, cloudRadius: matchedCloudRadius } = bestMatchOrbitalInfo;
                      
                      const targetAbsorptionStrength = distanceEffect * energyMatch * 0.8;
                      absorptionStrength = absorptionStrength * 0.95 + targetAbsorptionStrength * 0.05;

                      const absorptionThreshold = currentPhotonEnergy > 5000 ? 0.15 : 0.3;
                      // FIX: Make the absorption trigger condition stricter
                      if (energyMatch > 0.8 && distanceToCenter < matchedCloudRadius * 0.8 && absorptionStrength > absorptionThreshold) {
                          if (!waveAbsorbed) {
                              waveAbsorbed = true;
                              reemissionTime = 0;
                              absorptionActive = true;
                              absorbingOrbitalName = matchedOrbitalName; // Store the absorbing orbital
                              absorptionFrequency = 0.8 / photonWavelength;
                              absorptionPhase = waveTime * 6.28;
                              
                              transitionFromOrbital = matchedOrbitalName;

                              const orbitalType = matchedOrbitalName.charAt(1);
                              let validTransition = null;
                              if (orbitalType === 's') {
                                  validTransition = ['2p₁/₂', '2p₃/₂', '3p'].find(orbital => 
                                      orbitalParams[orbital] && orbitalParams[orbital].energy < matchedOrbitalParams.energy
                                  );
                              } else if (orbitalType === 'p') {
                                  validTransition = ['1s', '2s', '3s', '3d'].find(orbital => 
                                      orbitalParams[orbital] && orbitalParams[orbital].energy < matchedOrbitalParams.energy
                                  );
                              } else if (orbitalType === 'd') {
                                  validTransition = ['2p₁/₂', '2p₃/₂', '3p'].find(orbital => 
                                      orbitalParams[orbital] && orbitalParams[orbital].energy < matchedOrbitalParams.energy
                                  );
                              }
                              transitionToOrbital = validTransition || (Object.keys(orbitalParams).find(o => o !== matchedOrbitalName && orbitalParams[o].energy < matchedOrbitalParams.energy) || '2p₁/₂');
                          }
                      } else if (absorptionStrength > 0.01) {
                          absorptionActive = true;
                          absorbingOrbitalName = matchedOrbitalName; // Still interacting with this one
                          absorptionFrequency = 0.8 / photonWavelength;
                          absorptionPhase = waveTime * 6.28;
                      }
                  } else {
                      // Gradually decrease absorption strength if no orbital is interacting
                      absorptionStrength *= 0.96;
                      if (absorptionStrength < 0.01) {
                          absorptionActive = false;
                          absorptionStrength = 0;
                          absorbingOrbitalName = null; // Clear absorbing orbital
                      }
                  }

                  // This existing 'else' handles when wave moves away entirely
                  if (!(distanceToCenter < (bestMatchOrbitalInfo ? bestMatchOrbitalInfo.cloudRadius * 1.5 : 0))) {
                      absorptionStrength *= 0.96; 
                      if (absorptionStrength < 0.01) {
                          absorptionActive = false;
                          absorptionStrength = 0;
                          absorbingOrbitalName = null; 
                      }
                  }
            }
            
            // Update reemission time if wave was absorbed
            if (waveAbsorbed) {
                reemissionTime += deltaTime;
            }
            
            // Dynamic LOD based on camera distance
            const cameraDistToOrigin = camera.position.length();
            const lodFactor = Math.min(1, 5 / cameraDistToOrigin); // Reduce particles when far
            const skipFactor = Math.max(1, Math.floor(1 / lodFactor));

            // Always update all particles - whether wave is active or not
            for (let i = 0; i < gridSize; i += skipFactor) {
                for (let j = 0; j < gridSize; j += skipFactor) {
                    const index = i * gridSize + j;
                    
                    // Position in a grid on the x-z plane
                    const x = (i - gridSize/2) * gridSpacing;
                    const z = (j - gridSize/2) * gridSpacing + zOffset;
                    
                    // Default state (very small height)
                    let height = Math.sin(time * 0.3 + x * 0.1 + z * 0.1) * 0.01; // Tiny ambient motion
                    let colorIntensity = 0.4; // Base intensity
                    
                    // If wave is active and not absorbed, calculate its effect
                    if (waveActive && !waveAbsorbed) {
                        let distanceFromWave;
                        
                        if (waveType === 'linear') {
                            // POINT-LIKE wave - moving along Z axis
                            const dx = x;
                            const dz = z - wavePosition; // Changed from x - wavePosition
                            const distanceFromCenter = Math.sqrt(dx * dx + dz * dz);
                            
                            // Define the active wave radius based on wavelength
                            const waveRadius = 5.0 * photonWavelength; // Width of the wave
                            const visibleRadius = 10.0 * photonWavelength; // Visible area
                            
                            // Calculate wave effect
                            if (distanceFromCenter < visibleRadius) {
                                if (distanceFromCenter < waveRadius) {
                                    // Calculate height using smooth bell curve
                                    const heightFactor = 1.0 - (distanceFromCenter / waveRadius);
                                    const waveHeight = waveConfig.waveHeight * photonWavelength * Math.pow(heightFactor, 2);
                                    
                                    if (waveHeight > height) {
                                        height = waveHeight;
                                        colorIntensity = 0.4 + Math.min(0.6, height / (waveConfig.waveHeight * photonWavelength) * 0.6);
                                    }
                                }
                            }
                          
                      }
                    }

                    // Handle reemission waves
                    if (waveAbsorbed && absorptionStrength > 0.1) {
                        const distFromCenter = Math.sqrt(x * x + z * z);
                        
                        // Calculate spherical angles for radiation pattern
                        const r = Math.sqrt(x * x + z * z);
                        const theta = Math.atan2(r, 0); // angle from y-axis
                        const phi = Math.atan2(z, x); // azimuthal angle
                        
                        // Get radiation pattern intensity
                        const patternIntensity = getRadiationPattern(
                            transitionFromOrbital, 
                            transitionToOrbital, 
                            theta, 
                            phi
                        );
                        
                        // Reemission wave parameters
                        const energyBoost = currentPhotonEnergy > 5000 ? 2.0 : 1.0;
                        const reemissionWavelength = photonWavelength * 1.1;
                        const reemissionSpeed = 1.2 * energyBoost;
                        
                        const reemissionRadius = reemissionTime * reemissionSpeed * 2.0;
                        const distFromRing = Math.abs(distFromCenter - reemissionRadius);
                        const ringThickness = reemissionWavelength * 1.5;
                        
                        if (distFromRing < ringThickness && reemissionRadius < 20) {
                            const heightFactor = 1.0 - (distFromRing / ringThickness);
                            const distanceFactor = Math.max(0.3, 1.0 / (1.0 + reemissionRadius * 0.1));
                            
                            // Apply angular pattern to both intensity and height
                            const angularModulation = patternIntensity;
                            const reemissionIntensity = Math.pow(heightFactor, 1.5) * 
                                                      absorptionStrength * 
                                                      distanceFactor * 
                                                      angularModulation;
                            
                            const reemissionHeight = waveConfig.waveHeight * 0.6 * 
                                                    reemissionIntensity * 
                                                    energyBoost * 
                                                    (0.3 + 0.7 * angularModulation); // Height varies with pattern
                            
                            if (reemissionHeight > height) {
                                height = reemissionHeight;
                                // Brighter color for high-probability directions
                                colorIntensity = 0.3 + Math.min(0.7, reemissionIntensity * 1.2);
                            }
                        }
                    }

                    // Apply height to Y position
                    dummy.position.set(x, height, z);
                    
                    // Set scale based on height
                    const scale = defaultScale + height * 0.7;
                    dummy.scale.set(scale, scale, scale);
                    
                    dummy.updateMatrix();
                    waveParticles.setMatrixAt(index, dummy.matrix);
                    
                    // Set color intensity based on height
                    const color = defaultColor.clone().multiplyScalar(colorIntensity);

                    // Calculate visibility based on wave proximity
                    let visible = false;
                    let opacity = 0.0;

                    if (waveActive) {
                        // Calculate distance from wave center
                        const dx = x;
                        const dz = z - wavePosition;
                        const distFromWave = Math.sqrt(dx * dx + dz * dz);
                        const visibleRadius = 12.0 * photonWavelength; // Visibility radius
                        
                        if (distFromWave < visibleRadius) {
                            visible = true;
                            // Fade out at edges
                            opacity = 1.0 - (distFromWave / visibleRadius);
                            opacity = Math.pow(opacity, 2) * 0.8; // Smooth falloff
                        }
                    }

                    // Quick frustum check
                    const worldX = x;
                    const worldZ = z;
                    const screenPos = new THREE.Vector3(worldX, 0, worldZ);
                    screenPos.project(camera);

                    // Skip particles outside screen
                    if (Math.abs(screenPos.x) > 1.5 || Math.abs(screenPos.y) > 1.5) {
                        continue;
                    }

                    // Also check for reemission visibility
                    if (waveAbsorbed && absorptionStrength > 0.1) {
                        const distFromCenter = Math.sqrt(x * x + z * z);
                        const reemissionRadius = reemissionTime * 1.2 * 2.0;
                        if (Math.abs(distFromCenter - reemissionRadius) < 2.0) {
                            visible = true;
                            opacity = Math.max(opacity, 0.5);
                        }
                    }

                    // Only render particle if visible
                    if (visible && height > 0.01) {
                        dummy.position.set(x, height, z);
                        const scale = defaultScale + height * 0.7;
                        dummy.scale.set(scale, scale, scale);
                        waveParticles.setColorAt(index, color);
                    } else {
                        // Hide particle completely
                        dummy.position.set(x, 0, z);
                        dummy.scale.set(0, 0, 0); // Scale to 0 to hide
                        waveParticles.setColorAt(index, new THREE.Color(0, 0, 0));
                    }

                    dummy.updateMatrix();
                    waveParticles.setMatrixAt(index, dummy.matrix);
                                    }
            }                  

            // Clean up if reemission has propagated far enough
            if (waveAbsorbed && reemissionTime > 10) {
                waveActive = false;
                waveAbsorbed = false;
                absorptionStrength = 0;
                absorptionActive = false;
                absorbingOrbitalName = null;
            }

            if (!waveActive && !waveAbsorbed && absorptionStrength > 0) {
              absorptionStrength *= 0.9; // Fade out any residual absorption
              if (absorptionStrength < 0.01) {
                  absorptionStrength = 0;
                  absorptionActive = false;
                  absorbingOrbitalName = null;
              }
          }
            waveParticles.instanceMatrix.needsUpdate = true;
            waveParticles.instanceColor.needsUpdate = true;
        }
        
        // Expose emitWave to controls
        if (sceneControlsRef.current) {
          sceneControlsRef.current.emitWave = emitWave;
        }
        // Return the update function to be called in the animation loop
        return updateWave;
    }

    function calculatePhotonEnergy(wavelength) {
        // E = hc/λ where h is Planck's constant, c is speed of light, λ is wavelength
        const h = 6.62607015e-34; // Planck's constant in J·s
        const c = 299792458; // Speed of light in m/s
        
        // Convert wavelength from nm to m
        const wavelengthInMeters = wavelength * 1e-9;
        
        // Calculate energy in Joules
        const energyInJoules = (h * c) / wavelengthInMeters;
        
        // Convert to electron volts (more common unit for photon energy)
        const energyInEV = energyInJoules / 1.602176634e-19;
        
        return {
            joules: energyInJoules,
            eV: energyInEV
        };
    }

    function updatePhoton(deltaTime) {
        for (let i = photons.length - 1; i >= 0; i--) {
          const photon = photons[i];
          
          if (photon.material && photon.material.uniforms) {
            const elapsedTime = (performance.now() * 0.001) - photon.userData.startTime;
            photon.material.uniforms.time.value = elapsedTime;
            
            // Move the photon along the x-axis
            const moveSpeed = 0.3;
            photon.position.x += moveSpeed * deltaTime;
            
            // Track total distance traveled
            photon.userData.totalDistance += moveSpeed * deltaTime;
            
            // Remove photon after it has traveled approximately one wavelength
            const maxDistance = photon.userData.wavelength * 1.2;
            
            if (photon.userData.totalDistance > maxDistance) {
              scene.remove(photon);
              photons.splice(i, 1);
              
              if (photons.length === 0) {
                isPhotonActive = false;
              }
            }
        }
      }
    }
    // Initialize everything
    init();

    // Add cleanup for when component unmounts
    return () => {
        window.removeEventListener('resize', onWindowResize);
        if (renderer) {
        renderer.dispose();
        if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
            containerRef.current.removeChild(renderer.domElement);
        }
        }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
      <div className="relative w-full h-screen overflow-hidden">
        {/* 3D Renderer - Full Background */}
        <div ref={containerRef} className="absolute inset-0 w-full h-full"></div>
        
        {/* Floating UI Overlays - Responsive */}
        <div className="absolute top-2 md:top-6 left-2 md:left-6 flex flex-col gap-3 md:gap-6 z-10 pointer-events-none w-[calc(100vw-16px)] md:w-[420px] max-w-[420px] quantum-overlay">
          <div className="pointer-events-auto w-full max-h-[40vh] md:max-h-none overflow-y-auto">
            <OrbitalSelector
              currentOrbital={selectedOrbital}
              onOrbitalChange={handleOrbitalChange}
            />
          </div>
          
          {controlsReady && orbitalDataForControls && (
            <div className="pointer-events-auto w-full max-h-[40vh] md:max-h-none overflow-y-auto">
              <ControlsSection
                onModeToggle={sceneControlsRef.current.toggleMode}
                onPerformanceToggle={sceneControlsRef.current.togglePerformance}
                onPhotonEnergyChange={handlePhotonEnergyChange}
                onCrossSectionChange={sceneControlsRef.current.updateCrossSection}
                onEmitPhoton={sceneControlsRef.current.emitWave}
                photonEnergyProp={photonEnergy}
                orbitalData={orbitalDataForControls}
              />
            </div>
          )}
        </div>
      </div>
    );
  }