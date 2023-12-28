'use client'
import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import PastoTexture from '../../../../public/textures3D/PastoTexture.jpeg'
import * as THREE from 'three';

const Cube = () => {
  const cubeRef = useRef();

  const { camera } = useThree();

  useFrame(() => {
    camera.position.z = 10
    cubeRef.current.rotation.x += 0.01;
    cubeRef.current.rotation.y += 0.01;
  });
  
  const texture = new THREE.TextureLoader().load(PastoTexture)

  return (

    <mesh
      ref={cubeRef}
      onClick={() => console.log('Cubo clickeado')}
      onPointerOver={() => console.log('Mouse sobre el cubo')}
      onPointerOut={() => console.log('Mouse fuera del cubo')}
      scale={[5, 5, 5]}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial map={texture}/>
      <Html>
        <div className='bg-white text-xl text-white'>¡Haz clic en el cubo!</div>
      </Html>
    </mesh>

  );
};

const ThreeScene = () => {
    const scene = new THREE.Scene(); 
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);
  return (
    <Canvas 
    style={{ position: 'absolute' }}
    className="fullscreen-canvas"
    camera={{ position: [0, 0, 5] }}>
      <ambientLight />
      <Cube />
    </Canvas>
  );
};

export default ThreeScene;
