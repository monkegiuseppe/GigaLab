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

    const orbitalSection = document.createElement('div');
    const crossSectionSection = document.createElement('div');
    const orbitalLabel = document.createElement('label');
    const crossSectionLabel = document.createElement('label'); 
      // Create the orbital selector
      const orbitalSelector = document.createElement('select');
      orbitalSelector.id = 'orbitalSelector';
      orbitalSelector.style.width = '100%';
        orbitalSelector.style.padding = '8px';
        orbitalSelector.style.borderRadius = '4px';
        orbitalSelector.style.backgroundColor = 'rgba(60, 60, 60, 0.8)';
        orbitalSelector.style.color = 'rgba(220, 220, 220, 0.9)';
        orbitalSelector.style.border = '1px solid rgba(80, 80, 80, 0.8)';
        orbitalSection.style.marginBottom = '15px';

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
      crossSectionSection.className = 'glass';
        crossSectionSection.style.padding = '15px';
        crossSectionSection.style.borderRadius = '8px';
        crossSectionSection.style.backgroundColor = 'rgba(50, 50, 50, 0.8)';
        crossSectionSection.style.backdropFilter = 'blur(10px)';
        crossSectionSection.style.WebkitBackdropFilter = 'blur(10px)';
        crossSectionSection.style.border = '1px solid rgba(255, 255, 255, 0.05)';
        crossSectionSection.style.marginBottom = '15px';
      crossSectionSlider.type = 'range';
      crossSectionSlider.id = 'crossSectionSlider';
      crossSectionSlider.min = '-10';
      crossSectionSlider.max = '10';
      crossSectionSlider.value = '10';
      crossSectionSlider.step = '0.1';
      crossSectionLabel.style.fontWeight = 'bold';
        crossSectionLabel.style.marginBottom = '10px';
        crossSectionLabel.style.display = 'block';
        crossSectionLabel.style.color = 'rgba(220, 220, 220, 0.9)';

        crossSectionSlider.style.accentColor = 'rgb(220, 40, 40)';
        crossSectionSlider.style.width = '100%';
        crossSectionSlider.style.marginBottom = '5px';
      
      crossSectionSlider.addEventListener('input', (event) => {
        const value = parseFloat(event.target.value);
        for (const type in orbitalGroups) {
          if (orbitalGroups[type].material && orbitalGroups[type].material.uniforms) {
            orbitalGroups[type].material.uniforms.u_crossSectionX.value = value;
          }
        }
      });
      
      // Create wave controls
      const wavelengthSection = document.createElement('div');
        wavelengthSection.style.marginTop = '15px';
        wavelengthSection.className = 'glass';
        wavelengthSection.style.padding = '15px';
        wavelengthSection.style.borderRadius = '8px';
        wavelengthSection.style.backgroundColor = 'rgba(50, 50, 50, 0.8)';
        wavelengthSection.style.backdropFilter = 'blur(10px)';
        wavelengthSection.style.WebkitBackdropFilter = 'blur(10px)';
        wavelengthSection.style.border = '1px solid rgba(255, 255, 255, 0.05)';
        wavelengthSection.style.marginBottom = '15px';

        const wavelengthLabel = document.createElement('label');
        wavelengthLabel.style.fontWeight = 'bold';
        wavelengthLabel.style.marginBottom = '10px';
        wavelengthLabel.style.display = 'block';
        wavelengthLabel.style.color = 'rgba(220, 220, 220, 0.9)';
        wavelengthLabel.textContent = 'Photon Wavelength:';
        wavelengthLabel.setAttribute('for', 'wavelengthSlider');
        wavelengthSection.appendChild(wavelengthLabel);

        // Add wavelength display
        const wavelengthDisplay = document.createElement('div');
        wavelengthDisplay.style.textAlign = 'center';
        wavelengthDisplay.style.marginBottom = '10px';
        wavelengthDisplay.style.padding = '5px';
        wavelengthDisplay.style.backgroundColor = 'rgba(40, 40, 40, 0.8)';
        wavelengthDisplay.style.borderRadius = '4px';
        wavelengthDisplay.style.color = 'rgb(220, 40, 40)';
        wavelengthDisplay.style.fontWeight = 'bold';
        wavelengthDisplay.id = 'currentWavelength';
        wavelengthDisplay.textContent = photonWavelength.toFixed(1) + ' nm';
        wavelengthDisplay.style.fontSize = '14px';
        wavelengthDisplay.style.textAlign = 'center';
        wavelengthDisplay.style.marginBottom = '5px';
        wavelengthSection.appendChild(wavelengthDisplay);

        const wavelengthSlider = document.createElement('input');
        wavelengthSlider.style.accentColor = 'rgb(220, 40, 40)';
        wavelengthSlider.style.width = '100%';
        wavelengthSlider.style.marginBottom = '5px';
        wavelengthSlider.type = 'range';
        wavelengthSlider.id = 'wavelengthSlider';
        wavelengthSlider.min = '0.2';
        wavelengthSlider.max = '3.0';
        wavelengthSlider.value = photonWavelength;
        wavelengthSlider.step = '0.1';
        wavelengthSection.appendChild(wavelengthSlider);

        
        wavelengthSlider.addEventListener('input', (event) => {
            photonWavelength = parseFloat(event.target.value);
            document.getElementById('currentWavelength').textContent = photonWavelength.toFixed(1) + ' nm';
            
            // Calculate and update energy display
            const energy = calculatePhotonEnergy(photonWavelength);
            document.getElementById('photonEnergyDisplay').textContent = 
                `Photon Energy: ${energy.eV.toFixed(1)} eV`;
        });
        
        // Add value markers below slider
        const wavelengthMarkers = document.createElement('div');
        wavelengthMarkers.style.display = 'flex';
        wavelengthMarkers.style.justifyContent = 'space-between';
        wavelengthMarkers.style.fontSize = '12px';
        wavelengthMarkers.style.marginTop = '2px';
        wavelengthMarkers.innerHTML = '<span>0.2 nm</span><span>3.0 nm</span>';
        wavelengthSection.appendChild(wavelengthMarkers);

        // Add photon energy display
        const energyDisplay = document.createElement('div');
        energyDisplay.style.backgroundColor = 'rgba(40, 40, 40, 0.8)';
        energyDisplay.style.padding = '5px';
        energyDisplay.style.borderRadius = '4px';
        energyDisplay.style.marginTop = '10px';
        energyDisplay.style.fontSize = '13px';
        energyDisplay.style.color = 'rgba(200, 200, 200, 0.8)';
        energyDisplay.id = 'photonEnergyDisplay';
        energyDisplay.textContent = `Photon Energy: ${calculatePhotonEnergy(photonWavelength).eV.toFixed(1)} eV`;
        wavelengthSection.appendChild(energyDisplay);
      
        
      
      // Create emit button
      const emitButton = document.createElement('button');
      emitButton.id = 'emitWaveBtn';
      emitButton.textContent = 'Emit Photon Wave';
      
      emitButton.addEventListener('click', () => {
        // This will be implemented in setupPhotonWave
      });
      
      // Here just a placeholder for the logic
      const guiContainer = guiContainerRef.current;
      // Clear existing content
      guiContainer.innerHTML = '';
      guiContainer.className = 'glass';
        guiContainer.style.padding = '20px';
        guiContainer.style.borderRadius = '12px';
        guiContainer.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
        guiContainer.style.width = '280px';
        guiContainer.style.color = 'rgba(220, 220, 220, 0.9)';
        
      
      
      // Orbital selector section
      orbitalLabel.style.fontWeight = 'bold';
        orbitalLabel.style.marginBottom = '10px';
        orbitalLabel.style.display = 'block';
      orbitalLabel.textContent = 'Select Orbital:';
      orbitalLabel.setAttribute('for', 'orbitalSelector');
      
      orbitalSection.appendChild(orbitalLabel);
      orbitalSection.appendChild(orbitalSelector);
      guiContainer.appendChild(orbitalSection);
      guiContainer.appendChild(wavelengthSection);

      // Cross-section slider section
    
      crossSectionSection.style.marginTop = '15px';
      
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

      const waveTypeToggle = document.createElement('button');
        waveTypeToggle.id = 'waveTypeToggleBtn';
        waveTypeToggle.textContent = 'Wave Type: Point';
        waveTypeToggle.className = 'w-full p-2 rounded border transition-all'; // Apply site-wide button styles
        waveTypeToggle.style.backgroundColor = 'rgba(50, 50, 50, 0.8)';
        waveTypeToggle.style.borderColor = 'rgba(80, 80, 80, 0.8)';
        waveTypeToggle.style.color = 'rgba(220, 220, 220, 0.9)';
        waveTypeToggle.style.fontSize = '14px';
        waveTypeToggle.style.margin = '10px 0';

        waveTypeToggle.addEventListener('click', () => {
            // Toggle between 'linear' and 'circular' wave types
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

        // Add to GUI
        const waveTypeSection = document.createElement('div');
        waveTypeSection.style.marginTop = '10px';
        waveTypeSection.appendChild(waveTypeToggle);
        guiContainer.appendChild(waveTypeSection);

      // Add emit button
      const emitSection = document.createElement('div');
      emitSection.style.marginTop = '15px';
      emitButton.className = 'w-full p-2 rounded border transition-all hover:bg-opacity-90';
      emitButton.style.backgroundColor = 'rgb(220, 40, 40)'; // Use the accent color from your gray theme
      emitButton.style.borderColor = 'rgb(220, 40, 40)';
      emitButton.style.color = 'rgba(220, 220, 220, 0.9)';
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
    
        // Wave animation variables
        let waveActive = false;
        let waveTime = 0;
        let wavePosition = 5; // Starting z position
        
        // Create a grid of particles for the wave - LARGER GRID
        const gridSize = 130;      
        const gridSpacing = 0.25;  
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
            waveTime = 0;
            wavePosition = 10; // Starting position (right side)
            
            // Update wave parameters based on wavelength
            waveConfig.wavelength = photonWavelength;
            waveConfig.waveFrequency = 1.0 / photonWavelength;
            
            // Calculate and display energy
            const energy = calculatePhotonEnergy(photonWavelength);
            document.getElementById('photonEnergyDisplay').textContent = 
                `Photon Energy: ${energy.eV.toFixed(2)} eV`;
        }
        
        // Function to update wave animation
        function updateWave(deltaTime) {
            // Get current values from sliders if they exist
            if (document.getElementById('wavelengthSlider')) {
                photonWavelength = parseFloat(document.getElementById('wavelengthSlider').value);
                document.getElementById('currentWavelength').textContent = photonWavelength.toFixed(1) + ' nm';
                
                // Update energy display when wavelength changes
                const energy = calculatePhotonEnergy(photonWavelength);
                document.getElementById('photonEnergyDisplay').textContent = 
                    `Photon Energy: ${energy.eV.toFixed(1)} eV`;
                    
                // DON'T update the wave color based on wavelength
            }
            
            // If active wave, update its position
            if (waveActive) {
                // Update time and position - moving left (negative direction)
                waveTime += deltaTime * waveConfig.waveSpeed * 0.5;
                wavePosition -= deltaTime * waveConfig.waveSpeed * 1.2;
                
                // If wave has moved completely past the left edge, deactivate it
                if (wavePosition < -25) {
                    waveActive = false;
                }
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
                    
                    // If wave is active, calculate its effect
                    if (waveActive) {
                        let distanceFromWave;
                        
                        if (waveType === 'linear') {
                            // POINT-LIKE wave - distance from a moving point
                            const dx = x;
                            const dz = z - wavePosition;
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
                            // Start from an earlier position to the right
                            const waveOriginZ = 17; // Further to the right (was 15)
                            const waveOriginX = 0;  // Center X position
                            
                            // Calculate the current radius of the expanding circle based on wave position
                            // Use a more natural expansion rate
                            const expandingRadius = Math.abs(waveOriginZ - wavePosition) * 1.2;
                            
                            // Calculate distance from the expanding circle
                            const dx = x - waveOriginX;
                            const dz = z - waveOriginZ;
                            const distanceFromOrigin = Math.sqrt(dx * dx + dz * dz);
                            
                            // Calculate angle from the origin
                            const angle = Math.atan2(dx, -dz);
                            
                            // Limit to approximately 150 degrees total (75 degrees each side)
                            const maxAngle = Math.PI * 0.42; // ~75 degrees
                            
                            // Only process points within the angle range
                            if (Math.abs(angle) <= maxAngle) {
                                // For a natural wave, use a constant thickness that doesn't widen in middle
                                const ringThickness = 1.8 * photonWavelength; // Thinner base thickness
                                
                                // Calculate distance from the expanding circle edge
                                const distanceFromRing = Math.abs(distanceFromOrigin - expandingRadius);
                                
                                // Calculate wave effect - height is maximum at the ring radius
                                if (distanceFromRing < ringThickness) {
                                    // Use a bell curve that gets proportionally thinner as the wave expands
                                    const heightFactor = 1.0 - (distanceFromRing / ringThickness);
                                    
                                    // Wave height decreases slightly as it expands (inverse square law)
                                    const distanceFactor = Math.max(0.3, 1.0 / (1.0 + expandingRadius * 0.05));
                                    
                                    // Additional factor to fade out at the edges of the angle range
                                    // Use a smoother fade at edges with cosine
                                    const angleFactor = Math.cos(angle / maxAngle * (Math.PI/2)) * Math.cos(angle / maxAngle * (Math.PI/2));
                                    
                                    // In the early stages of the wave, make the wave thinner to prevent middle widening
                                    const initialStageCorrection = expandingRadius < 8 ? 
                                        Math.max(0.5, expandingRadius / 8) : 1.0;
                                    
                                    const waveHeight = waveConfig.waveHeight * photonWavelength * 
                                                      Math.pow(heightFactor, 2) * distanceFactor * 
                                                      Math.pow(angleFactor, 2) * initialStageCorrection;
                                    
                                    if (waveHeight > height) {
                                        height = waveHeight;
                                        colorIntensity = 0.4 + Math.min(0.6, height / (waveConfig.waveHeight * photonWavelength) * 0.6);
                                    }
                                }
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
