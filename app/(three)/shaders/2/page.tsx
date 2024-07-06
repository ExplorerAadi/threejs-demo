"use client";

import { useMemo, useRef } from "react";
// @ts-ignore
import fragmentShader2 from "./fragment2.glsl";
// @ts-ignore
import vertexShader2 from "./vertex2.glsl";
import { MathUtils, Mesh, ShaderMaterial } from "three";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function ShadersSecondExamplePage() {
  const meshRef = useRef<Mesh>(null);
  const hoverRef = useRef(false);

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
      const meshRefUniforms = (meshRef.current.material as ShaderMaterial)
        .uniforms;
      meshRefUniforms.u_time.value += delta;
      meshRefUniforms.u_intensity.value = MathUtils.lerp(
        meshRefUniforms.u_intensity.value,
        hoverRef.current ? 0.85 : 0.15,
        0.02
      );
    }
  });

  return (
    <>
      <OrbitControls />
      <mesh
        ref={meshRef}
        position={[0, 0, 0]}
        // rotation={[-Math.PI / 2, 0, 0]}
        scale={1.5}
        onPointerEnter={() => (hoverRef.current = true)}
        onPointerOut={() => (hoverRef.current = false)}
      >
        <icosahedronGeometry args={[2, 20]} />
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
