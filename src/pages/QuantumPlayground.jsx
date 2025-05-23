import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import './QuantumPlayground.css';

export default function QuantumPlayground() {
  const containerRef = useRef(null);
  const guiContainerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !guiContainerRef.current) return;

    // Core variables
    let scene, camera, renderer, controls;
    const orbitalGroups = {}; 
    let currentOrbital = '2p3/2';
    const particleData = {}; 
    
    // Shell layering mode
    let layeringMode = 'focused'; // 'focused' or 'all'
    let secondaryOpacity = 0.1; // Increased from 0.05 for better visibility
    let performanceMode = 'normal'; // 'normal' or 'low'

    const particleCount = 45000; 
    const particleSize = 0.05;  // Reduced base size for less overlap  

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

    // Shaders with modifications for different rendering modes
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
      
      varying vec3 vWorldPosition;
      varying vec3 vNormalWorld;
      varying float vDepthFactor;
      varying float vCrossSectionVisibility;
      
      void main() {
          vec3 original_pos = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);

          float distanceToYAxis = length(original_pos.xz);
          float angularSpeed = (u_maxSpeedAtCenter - u_minSpeedAtEdge) * exp(-distanceToYAxis * u_exponentialFalloffRate) + u_minSpeedAtEdge;
          float currentRotationY = a_initialPhase + angularSpeed * u_time;

          float s = sin(currentRotationY);
          float c = cos(currentRotationY);
          mat4 rotationAnimMatrix = mat4(
              c, 0, s, 0,
              0, 1, 0, 0,
              -s, 0, c, 0,
              0, 0, 0, 1
          );

          vec3 animated_position = (rotationAnimMatrix * vec4(original_pos, 1.0)).xyz;

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

          // Apply particle scale uniform
          vec3 scaledPosition = position * u_particleScale;
          vec4 worldPosition = modelMatrix * translationToAnimatedCenter * vec4(scaledPosition, 1.0);
          vWorldPosition = worldPosition.xyz;
          
          vCrossSectionVisibility = worldPosition.x <= u_crossSectionX ? 1.0 : 0.0;
          
          vNormalWorld = normalize(mat3(modelMatrix) * normal);

          vec4 viewPosition = viewMatrix * worldPosition; 
          float rawDepth = -viewPosition.z; 
          
          vDepthFactor = smoothstep(orbitalScale * 0.45, orbitalScale * 2.8, rawDepth); 

          gl_Position = projectionMatrix * viewPosition;
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

      varying vec3 vWorldPosition;
      varying vec3 vNormalWorld;
      varying float vDepthFactor;
      varying float vCrossSectionVisibility;
      
      const float minOverallBrightness = 0.12;
      const float maxOverallBrightness = 0.98;
      const float minRawLight = 0.08;
      const float maxRawLight = 1.9;

      void main() {
          if (vCrossSectionVisibility < 0.5) {
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
          
          rawLighting *= lightBoost;
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

          float adjustedDepthFactor = vDepthFactor * (1.0 - (crossSectionFactor * 0.02));
          vec3 darkColorMultiplier = vec3(0.25, 0.25, 0.25); 
          vec3 finalColor = mix(litColor, litColor * darkColorMultiplier, adjustedDepthFactor);

          finalColor = clamp(finalColor, vec3(minOverallBrightness), vec3(maxOverallBrightness));

          gl_FragColor = vec4(finalColor, u_opacity);
      }
    `;

    // Iron orbital parameters with visual differentiation
    const orbitalParams = {
      // K-shell - very small and close to nucleus (solid, bright)
      '1s': {
        name: "1s",
        shell: "K",
        color: 0xFF4444,
        lowDensityColor: 0xFFAAAA,
        midDensityColor: 0xFF6666,
        highDensityColor: 0xCC0000,
        scale: 0.3,
        particleCount: 5000,  // Increased for better visibility
        generatePoints: generate1sPoints,
        cameraPosition: new THREE.Vector3(1, 1, 1.5),
        energy: 7112,
        particleScale: 1.5,  // Larger particles for visibility
        renderMode: 'solid',
        renderOrder: 1000  // Highest render order - renders last/on top
      },
      // L-shell - medium size (semi-transparent, smaller particles)
      '2s': {
        name: "2s",
        shell: "L",
        color: 0x44FF44,
        lowDensityColor: 0xAAFFAA,
        midDensityColor: 0x66FF66,
        highDensityColor: 0x00CC00,
        scale: 0.65,
        particleCount: 6000,  // Balanced for visibility and performance
        generatePoints: generate2sPoints,
        cameraPosition: new THREE.Vector3(2, 2, 3),
        energy: 844,
        particleScale: 1.0,  // Increased scale
        renderMode: 'solid',
        renderOrder: 500  // Middle render order
      },
      '2p1/2': {
        name: "2p₁/₂",
        shell: "L",
        color: 0x44FFAA,
        lowDensityColor: 0xAAFFDD,
        midDensityColor: 0x66FFBB,
        highDensityColor: 0x00CC88,
        scale: 0.75,
        particleCount: 6000,
        generatePoints: generate2pzPoints,
        cameraPosition: new THREE.Vector3(2, 2, 3),
        energy: 720,
        particleScale: 1.0,
        renderMode: 'solid',
        renderOrder: 400
      },
      '2p3/2': {
        name: "2p₃/₂",
        shell: "L",
        color: 0x44AAFF,
        lowDensityColor: 0xAADDFF,
        midDensityColor: 0x66BBFF,
        highDensityColor: 0x0088CC,
        scale: 0.85,
        particleCount: 6000,
        generatePoints: generate2pzPoints,
        cameraPosition: new THREE.Vector3(2, 2, 3),
        energy: 707,
        particleScale: 1.0,
        renderMode: 'solid',
        renderOrder: 300
      },
      // M-shell - largest (can be wireframe or point cloud)
      '3s': {
        name: "3s",
        shell: "M",
        color: 0xFFFF44,
        lowDensityColor: 0xFFFFAA,
        midDensityColor: 0xFFFF66,
        highDensityColor: 0xCCCC00,
        scale: 1.5,
        particleCount: 8000,
        generatePoints: generate3sPoints,
        cameraPosition: new THREE.Vector3(3, 3, 4.5),
        energy: 92,
        particleScale: 0.8,  // Slightly larger for better visibility
        renderMode: 'solid',
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
        particleCount: 8000,
        generatePoints: generate3pzPoints,
        cameraPosition: new THREE.Vector3(3, 3, 4.5),
        energy: 52,
        particleScale: 0.8,
        renderMode: 'solid',
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
        particleCount: 8000,
        generatePoints: generate3dz2Points,
        cameraPosition: new THREE.Vector3(3, 3, 4.5),
        energy: 1,
        particleScale: 0.8,
        renderMode: 'solid',
        renderOrder: 0
      }
    };

    // Modified point generation functions with adaptive density
    function generate1sPoints(count, scale) {
      const points = [];
      const minDistance = scale * 0.05; // Increased minimum distance between particles
      let attempts = 0;
      const maxAttempts = count * 3; // Reduced max attempts
      
      while (points.length < count && attempts < maxAttempts) {
        attempts++;
        
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
        
        // Simple distance check without spatial grid for performance
        let tooClose = false;
        if (points.length < 100) { // Only check first 100 points
          for (let i = 0; i < Math.min(points.length, 50); i++) {
            const p = points[i];
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
        }
        
        if (!tooClose) {
          points.push(new THREE.Vector3(x, y, z));
        }
      }
      
      return points;
    }

    function generate2sPoints(count, scale) {
      const points = [];
      const minDistance = scale * 0.06; // Increased for less overlap
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
        
        // Simple distance check for less overlap
        let tooClose = false;
        if (points.length < 50) { // Check fewer points for outer shells
          for (let i = 0; i < Math.min(points.length, 25); i++) {
            const p = points[i];
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
        }
        
        if (!tooClose) {
          points.push(new THREE.Vector3(x, y, z));
        }
      }
      
      return points;
    }

    function generate2pzPoints(count, scale) {
      const points = [];
      const minDistance = scale * 0.06; // Increased for less overlap
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
        
        // Simple distance check for less overlap
        let tooClose = false;
        if (points.length < 50) { // Check fewer points for outer shells
          for (let i = 0; i < Math.min(points.length, 25); i++) {
            const p = points[i];
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
        }
        
        if (!tooClose) {
          points.push(new THREE.Vector3(x, y, z));
        }
      }
      
      return points;
    }

    function generate3sPoints(count, scale) {
      const points = [];
      const minDistance = scale * 0.04; // Less restrictive for outer shells
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
        
        // Simple distance check for less overlap
        let tooClose = false;
        if (points.length < 50) { // Check fewer points for outer shells
          for (let i = 0; i < Math.min(points.length, 25); i++) {
            const p = points[i];
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
        }
        
        if (!tooClose) {
          points.push(new THREE.Vector3(x, y, z));
        }
      }
      
      return points;
    }

    function generate3pzPoints(count, scale) {
      const points = [];
      const minDistance = scale * 0.04; // Less restrictive for outer shells
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
        
        // Simple distance check for less overlap
        let tooClose = false;
        if (points.length < 100) { // Check first 100 points
          for (let i = 0; i < Math.min(points.length, 50); i++) {
            const p = points[i];
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
        }
        
        if (!tooClose) {
          points.push(new THREE.Vector3(x, y, z));
        }
      }
      
      return points;
    }

    function generate3dz2Points(count, scale) {
      const points = [];
      const minDistance = scale * 0.04; // Less restrictive for outer shells
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
        
        // Simple distance check for less overlap
        let tooClose = false;
        if (points.length < 100) { // Check first 100 points
          for (let i = 0; i < Math.min(points.length, 50); i++) {
            const p = points[i];
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
        }
        
        if (!tooClose) {
          points.push(new THREE.Vector3(x, y, z));
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

      // Camera
      camera = new THREE.PerspectiveCamera(75, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
      camera.position.set(4, 3, 3); // Moved more to the right to see waves from left

      // Renderer with optimized settings
      renderer = new THREE.WebGLRenderer({ 
        antialias: true,
        alpha: true,
        powerPreference: "high-performance"
      });
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for performance
      renderer.setClearColor(0x333333);
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
      let animate = function() {
        requestAnimationFrame(animate);
        
        const deltaTime = 1/60;
        updatePhoton(deltaTime);

        if (typeof updatePhotonWave === 'function') {
          updatePhotonWave(deltaTime);
        }

        time += 0.01 * waveSpeed;
        if (absorptionActive) {
          const currentOrbitalGroup = orbitalGroups[currentOrbital];
          if (currentOrbitalGroup.material && currentOrbitalGroup.material.uniforms) {
              if (!currentOrbitalGroup.material.uniforms.u_absorptionStrength) {
                  currentOrbitalGroup.material.uniforms.u_absorptionStrength = { value: absorptionStrength };
                  currentOrbitalGroup.material.uniforms.u_absorptionFrequency = { value: absorptionFrequency };
                  currentOrbitalGroup.material.uniforms.u_absorptionPhase = { value: absorptionPhase };
              } else {
                  currentOrbitalGroup.material.uniforms.u_absorptionStrength.value = absorptionStrength;
                  currentOrbitalGroup.material.uniforms.u_absorptionFrequency.value = absorptionFrequency;
                  currentOrbitalGroup.material.uniforms.u_absorptionPhase.value = absorptionPhase;
              }
          }
      }
        
        for (const type in orbitalGroups) {
          if (orbitalGroups[type].material && orbitalGroups[type].material.uniforms) {
            // Only update time for visible orbitals or those with decent opacity
            const opacity = orbitalGroups[type].material.uniforms.u_opacity.value;
            if (opacity > 0.01) {
              orbitalGroups[type].material.uniforms.u_time.value = time;
              orbitalGroups[type].material.uniforms.viewMatrix.value = camera.matrixWorldInverse;
              
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

    // Update layering mode
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
        // Show all orbitals with the slider-controlled opacity
        updateOrbitalOpacities(currentOrbital, secondaryOpacity);
      }
    }

    // Create a React-friendly version of the GUI controls
    function createGuiControls() {
      const guiContainer = guiContainerRef.current;
      guiContainer.innerHTML = '';
      guiContainer.className = 'glass';
      guiContainer.style.padding = '20px';
      guiContainer.style.borderRadius = '12px';
      guiContainer.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
      guiContainer.style.width = '320px';
      guiContainer.style.color = 'rgba(220, 220, 220, 0.9)';
      guiContainer.style.maxHeight = '90vh';
      guiContainer.style.overflowY = 'auto';

      // Title
      const title = document.createElement('h3');
      title.textContent = 'Iron (Fe) Orbitals';
      title.style.margin = '0 0 15px 0';
      title.style.textAlign = 'center';
      guiContainer.appendChild(title);

      // Layering mode toggle
      const layeringSection = document.createElement('div');
      layeringSection.className = 'glass';
      layeringSection.style.padding = '10px';
      layeringSection.style.borderRadius = '8px';
      layeringSection.style.backgroundColor = 'rgba(50, 50, 50, 0.8)';
      layeringSection.style.marginBottom = '15px';
      
      const layeringToggle = document.createElement('button');
      layeringToggle.textContent = layeringMode === 'focused' ? 'Mode: Focused Shell' : 'Mode: Show All';
      layeringToggle.style.width = '100%';
      layeringToggle.style.padding = '8px';
      layeringToggle.style.backgroundColor = 'rgba(70, 70, 100, 0.8)';
      layeringToggle.style.border = '1px solid rgba(100, 100, 150, 0.8)';
      layeringToggle.style.borderRadius = '4px';
      layeringToggle.style.color = 'rgba(220, 220, 220, 0.9)';
      layeringToggle.style.cursor = 'pointer';
      
      layeringToggle.onclick = () => {
        layeringMode = layeringMode === 'focused' ? 'all' : 'focused';
        layeringToggle.textContent = layeringMode === 'focused' ? 'Mode: Focused Shell' : 'Mode: Show All';
        updateLayeringMode();
      };
      
      layeringSection.appendChild(layeringToggle);
      
      // Add performance mode toggle
      const performanceToggle = document.createElement('button');
      performanceToggle.textContent = 'Performance: Normal';
      performanceToggle.style.width = '100%';
      performanceToggle.style.padding = '8px';
      performanceToggle.style.backgroundColor = 'rgba(70, 70, 70, 0.8)';
      performanceToggle.style.border = '1px solid rgba(100, 100, 100, 0.8)';
      performanceToggle.style.borderRadius = '4px';
      performanceToggle.style.color = 'rgba(220, 220, 220, 0.9)';
      performanceToggle.style.cursor = 'pointer';
      performanceToggle.style.marginTop = '10px';

      performanceToggle.onclick = () => {
        performanceMode = performanceMode === 'normal' ? 'low' : 'normal';
        performanceToggle.textContent = performanceMode === 'normal' ? 'Performance: Normal' : 'Performance: Low';
        
        // Store original particle counts if not already stored
        if (!orbitalParams['1s'].originalParticleCount) {
          for (const type in orbitalParams) {
            orbitalParams[type].originalParticleCount = orbitalParams[type].particleCount;
          }
        }
        
        // Adjust particle counts
        const factor = performanceMode === 'low' ? 0.5 : 1.0;
        for (const type in orbitalGroups) {
          if (orbitalGroups[type]) {
            scene.remove(orbitalGroups[type]);
            orbitalGroups[type].geometry.dispose();
            orbitalGroups[type].material.dispose();
            
            // Update particle count in params
            const params = orbitalParams[type];
            // Keep minimum particle count for inner shells
            const minParticles = type === '1s' ? 2000 : 3000;
            params.particleCount = Math.max(minParticles, Math.floor(params.originalParticleCount * factor));
            
            // Recreate with adjusted particle count
            orbitalGroups[type] = createOrbital(type);
            scene.add(orbitalGroups[type]);
          }
        }
        updateLayeringMode();
      };

      layeringSection.appendChild(performanceToggle);
      guiContainer.appendChild(layeringSection);

      // Shell selector with previews
      const shellSection = document.createElement('div');
      shellSection.style.marginBottom = '15px';
      
      const shells = {
        'K': ['1s'],
        'L': ['2s', '2p1/2', '2p3/2'],
        'M': ['3s', '3p', '3d']
      };

      for (const [shell, orbitals] of Object.entries(shells)) {
        const shellDiv = document.createElement('div');
        shellDiv.style.marginBottom = '10px';
        shellDiv.style.borderRadius = '4px';
        shellDiv.style.overflow = 'hidden';
        
        const shellHeader = document.createElement('div');
        shellHeader.style.padding = '8px';
        shellHeader.style.backgroundColor = 'rgba(60, 60, 60, 0.8)';
        shellHeader.style.cursor = 'pointer';
        shellHeader.style.fontWeight = 'bold';
        shellHeader.textContent = `${shell}-shell`;
        
        const orbitalList = document.createElement('div');
        orbitalList.style.display = 'none';
        orbitalList.style.backgroundColor = 'rgba(40, 40, 40, 0.8)';
        
        shellHeader.onclick = () => {
          orbitalList.style.display = orbitalList.style.display === 'none' ? 'block' : 'none';
        };
        
        orbitals.forEach(orbital => {
          const orbitalBtn = document.createElement('div');
          orbitalBtn.style.padding = '8px 15px';
          orbitalBtn.style.cursor = 'pointer';
          orbitalBtn.style.display = 'flex';
          orbitalBtn.style.alignItems = 'center';
          orbitalBtn.style.justifyContent = 'space-between';
          orbitalBtn.className = 'orbital-btn';
          
          const labelSpan = document.createElement('span');
          labelSpan.textContent = orbitalParams[orbital].name;
          
          const energySpan = document.createElement('span');
          energySpan.style.fontSize = '12px';
          energySpan.style.color = 'rgba(150, 150, 150, 0.9)';
          energySpan.textContent = `${orbitalParams[orbital].energy} eV`;
          
          orbitalBtn.appendChild(labelSpan);
          orbitalBtn.appendChild(energySpan);
          
          orbitalBtn.onclick = () => {
            switchOrbital(orbital);
            document.querySelectorAll('.orbital-btn').forEach(btn => {
              btn.style.backgroundColor = '';
            });
            orbitalBtn.style.backgroundColor = 'rgba(70, 70, 100, 0.8)';
          };
          
          if (orbital === currentOrbital) {
            orbitalBtn.style.backgroundColor = 'rgba(70, 70, 100, 0.8)';
            orbitalList.style.display = 'block'; // Auto-expand current shell
          }
          
          orbitalList.appendChild(orbitalBtn);
        });
        
        shellDiv.appendChild(shellHeader);
        shellDiv.appendChild(orbitalList);
        shellSection.appendChild(shellDiv);
      }
      
      guiContainer.appendChild(shellSection);

      // Opacity slider for secondary orbitals
      const opacitySection = document.createElement('div');
      opacitySection.className = 'glass';
      opacitySection.style.padding = '15px';
      opacitySection.style.borderRadius = '8px';
      opacitySection.style.backgroundColor = 'rgba(50, 50, 50, 0.8)';
      opacitySection.style.marginBottom = '15px';
      
      const opacityLabel = document.createElement('label');
      opacityLabel.textContent = 'Secondary Opacity:';
      opacityLabel.style.fontWeight = 'bold';
      opacityLabel.style.display = 'block';
      opacityLabel.style.marginBottom = '10px';
      
      const opacitySlider = document.createElement('input');
      opacitySlider.type = 'range';
      opacitySlider.min = '0';
      opacitySlider.max = '30'; // Max 30% for secondary orbitals
      opacitySlider.value = '10'; // Default 10%
      opacitySlider.style.width = '100%';
      opacitySlider.style.accentColor = 'rgb(220, 40, 40)';
      
      const opacityDisplay = document.createElement('span');
      opacityDisplay.style.fontSize = '12px';
      opacityDisplay.textContent = '10%';
      
      opacitySlider.oninput = (e) => {
        secondaryOpacity = e.target.value / 100;
        opacityDisplay.textContent = `${e.target.value}%`;
        updateLayeringMode();
      };
      
      opacitySection.appendChild(opacityLabel);
      opacitySection.appendChild(opacitySlider);
      opacitySection.appendChild(opacityDisplay);
      guiContainer.appendChild(opacitySection);

      // Photon controls
      const photonSection = document.createElement('div');
      photonSection.className = 'glass';
      photonSection.style.padding = '15px';
      photonSection.style.borderRadius = '8px';
      photonSection.style.backgroundColor = 'rgba(50, 50, 50, 0.8)';
      photonSection.style.marginBottom = '15px';
      
      const photonLabel = document.createElement('label');
      photonLabel.textContent = 'Photon Energy:';
      photonLabel.style.fontWeight = 'bold';
      photonLabel.style.display = 'block';
      photonLabel.style.marginBottom = '10px';
      
      const energyInput = document.createElement('input');
      energyInput.type = 'number';
      energyInput.id = 'photonEnergyInput';
      energyInput.value = '100';
      energyInput.style.width = '60%';
      energyInput.style.padding = '4px';
      energyInput.style.marginRight = '5px';
      
      const energyUnit = document.createElement('span');
      energyUnit.textContent = 'eV';
      
      // Energy display
      const energyDisplay = document.createElement('div');
      energyDisplay.style.backgroundColor = 'rgba(40, 40, 40, 0.8)';
      energyDisplay.style.padding = '5px';
      energyDisplay.style.borderRadius = '4px';
      energyDisplay.style.marginTop = '10px';
      energyDisplay.style.fontSize = '13px';
      energyDisplay.style.color = 'rgba(200, 200, 200, 0.8)';
      energyDisplay.id = 'photonEnergyDisplay';
      energyDisplay.textContent = `Wavelength: ${(1239.84 / 100).toFixed(2)} nm`;
      
      energyInput.oninput = (e) => {
        const energy = parseFloat(e.target.value) || 100;
        updatePhotonWavelength(energy);
        energyDisplay.textContent = `Wavelength: ${(1239.84 / energy).toFixed(2)} nm`;
      };
      
      photonSection.appendChild(photonLabel);
      photonSection.appendChild(energyInput);
      photonSection.appendChild(energyUnit);
      photonSection.appendChild(energyDisplay);
      
      // Preset buttons
      const presetDiv = document.createElement('div');
      presetDiv.style.marginTop = '10px';
      presetDiv.style.display = 'grid';
      presetDiv.style.gridTemplateColumns = '1fr 1fr';
      presetDiv.style.gap = '5px';
      
      const presets = [
        { name: 'K-edge', energy: 7112 },
        { name: 'L₃-edge', energy: 707 },
        { name: 'L₂-edge', energy: 720 },
        { name: 'M-edge', energy: 92 }
      ];
      
      presets.forEach(preset => {
        const btn = document.createElement('button');
        btn.textContent = preset.name;
        btn.style.padding = '5px';
        btn.style.fontSize = '12px';
        btn.style.backgroundColor = 'rgba(70, 70, 70, 0.8)';
        btn.style.border = '1px solid rgba(100, 100, 100, 0.8)';
        btn.style.borderRadius = '4px';
        btn.style.color = 'rgba(220, 220, 220, 0.9)';
        btn.style.cursor = 'pointer';
        
        btn.onclick = () => {
          energyInput.value = preset.energy;
          updatePhotonWavelength(preset.energy);
          energyDisplay.textContent = `Wavelength: ${(1239.84 / preset.energy).toFixed(2)} nm`;
          
          // Find and highlight the corresponding orbital
          for (const [key, params] of Object.entries(orbitalParams)) {
            if (Math.abs(params.energy - preset.energy) < 10) {
              switchOrbital(key);
              document.querySelectorAll('.orbital-btn').forEach(btn => {
                btn.style.backgroundColor = '';
              });
              document.querySelectorAll('.orbital-btn').forEach(btn => {
                if (btn.querySelector('span').textContent === params.name) {
                  btn.style.backgroundColor = 'rgba(70, 70, 100, 0.8)';
                }
              });
              break;
            }
          }
        };
        
        presetDiv.appendChild(btn);
      });
      
      photonSection.appendChild(presetDiv);
      guiContainer.appendChild(photonSection);

      // Cross-section slider section
      const crossSectionSection = document.createElement('div');
      crossSectionSection.className = 'glass';
      crossSectionSection.style.padding = '15px';
      crossSectionSection.style.borderRadius = '8px';
      crossSectionSection.style.backgroundColor = 'rgba(50, 50, 50, 0.8)';
      crossSectionSection.style.marginBottom = '15px';
      
      const crossSectionLabel = document.createElement('label');
      crossSectionLabel.textContent = 'Cross-Section (X-axis):';
      crossSectionLabel.style.fontWeight = 'bold';
      crossSectionLabel.style.display = 'block';
      crossSectionLabel.style.marginBottom = '10px';
      
      const crossSectionSlider = document.createElement('input');
      crossSectionSlider.type = 'range';
      crossSectionSlider.id = 'crossSectionSlider';
      crossSectionSlider.min = '-10';
      crossSectionSlider.max = '10';
      crossSectionSlider.value = '10';
      crossSectionSlider.step = '0.1';
      crossSectionSlider.style.width = '100%';
      crossSectionSlider.style.accentColor = 'rgb(220, 40, 40)';
      
      crossSectionSlider.addEventListener('input', (event) => {
        const value = parseFloat(event.target.value);
        for (const type in orbitalGroups) {
          if (orbitalGroups[type].material && orbitalGroups[type].material.uniforms) {
            orbitalGroups[type].material.uniforms.u_crossSectionX.value = value;
          }
        }
      });
      
      crossSectionSection.appendChild(crossSectionLabel);
      crossSectionSection.appendChild(crossSectionSlider);
      
      const crossSectionMarkers = document.createElement('div');
      crossSectionMarkers.style.display = 'flex';
      crossSectionMarkers.style.justifyContent = 'space-between';
      crossSectionMarkers.style.fontSize = '12px';
      crossSectionMarkers.innerHTML = '<span>-10</span><span>0</span><span>10</span>';
      
      crossSectionSection.appendChild(crossSectionMarkers);
      guiContainer.appendChild(crossSectionSection);

      // Wave type toggle
      const waveTypeToggle = document.createElement('button');
      waveTypeToggle.id = 'waveTypeToggleBtn';
      waveTypeToggle.textContent = 'Wave Type: Point';
      waveTypeToggle.className = 'w-full p-2 rounded border transition-all';
      waveTypeToggle.style.backgroundColor = 'rgba(50, 50, 50, 0.8)';
      waveTypeToggle.style.borderColor = 'rgba(80, 80, 80, 0.8)';
      waveTypeToggle.style.color = 'rgba(220, 220, 220, 0.9)';
      waveTypeToggle.style.fontSize = '14px';
      waveTypeToggle.style.margin = '10px 0';

      waveTypeToggle.addEventListener('click', () => {
        if (waveType === 'linear') {
          waveType = 'circular';
          waveTypeToggle.textContent = 'Wave Type: Circular';
          waveTypeToggle.style.backgroundColor = 'rgba(70, 70, 100, 0.8)';
        } else {
          waveType = 'linear';
          waveTypeToggle.textContent = 'Wave Type: Point';
          waveTypeToggle.style.backgroundColor = 'rgba(50, 50, 50, 0.8)';
        }
      });

      const waveTypeSection = document.createElement('div');
      waveTypeSection.style.marginTop = '10px';
      waveTypeSection.appendChild(waveTypeToggle);
      guiContainer.appendChild(waveTypeSection);

      // Emit button
      const emitSection = document.createElement('div');
      emitSection.style.marginTop = '15px';
      const emitButton = document.createElement('button');
      emitButton.id = 'emitWaveBtn';
      emitButton.textContent = 'Emit Photon Wave';
      emitButton.className = 'w-full p-2 rounded border transition-all hover:bg-opacity-90';
      emitButton.style.backgroundColor = 'rgb(220, 40, 40)';
      emitButton.style.borderColor = 'rgb(220, 40, 40)';
      emitButton.style.color = 'rgba(220, 220, 220, 0.9)';
      emitSection.appendChild(emitButton);
      guiContainer.appendChild(emitSection);
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

    // More function implementations
    function createOrbital(orbitalType) {
      const params = orbitalParams[orbitalType];
      const scale = params.scale;
      
      // Generate points for this orbital type
      const points = params.generatePoints(params.particleCount || particleCount, scale);
      
      // Create instanced mesh for particles - reduced complexity
      const sphereGeometry = new THREE.SphereGeometry(particleSize, 6, 4);
      
      // Create shader material with proper transparency settings
      const isCurrentOrbital = orbitalType === currentOrbital;
      const material = new THREE.ShaderMaterial({
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        transparent: !isCurrentOrbital, // Only transparent if not the focused orbital
        depthWrite: isCurrentOrbital, // Only write depth if focused
        depthTest: true,
        blending: THREE.NormalBlending, // Use normal blending
        side: THREE.DoubleSide, // Render both sides
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
          u_maxSpeedAtCenter: { value: 10.0 },
          u_minSpeedAtEdge: { value: 0.005 },
          u_exponentialFalloffRate: { value: 5 },
          u_crossSectionX: { value: 10.0 },
          viewMatrix: { value: camera.matrixWorldInverse },
          u_waveHeight: { value: waveHeight },
          u_waveFrequency: { value: waveFrequency },
          u_absorptionStrength: { value: 0.0 },
          u_absorptionFrequency: { value: 0.3 },
          u_opacity: { value: 0.2 },
          u_absorptionPhase: { value: 0.0 },
          u_particleScale: { value: params.particleScale || 1.0 },
          u_isWireframe: { value: false }
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
              // Boost the lighting for the focused orbital
              const brightnessFactor = 1.3; // 30% brighter
              orbitalGroups[type].material.uniforms.directionalLightColor1.value = scene.userData.directionalLight1.color.clone().multiplyScalar(brightnessFactor);
              orbitalGroups[type].material.uniforms.directionalLightColor2.value = scene.userData.directionalLight2.color.clone().multiplyScalar(brightnessFactor);
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
          } else {
            // Show all mode
            orbitalGroups[type].visible = true;
            orbitalGroups[type].material.uniforms.u_opacity.value = 0.7;
            orbitalGroups[type].material.depthWrite = false;
            orbitalGroups[type].material.transparent = true;
            orbitalGroups[type].material.needsUpdate = true;
            // Reset lighting to normal
            orbitalGroups[type].material.uniforms.directionalLightColor1.value.copy(scene.userData.directionalLight1.color);
            orbitalGroups[type].material.uniforms.directionalLightColor2.value.copy(scene.userData.directionalLight2.color);
          }
        }
      }
      
      currentOrbital = orbitalType;
      
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
        let wavePosition = -8; // Starting x position (left side, closer)
        let waveAbsorbed = false; // Track if wave was absorbed
        let reemissionTime = 0; // Separate time for reemission
        
        // Create a grid of particles for the wave - LARGER GRID
        const gridSize = 80;      
        const gridSpacing = 0.15;  
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
        
        // Make the plane visible immediately
        waveParticles.visible = true;
        scene.add(waveParticles);
        
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
            wavePosition = -8; // Starting position closer to the atom
            
            // Reset absorption state
            absorptionActive = false;
            absorptionStrength = 0.0;
            
            // Get photon energy from input
            const energyInput = document.getElementById('photonEnergyInput');
            const energy = parseFloat(energyInput.value) || 100;
            
            // Update wave parameters based on energy
            updatePhotonWavelength(energy);
            waveConfig.wavelength = photonWavelength;
            waveConfig.waveFrequency = 1.0 / photonWavelength;
        }
        
        // Function to update wave animation
        function updateWave(deltaTime) {
            // If active wave, update its position
            if (waveActive && !waveAbsorbed) {
                // Update time and position - moving right (positive X direction)
                waveTime += deltaTime * waveConfig.waveSpeed * 0.5;
                wavePosition += deltaTime * waveConfig.waveSpeed * 1.2;
                
                // If wave has moved completely past the right edge, deactivate it
                if (wavePosition > 25) {
                    waveActive = false;
                }
                
                // Check if wave is interacting with the electron cloud
                const cloudRadius = orbitalParams[currentOrbital].scale;
                const distanceToCenter = Math.abs(wavePosition);
                
                // Only interact when wave is near the electron cloud (origin)
                if (distanceToCenter < cloudRadius * 1.2) {
                    // Get photon energy from input
                    const energyInput = document.getElementById('photonEnergyInput');
                    const photonEnergy = parseFloat(energyInput.value) || 100;
                    const orbitalEnergy = orbitalParams[currentOrbital].energy;
                    
                    // Calculate absorption based on energy matching
                    const energyMatch = Math.exp(-Math.pow((photonEnergy - orbitalEnergy) / orbitalEnergy, 2) * 10);
                    
                    // Absorption is strongest when energies match
                    const normalizedDistance = distanceToCenter / cloudRadius;
                    const newAbsorptionStrength = (1 - normalizedDistance) * energyMatch * 0.7;
                    
                    // Check if energies match well enough for absorption
                    if (energyMatch > 0.7 && distanceToCenter < cloudRadius * 0.5) {
                        // Wave is absorbed!
                        waveAbsorbed = true;
                        reemissionTime = 0;
                        absorptionActive = true;
                        absorptionFrequency = 0.8 / photonWavelength;
                        absorptionPhase = waveTime * 6.28;
                    } else if (newAbsorptionStrength > absorptionStrength) {
                        // Partial interaction without full absorption
                        absorptionActive = true;
                        absorptionFrequency = 0.8 / photonWavelength;
                        absorptionPhase = waveTime * 6.28;
                    }
                    
                    absorptionStrength = Math.max(absorptionStrength, newAbsorptionStrength);
                } else {
                    // Gradually decrease absorption strength when wave moves away
                    absorptionStrength *= 0.98;
                    if (absorptionStrength < 0.01) {
                        absorptionActive = false;
                        absorptionStrength = 0;
                    }
                }
            }
            
            // Update reemission time if wave was absorbed
            if (waveAbsorbed) {
                reemissionTime += deltaTime;
            }
            
            // Always update all particles - whether wave is active or not
            for (let i = 0; i < gridSize; i++) {
                for (let j = 0; j < gridSize; j++) {
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
                            // POINT-LIKE wave - distance from a moving point
                            const dx = x - wavePosition;
                            const dz = z;
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
                        } else { // circular wave
                            // Start from the left side
                            const waveOriginX = -8; // Same as starting position
                            const waveOriginZ = 0;   // Center Z position
                            
                            // Calculate the current radius of the expanding circle based on wave position
                            const expandingRadius = Math.abs(waveOriginX - wavePosition) * 0.8;
                            
                            // Calculate distance from the expanding circle
                            const dx = x - waveOriginX;
                            const dz = z - waveOriginZ;
                            const distanceFromOrigin = Math.sqrt(dx * dx + dz * dz);
                            
                            // Calculate angle from the origin
                            const angle = Math.atan2(dz, dx);
                            
                            // Start with narrow angle that widens as wave expands
                            const expansionFactor = Math.min(1.0, expandingRadius / 10.0); // Gradually increase to full width
                            const maxAngle = Math.PI * 0.1 + (Math.PI * 0.32 * expansionFactor); // Start at ~18° total, expand to ~75° each side
                            
                            // Only process points within the angle range
                            if (Math.abs(angle) <= maxAngle) {
                                // Ring thickness that starts thin and gradually increases
                                const baseThickness = 0.5 + (1.3 * expansionFactor); // Start at 0.5, grow to 1.8
                                const ringThickness = baseThickness * photonWavelength;
                                
                                // Calculate distance from the expanding circle edge
                                const distanceFromRing = Math.abs(distanceFromOrigin - expandingRadius);
                                
                                // Calculate wave effect - height is maximum at the ring radius
                                if (distanceFromRing < ringThickness && expandingRadius > 0.1) { // Only show when ring has expanded a bit
                                    // Use a bell curve that gets proportionally thinner as the wave expands
                                    const heightFactor = 1.0 - (distanceFromRing / ringThickness);
                                    
                                    // Wave height decreases slightly as it expands (inverse square law)
                                    const distanceFactor = Math.max(0.3, 1.0 / (1.0 + expandingRadius * 0.05));
                                    
                                    // Additional factor to fade out at the edges of the angle range
                                    const angleFactor = Math.cos(angle / maxAngle * (Math.PI/2)) * Math.cos(angle / maxAngle * (Math.PI/2));
                                    
                                    const waveHeight = waveConfig.waveHeight * photonWavelength * 
                                                      Math.pow(heightFactor, 2) * distanceFactor * 
                                                      Math.pow(angleFactor, 2) * expansionFactor;
                                    
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
                        // Calculate distance from origin (electron cloud center)
                        const distFromCenter = Math.sqrt(x * x + z * z);
                        
                        // Reemission wave parameters
                        const reemissionWavelength = photonWavelength * 1.1; // Slightly longer wavelength
                        const reemissionSpeed = 1.2;
                        
                        // Calculate expanding ring radius based on time since absorption
                        const reemissionRadius = reemissionTime * reemissionSpeed * 2.0;
                        
                        // Calculate distance from expanding ring
                        const distFromRing = Math.abs(distFromCenter - reemissionRadius);
                        const ringThickness = reemissionWavelength * 1.5;
                        
                        // Only apply effect near the ring
                        if (distFromRing < ringThickness && reemissionRadius < 20) { // Limit propagation distance
                            const heightFactor = 1.0 - (distFromRing / ringThickness);
                            const distanceFactor = Math.max(0.3, 1.0 / (1.0 + reemissionRadius * 0.1));
                            const reemissionIntensity = Math.pow(heightFactor, 1.5) * absorptionStrength * distanceFactor;
                            const reemissionHeight = waveConfig.waveHeight * 0.6 * reemissionIntensity;
                            
                            if (reemissionHeight > height) {
                                height = reemissionHeight;
                                // Slightly different color for reemitted wave
                                colorIntensity = 0.5 + Math.min(0.5, reemissionIntensity * 0.8);
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
                    waveParticles.setColorAt(index, color);
                }
            }
            
            // Clean up if reemission has propagated far enough
            if (waveAbsorbed && reemissionTime > 10) {
                waveActive = false;
                waveAbsorbed = false;
                absorptionStrength = 0;
                absorptionActive = false;
            }

            waveParticles.instanceMatrix.needsUpdate = true;
            waveParticles.instanceColor.needsUpdate = true;
        }
        
        // Connect the emitWave function to the button
        const emitButton = document.getElementById('emitWaveBtn');
        if (emitButton) {
            emitButton.addEventListener('click', emitWave);
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
    }, []);
    return (
        <div className="quantum-container" style={{position: 'relative', width: '100%', height: '100vh'}}>
          <div ref={containerRef} className="renderer-container" style={{width: '100%', height: '100%'}}></div>
          <div ref={guiContainerRef} className="gui-container" style={{
            position: 'absolute', 
            top: '20px', 
            left: '20px', 
            zIndex: 10, 
            backgroundColor: 'rgba(40,40,40,0.85)',
            padding: '15px',
            width: '280px'
          }}></div>
        </div>
      );
    }