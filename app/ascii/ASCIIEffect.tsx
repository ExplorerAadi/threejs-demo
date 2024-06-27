"use client";

import { useFrame, useThree } from "@react-three/fiber";
import {
  AsciiRenderer,
  Center,
  FontData,
  OrbitControls,
  Text3D,
} from "@react-three/drei";

import font from "./font.json";
import { useRef } from "react";
import { Mesh, Shape } from "three";
import { EffectComposer } from "@react-three/postprocessing";

export const ASCIIEffect = () => {
  const { camera, gl } = useThree();
  const textRef = useRef<Mesh>(null);

  useFrame((_state, delta) => {
    if (textRef.current) {
      textRef.current.position.x -= delta * 0.5;
    }
  });

  return (
    <>
      <OrbitControls args={[camera, gl.domElement]} />

      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 5]} intensity={1} />
      <EffectComposer>
        <AsciiRenderer characters=" .:,/-=+*#%1234567890@$" invert={false} />
      </EffectComposer>

      <Center position={[0, 0, 0]}>
        <AnimatingObject />
        <Text3D
          position={[0, 0, 0]}
          font={font as unknown as FontData}
          size={6}
          height={0.2}
          letterSpacing={0.1}
          curveSegments={32}
          bevelEnabled
          bevelSize={0.05}
          bevelThickness={0.05}
          ref={textRef}
        >
          methlab
          <meshStandardMaterial attach="material" color="white" />
        </Text3D>
      </Center>
    </>
  );
};

const AnimatingObject = () => {
  const meshRef = useRef<Mesh | null>(null);

  useFrame((_state, delta) => {
    if (meshRef.current) {
      meshRef.current.position.x += delta * 0.5;
    }
  });

  return (
    <>
      <mesh ref={meshRef} position={[0, 0, 1]} scale={[1.5, 1.5, 1.5]}>
        <extrudeGeometry
          args={[
            new Shape().moveTo(0, 0).lineTo(2, 3).lineTo(4, 0).lineTo(0, 0),
            {
              steps: 5,
              depth: 1,
              bevelEnabled: true,
              bevelThickness: 0.3,
              bevelSize: 0.5,
              bevelOffset: 0,
              bevelSegments: 1,
            },
          ]}
        />
        <meshPhongMaterial color={0xf6c12a} shininess={70} />
      </mesh>
      <ambientLight intensity={0.55} color={0xffffff} />
    </>
  );
};
