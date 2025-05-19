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
    let currentOrbital = '1s_H';
    const particleData = {}; 

    const particleCount = 45000; 
    const particleSize = 0.06;  

    let photons = [];
    let photonWavelength = 0.5;
    let photonSpeed = 2.0;
    let isPhotonActive = false;
    
    let time = 0;
    let waveSpeed = 1.0;
    let waveHeight = 0.8;
    let waveFrequency = 0.3;
    let photonWave = null;

    // Shaders - paste the shader code from Q-Wave.html
    const vertexShader = `
      // Attributes from THREE.SphereGeometry
      attribute float a_initialPhase;
      
      uniform float orbitalScale;
      uniform float u_time;
      uniform float u_maxSpeedAtCenter;
      uniform float u_minSpeedAtEdge;
      uniform float u_exponentialFalloffRate;
      uniform float u_crossSectionX;
      
      varying vec3 vWorldPosition;
      varying vec3 vNormalWorld;
      varying float vDepthFactor;
      varying float vCrossSectionVisibility;
      
      void main() {
          // Extract the original position from the instanceMatrix (translation part)
          vec3 original_pos = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);

          // Calculate dynamic rotation for this instance based on its original_pos
          float distanceToYAxis = length(original_pos.xz);
          float angularSpeed = (u_maxSpeedAtCenter - u_minSpeedAtEdge) * exp(-distanceToYAxis * u_exponentialFalloffRate) + u_minSpeedAtEdge;
          float currentRotationY = a_initialPhase + angularSpeed * u_time;

          // Create rotation matrix around Y axis for the particle's position
          float s = sin(currentRotationY);
          float c = cos(currentRotationY);
          mat4 rotationAnimMatrix = mat4(
              c, 0, s, 0,
              0, 1, 0, 0,
              -s, 0, c, 0,
              0, 0, 0, 1
          );

          // Calculate the new animated center of the instance
          vec3 animated_instance_center_object_space = (rotationAnimMatrix * vec4(original_pos, 1.0)).xyz;
          
          // Create a translation matrix to this new animated center
          mat4 translationToAnimatedCenter = mat4(
              1.0, 0.0, 0.0, 0.0,
              0.0, 1.0, 0.0, 0.0,
              0.0, 0.0, 1.0, 0.0,
              animated_instance_center_object_space.x, animated_instance_center_object_space.y, animated_instance_center_object_space.z, 1.0
          );

          // Transform the local vertex of the sphere ('position') to its animated spot
          vec4 worldPosition = modelMatrix * translationToAnimatedCenter * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          
          // Calculate cross-section visibility (1 = visible, 0 = hidden)
          vCrossSectionVisibility = worldPosition.x <= u_crossSectionX ? 1.0 : 0.0;
          
          // Normals are transformed by the model matrix
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
          
          vec3 litColor = densityColor * rawLighting;

          float adjustedDepthFactor = vDepthFactor * (1.0 - (crossSectionFactor * 0.02));
          vec3 darkColorMultiplier = vec3(0.25, 0.25, 0.25); 
          vec3 finalColor = mix(litColor, litColor * darkColorMultiplier, adjustedDepthFactor);

          finalColor = clamp(finalColor, vec3(minOverallBrightness), vec3(maxOverallBrightness));

          gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    // Orbital parameters - defining the different orbital types
    const orbitalParams = {
      '1s_H': {
        name: "1s H (1,0,0) - Simple sphere",
        color: 0x4682B4,
        lowDensityColor: 0xB0C4DE,
        midDensityColor: 0x4682B4,
        highDensityColor: 0x27496D,
        scale: 4.0, 
        generatePoints: generate1sPoints,
        cameraPosition: new THREE.Vector3(5, 5, 8)
      },
      '2s_H': {
        name: "2s H (2,0,0) - Sphere with radial node",
        color: 0x87CEEB,
        lowDensityColor: 0xD6F3FF,
        midDensityColor: 0x87CEEB,
        highDensityColor: 0x468DAF,
        scale: 5.0,
        generatePoints: generate2sPoints,
        cameraPosition: new THREE.Vector3(7, 7, 11)
      },
      '2p_H_z': {
        name: "2pz H (2,1,0) - Dumbbell",
        color: 0xFFC0CB,
        lowDensityColor: 0xFFE4EC,
        midDensityColor: 0xFFC0CB,
        highDensityColor: 0xC08090,
        scale: 5.0,
        generatePoints: generate2pzPoints,
        cameraPosition: new THREE.Vector3(7, 7, 11)
      },
      '3p_H_z': {
        name: "3pz H (3,1,0) - Larger dumbbell with radial node",
        color: 0xFFDAB9,
        lowDensityColor: 0xFFF2E5,
        midDensityColor: 0xFFDAB9,
        highDensityColor: 0xCC9C75,
        scale: 6.0,
        generatePoints: generate3pzPoints,
        cameraPosition: new THREE.Vector3(9, 9, 14)
      },
      '3d_Fe_z2': {
        name: "3dz² Fe (3,2,0) - Larger dumbbell with radial node",
        color: 0xFFFF00,
        lowDensityColor: 0xFFFFE0,
        midDensityColor: 0xFFFF00,
        highDensityColor: 0xBFBF00,
        scale: 6.5,
        generatePoints: generate3dz2Points,
        cameraPosition: new THREE.Vector3(10, 10, 15)
      }
    };

    // Function definitions for the various orbital shapes
    function generate1sPoints(count, scale) {
      const points = [];
      for (let i = 0; i < count; i++) {
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
        
        points.push(new THREE.Vector3(x, y, z));
      }
      return points;
    }

    function generate2sPoints(count, scale) {
      const points = [];
      for (let i = 0; i < count; i++) {
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
        
        points.push(new THREE.Vector3(x, y, z));
      }
      return points;
    }

    function generate2pzPoints(count, scale) {
      const points = [];
      for (let i = 0; i < count; i++) {
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
        
        points.push(new THREE.Vector3(x, y, z));
      }
      return points;
    }

    function generate3pzPoints(count, scale) {
      const points = [];
      for (let i = 0; i < count; i++) {
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
        
        points.push(new THREE.Vector3(x, y, z));
      }
      return points;
    }

    function generate3dz2Points(count, scale) {
      const points = [];
      for (let i = 0; i < count; i++) {
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
        
        points.push(new THREE.Vector3(x, y, z));
      }
      return points;
    }

    // Function to initialize the 3D scene
    function init() {
      // Scene
      scene = new THREE.Scene();

      // Camera
      camera = new THREE.PerspectiveCamera(75, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
      camera.position.set(5, 5, 8);

      // Renderer
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setClearColor(0x333333);
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
      nucleus.visible = false; 
      scene.add(nucleus);

      // Create orbital particle systems
      for (const type in orbitalParams) {
        orbitalGroups[type] = createOrbital(type);
        scene.add(orbitalGroups[type]);
      }

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
        
        for (const type in orbitalGroups) {
          if (orbitalGroups[type].material && orbitalGroups[type].material.uniforms) {
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

    // Create a React-friendly version of the GUI controls
    function createGuiControls() {
      // Create the orbital selector
      const orbitalSelector = document.createElement('select');
      orbitalSelector.id = 'orbitalSelector';
      
      for (const type in orbitalParams) {
        const option = document.createElement('option');
        option.value = type;
        option.textContent = orbitalParams[type].name;
        orbitalSelector.appendChild(option);
      }
      
      orbitalSelector.addEventListener('change', (event) => {
        switchOrbital(event.target.value);
      });
      
      // Create cross-section slider
      const crossSectionSlider = document.createElement('input');
      crossSectionSlider.type = 'range';
      crossSectionSlider.id = 'crossSectionSlider';
      crossSectionSlider.min = '-10';
      crossSectionSlider.max = '10';
      crossSectionSlider.value = '10';
      crossSectionSlider.step = '0.1';
      
      crossSectionSlider.addEventListener('input', (event) => {
        const value = parseFloat(event.target.value);
        for (const type in orbitalGroups) {
          if (orbitalGroups[type].material && orbitalGroups[type].material.uniforms) {
            orbitalGroups[type].material.uniforms.u_crossSectionX.value = value;
          }
        }
      });
      
      // Create wave controls
      const wavelengthSlider = document.createElement('input');
      wavelengthSlider.type = 'range';
      wavelengthSlider.id = 'wavelengthSlider';
      wavelengthSlider.min = '0.1';
      wavelengthSlider.max = '2.0';
      wavelengthSlider.value = photonWavelength;
      wavelengthSlider.step = '0.1';
      
      wavelengthSlider.addEventListener('input', (event) => {
        photonWavelength = parseFloat(event.target.value);
        document.getElementById('currentWavelength').textContent = photonWavelength.toFixed(1) + ' nm';
        const energy = calculatePhotonEnergy(photonWavelength);
        document.getElementById('photonEnergyDisplay').textContent = 
          `Photon Energy: ${energy.eV.toFixed(1)} eV`;
      });
      
      // Create other sliders similar to above
      // ... (wave speed slider, wave height slider)
      
      // Create emit button
      const emitButton = document.createElement('button');
      emitButton.id = 'emitWaveBtn';
      emitButton.textContent = 'Emit Photon Wave';
      
      emitButton.addEventListener('click', () => {
        // This will be implemented in setupPhotonWave
      });
      
      // Add elements to the GUI container
      // This part will be replaced with React-friendly structure
      // Here just a placeholder for the logic
      const guiContainer = guiContainerRef.current;
      
      // Clear existing content
      guiContainer.innerHTML = '';
      
      // Orbital selector section
      const orbitalSection = document.createElement('div');
      const orbitalLabel = document.createElement('label');
      orbitalLabel.textContent = 'Select Orbital:';
      orbitalLabel.setAttribute('for', 'orbitalSelector');
      
      orbitalSection.appendChild(orbitalLabel);
      orbitalSection.appendChild(orbitalSelector);
      guiContainer.appendChild(orbitalSection);
      
      // Cross-section slider section
      const crossSectionSection = document.createElement('div');
      crossSectionSection.style.marginTop = '15px';
      
      const crossSectionLabel = document.createElement('label');
      crossSectionLabel.textContent = 'Cross-Section (X-axis):';
      crossSectionLabel.setAttribute('for', 'crossSectionSlider');
      
      crossSectionSection.appendChild(crossSectionLabel);
      crossSectionSection.appendChild(crossSectionSlider);
      
      const crossSectionMarkers = document.createElement('div');
      crossSectionMarkers.style.display = 'flex';
      crossSectionMarkers.style.justifyContent = 'space-between';
      crossSectionMarkers.style.fontSize = '12px';
      crossSectionMarkers.innerHTML = '<span>-10</span><span>0</span><span>10</span>';
      
      crossSectionSection.appendChild(crossSectionMarkers);
      guiContainer.appendChild(crossSectionSection);
      
      // Add photon wave controls
      // ... (similar structure for wave controls)
      
      // Add emit button
      const emitSection = document.createElement('div');
      emitSection.style.marginTop = '15px';
      emitSection.appendChild(emitButton);
      guiContainer.appendChild(emitSection);
    }

    // More function implementations
    function createOrbital(orbitalType) {
      const params = orbitalParams[orbitalType];
      const scale = params.scale;
      
      // Generate points for this orbital type
      const points = params.generatePoints(particleCount, scale);
      
      // Create instanced mesh for particles
      const sphereGeometry = new THREE.SphereGeometry(particleSize, 8, 6);
      
      // Create shader material
      const material = new THREE.ShaderMaterial({
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
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
          u_maxSpeedAtCenter: { value: 50.0 },
          u_minSpeedAtEdge: { value: 0.01 },
          u_exponentialFalloffRate: { value: 3.5 },
          u_crossSectionX: { value: 10.0 },
          viewMatrix: { value: camera.matrixWorldInverse },
          u_waveHeight: { value: waveHeight },
          u_waveFrequency: { value: waveFrequency }
        }
      });
      
      // Create instanced mesh
      const instancedMesh = new THREE.InstancedMesh(sphereGeometry, material, points.length);
      
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
      // Hide all orbitals first
      for (const type in orbitalGroups) {
        orbitalGroups[type].visible = false;
      }
      
      // Show only the selected orbital
      if (orbitalGroups[orbitalType]) {
        orbitalGroups[orbitalType].visible = true;
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
    }

    function onWindowResize() {
      if (!containerRef.current) return;
      
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    }

    // Add implementation for setupPhotonWave, updatePhoton, etc.
    // These are quite complex and would be adapted from the original code

    function setupPhotonWave(scene) {
        // Configuration for the wave
        const waveConfig = {
            waveSpeed: 1.0,       
            waveHeight: 1.5,      
            waveFrequency: 0.3,   
            wavelength: photonWavelength,
            movementType: 'linear',
            waveMode: 'partial'
        };
    
        // Create a grid of particles for the wave
        const gridSize = 80;      
        const gridSpacing = 0.3;  
        const totalParticles = gridSize * gridSize;
        
        // Create geometry for wave particles
        const waveParticleGeometry = new THREE.SphereGeometry(0.15, 8, 6);
        const waveParticleMaterial = new THREE.MeshStandardMaterial({ 
            color: 0x00ffff,
            emissive: 0x003333,
            transparent: true,
            opacity: 0.8
        });
        
        // Create instanced mesh for wave particles
        const waveParticles = new THREE.InstancedMesh(
            waveParticleGeometry,
            waveParticleMaterial,
            totalParticles
        );
        waveParticles.visible = false;
        scene.add(waveParticles);
        
        // Initialize instance colors
        waveParticles.instanceColor = new THREE.InstancedBufferAttribute(
            new Float32Array(totalParticles * 3), 3
        );
        
        // Create dummy for positioning
        const dummy = new THREE.Object3D();
        
        // Initialize particle positions in a grid - in X-Z plane
        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                const index = i * gridSize + j;
                
                // Position in a grid on the x-z plane
                const x = (i - gridSize/2) * gridSpacing;
                const z = (j - gridSize/2) * gridSpacing;
                const y = 0; // Y position at center level
                
                dummy.position.set(x, y, z + 5); // Start position (to the right of the atom)
                dummy.updateMatrix();
                waveParticles.setMatrixAt(index, dummy.matrix);
            }
        }
        waveParticles.instanceMatrix.needsUpdate = true;
        waveParticles.instanceColor.needsUpdate = true;
        
        // Wave animation variables
        let waveActive = false;
        let waveTime = 0;
        let wavePosition = 5; // Starting z position (to the right)
        
        // Function to emit a photon wave
        function emitWave() {
            if (waveActive) return; // Don't emit if a wave is already active
            
            // Make wave visible immediately
            waveParticles.visible = true;
            
            // Set wave active state immediately
            waveActive = true;
            waveTime = 0;
            
            // Start position closer to the atom for faster appearance
            wavePosition = 10;
            
            // Calculate and update photon energy based on current wavelength
            const energy = calculatePhotonEnergy(photonWavelength);
            document.getElementById('photonEnergyDisplay').textContent = 
                `Photon Energy: ${energy.eV.toFixed(2)} eV`;
            
            // Update wave color based on photon wavelength
            const hue = Math.max(0, Math.min(240, 240 * (1 - photonWavelength / 2)));
            const color = new THREE.Color().setHSL(hue/360, 1, 0.5);
            waveParticleMaterial.color.copy(color);
            waveParticleMaterial.emissive.copy(color).multiplyScalar(0.3);
        }
        
        // Function to update wave animation
        function updateWave(deltaTime) {
            if (!waveActive) return;
            
            // Get current values from sliders if they exist
            if (document.getElementById('waveSpeedSlider')) {
                waveConfig.waveSpeed = parseFloat(document.getElementById('waveSpeedSlider').value);
            }
            if (document.getElementById('wavelengthSlider')) {
                photonWavelength = parseFloat(document.getElementById('wavelengthSlider').value);
                waveConfig.wavelength = photonWavelength;
                
                // Update energy display when wavelength changes
                const energy = calculatePhotonEnergy(photonWavelength);
                document.getElementById('photonEnergyDisplay').textContent = 
                    `Photon Energy: ${energy.eV.toFixed(2)} eV`;
            }
            if (document.getElementById('waveHeightSlider')) {
                waveConfig.waveHeight = parseFloat(document.getElementById('waveHeightSlider').value);
            }
            
            // Update time and position - moving left (negative direction)
            waveTime += deltaTime * waveConfig.waveSpeed * 0.5;
            wavePosition -= deltaTime * waveConfig.waveSpeed * 1.2;
            
            // If wave has moved past the atom, hide it
            if (wavePosition < -10) {
                waveActive = false;
                waveParticles.visible = false;
                return;
            }
            
            // Update particle positions based on wave function
            for (let i = 0; i < gridSize; i++) {
                for (let j = 0; j < gridSize; j++) {
                    const index = i * gridSize + j;
                    
                    // Base position in grid (x-z plane)
                    const x = (i - gridSize/2) * gridSpacing;
                    const z = (j - gridSize/2) * gridSpacing;
                    
                    // Calculate distance from wave center in X-Z plane (circular wave)
                    const dx = x;
                    const dz = z - wavePosition;
                    const distanceFromCenter = Math.sqrt(dx * dx + dz * dz);
                    
                    // Define the active wave radius and larger visible radius
                    const waveRadius = 6.0 * photonWavelength;
                    const visibleRadius = 12.0 * photonWavelength;
                    
                    // Calculate wave effect
                    let height = 0;
                    let opacity = 0;
                    
                    if (distanceFromCenter < visibleRadius) {
                        // Calculate fade factor based on distance from wave center
                        const fadeFactor = 1.0 - (distanceFromCenter / visibleRadius);
                        const smoothFade = Math.pow(fadeFactor, 5);
                        opacity = smoothFade * 0.1;
                        
                        if (distanceFromCenter < waveRadius) {
                            // Calculate wave height using a smooth bell curve
                            const normalizedDist = distanceFromCenter / waveRadius;
                            height = waveConfig.waveHeight * photonWavelength * Math.exp(-normalizedDist * normalizedDist * 1.2);
                            
                            // Calculate opacity based on height (higher = more visible)
                            const heightFactor = height / (waveConfig.waveHeight * photonWavelength);
                            opacity = Math.min(0.1 + heightFactor * 0.9, 1.0);
                            opacity = Math.pow(opacity, 0.6);
                            
                            // Apply color gradient based on height/amplitude
                            const baseHue = Math.max(0, Math.min(240, 240 * (1 - photonWavelength / 2)));
                            const saturation = 0.5 + heightFactor * 0.5;
                            const lightness = 0.3 + heightFactor * 0.4;
                            const particleColor = new THREE.Color().setHSL(baseHue/360, saturation, lightness);
                            waveParticles.setColorAt(index, particleColor);
                        }
                    }
                    
                    // Apply height to Y position - particles only move up and down
                    dummy.position.set(x, height, z);
                    
                    // Set scale based on opacity (smaller when fading)
                    const scale = opacity;
                    dummy.scale.set(scale, scale, scale);
                    
                    dummy.updateMatrix();
                    waveParticles.setMatrixAt(index, dummy.matrix);
                }
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
        <div className="quantum-container">
          <div ref={containerRef} className="renderer-container"></div>
          <div ref={guiContainerRef} className="gui-container"></div>
        </div>
      );
    }