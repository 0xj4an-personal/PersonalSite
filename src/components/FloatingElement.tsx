'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface FloatingElementProps {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
}

export default function FloatingElement({ position, rotation, scale }: FloatingElementProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [randomRotation] = useState(() => Math.random() * Math.PI * 2);
  const [geometry] = useState(() => {
    const random = Math.random();
    if (random < 0.33) return new THREE.TetrahedronGeometry(1, 0);
    if (random < 0.66) return new THREE.OctahedronGeometry(1, 0);
    return new THREE.IcosahedronGeometry(1, 0);
  });

  useFrame((state: { clock: { elapsedTime: number } }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = randomRotation + state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = randomRotation + state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + randomRotation) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
      <primitive object={geometry} />
      <meshStandardMaterial
        color="#ffffff"
        wireframe
        transparent
        opacity={0.08}
        emissive="#ffffff"
        emissiveIntensity={0.05}
      />
    </mesh>
  );
} 