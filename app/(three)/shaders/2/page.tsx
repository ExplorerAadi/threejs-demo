"use client";

import { useMemo, useRef } from "react";
// @ts-ignore
import fragmentShader2 from "./fragment2.glsl";
// @ts-ignore
import vertexShader2 from "./vertex2.glsl";
import { Mesh, ShaderMaterial } from "three";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function ShadersSecondExamplePage() {
  const meshRef = useRef<Mesh>(null);

  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
      u_intensity: {
        value: 0.3,
      },
    }),
    []
  );

  useFrame((_state, delta) => {
    if (meshRef.current) {
      (meshRef.current.material as ShaderMaterial).uniforms.u_time.value +=
        delta;
      (meshRef.current.material as ShaderMaterial).uniforms.u_intensity.value +=
        0.15;
    }
  });

  return (
    <>
      <OrbitControls />
      <mesh
        ref={meshRef}
        position={[0, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.5}
      >
        <planeGeometry args={[1, 1, 16, 16]} />
        <shaderMaterial
          fragmentShader={fragmentShader2}
          vertexShader={vertexShader2}
          uniforms={uniforms}
          wireframe={false}
        />
      </mesh>
    </>
  );
}
