'use client';

import { useRef, useState, forwardRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { Section as SectionType } from '../app/page'; // Import the Section interface type
import React from 'react';

interface SectionProps {
  name: string;
  position: [number, number, number];
  color: string;
  scale: number;
  id: string;
  Component?: React.ComponentType<{}>;
  gradient: string;
  onSectionClick: (section: SectionType) => void;
  isModalOpen: boolean;
}

const SectionComponent = forwardRef<THREE.Mesh, SectionProps>(
  ({
    name,
    position,
    color,
    scale,
    id,
    Component,
    onSectionClick,
    isModalOpen,
    gradient,
  }, ref) => {
    const meshRef = useRef<THREE.Mesh>(null);
    const [hovered, setHovered] = useState(false);
    const isCenter = id === 'home';
    const fontSize = isCenter ? 'text-lg' : 'text-md';

    useFrame(() => {
      if (meshRef.current) {
        if (isCenter) {
          // Slow, majestic rotation for the central planet
          meshRef.current.rotation.y += 0.002;
        } else if (hovered) {
          meshRef.current.rotation.x += 0.01;
          meshRef.current.rotation.y += 0.01;
        }
      }
    });

    return (
      <group position={position}>
        <mesh
          ref={(node) => {
            meshRef.current = node;
            if (typeof ref === 'function') {
              ref(node);
            } else if (ref) {
              (ref as React.MutableRefObject<THREE.Mesh | null>).current = node;
            }
          }}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onClick={() => onSectionClick({ name, position, color, scale, id, Component, gradient })}
          scale={hovered ? scale * 1.2 : scale}
        >
          {/* Using sphere geometry for all elements on the path for consistency */}
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            color={color}
            transparent
            opacity={isModalOpen ? 0.2 : isCenter ? 1 : 0.9}
            emissive={color}
            emissiveIntensity={hovered ? 0.6 : isCenter ? 0.3 : 0.5}
            roughness={isCenter ? 0.2 : 0.4}
            metalness={isCenter ? 0.8 : 0.3}
          />
        </mesh>
        {!isModalOpen && (
          <Html center>
            <div
              className={`cursor-pointer font-bold ${fontSize} text-center`}
              style={{
                color,
                textShadow: '0 0 10px rgba(255,255,255,0.5)',
                transform: `scale(${hovered ? 1.1 : 1})`,
                transition: 'transform 0.2s ease-in-out',
              }}
              onClick={() => onSectionClick({ name, position, color, scale, id, Component, gradient })}
            >
              {name}
            </div>
          </Html>
        )}
      </group>
    );
  }
);

export default SectionComponent; 