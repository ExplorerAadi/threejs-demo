"use client";

import { useCallback, useEffect, useMemo, useRef } from "react";
// @ts-ignore
import fragmentShader3 from "./fragment3.glsl";
// @ts-ignore
import vertexShader3 from "./vertex3.glsl";
import { Color, Mesh, ShaderMaterial, Vector2 } from "three";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function ShadersThirdExamplePage() {
  const meshRef = useRef<Mesh>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  const updateMousePosition = useCallback((e: MouseEvent) => {
    mousePosition.current = { x: e.pageX, y: e.pageY };
  }, []);

  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
      u_mouse: { value: new Vector2(0, 0) },
      u_bg: {
        value: new Color("#A1A3F7"),
      },
      u_colorA: { value: new Color("#9FBAF9") },
      u_colorB: { value: new Color("#FEB3D9") },
    }),
    []
  );

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition, false);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition, false);
    };
  }, [updateMousePosition]);

  useFrame((_state, delta) => {
    if (meshRef.current) {
      const meshRefUniforms = (meshRef.current.material as ShaderMaterial)
        .uniforms;
      meshRefUniforms.u_time.value += delta;
      meshRefUniforms.u_mouse.value = new Vector2(
        mousePosition.current.x,
        mousePosition.current.y
      );
    }
  });

  return (
    <>
      <OrbitControls />
      <mesh ref={meshRef} position={[0, 0, 0]} scale={1.5}>
        <planeGeometry args={[1, 1, 16, 16]} />
        <shaderMaterial
          fragmentShader={fragmentShader3}
          vertexShader={vertexShader3}
          uniforms={uniforms}
          wireframe={false}
        />
      </mesh>
    </>
  );
}
