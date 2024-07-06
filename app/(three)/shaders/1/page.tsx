"use client";

import { useMemo, useRef } from "react";
// @ts-ignore
import fragmentShader1 from "./fragment1.glsl";
// @ts-ignore
import vertexShader1 from "./vertex1.glsl";
import { Color, Mesh, ShaderMaterial } from "three";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function ShadersFirstExamplePage() {
  const meshRef = useRef<Mesh>(null);

  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
      u_colorA: { value: new Color("#FFE486") },
      u_colorB: { value: new Color("#FEB3D9") },
    }),
    []
  );

  useFrame((_state, delta) => {
    if (meshRef.current) {
      (meshRef.current.material as ShaderMaterial).uniforms.u_time.value +=
        delta;
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
          fragmentShader={fragmentShader1}
          vertexShader={vertexShader1}
          uniforms={uniforms}
          wireframe={false}
        />
      </mesh>
    </>
  );
}
