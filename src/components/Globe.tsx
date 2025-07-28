"use client";

import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const GlobeComponent = () => {
    const meshRef = useRef<THREE.Mesh>(null!);
    const texture = useLoader(THREE.TextureLoader, '//unpkg.com/three-globe/example/img/earth-dark.jpg');

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.001;
        }
    });

    return (
        <Sphere args={[2.5, 64, 64]} ref={meshRef}>
            <meshStandardMaterial 
              map={texture} 
              color="orange" 
              emissive="#FC5000"
              emissiveIntensity={0.3}
              metalness={0.2}
              roughness={0.9}
            />
        </Sphere>
    );
};

const InteractiveGlobe: React.FC = () => {
    return (
      <Canvas>
        <Suspense fallback={null}>
            <ambientLight intensity={0.2} />
            <directionalLight color="orange" position={[4, 4, 4]} intensity={1.5} />
            <GlobeComponent />
            <OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={false} enablePan={false} />
        </Suspense>
      </Canvas>
    );
};

export default InteractiveGlobe;
