'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

interface CometProps {
  position: [number, number, number];
  color?: string;
  size?: number;
}

export default function Comet({ position, color = '#ffffff', size = 0.1 }: CometProps) {
  const cometRef = useRef<THREE.Mesh>(null);

  useFrame((state: import('@react-three/fiber').RootState, delta: number) => {
    if (cometRef.current) {
      // Simple rotation for testing
      cometRef.current.rotation.x += delta;
      cometRef.current.rotation.y += delta;

      // Simple boundary check and reset (respanwn on opposite side)
      if (cometRef.current.position.x > 40) cometRef.current.position.x = -40;
      if (cometRef.current.position.x < -40) cometRef.current.position.x = 40;
      if (cometRef.current.position.y > 40) cometRef.current.position.y = -40;
      if (cometRef.current.position.y < -40) cometRef.current.position.y = 40;
      if (cometRef.current.position.z > 40) cometRef.current.position.z = -40;
      if (cometRef.current.position.z < -40) cometRef.current.position.z = 40;
    }
  });

  return (
    <Sphere ref={cometRef} args={[size, 16, 16]} position={position}>
      <meshBasicMaterial color={color} />
    </Sphere>
  );
} 