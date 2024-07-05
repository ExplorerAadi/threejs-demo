"use client";

import { Canvas } from "@react-three/fiber";
import { ReactNode } from "react";
import { ACESFilmicToneMapping } from "three";

export const ThreeJSWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex h-screen flex-col items-center p-8">
      <Canvas
        gl={{
          antialias: true,
          toneMapping: ACESFilmicToneMapping,
          // outputColorSpace: THREE.SRGBColorSpace
        }}
        camera={{
          // for other scenes
          // fov: 45,
          // near: 0.1,
          // far: 200,
          // position: [3, 2, 6],

          // for shaders
          position: [1, 1, 1],
        }}
      >
        {children}
      </Canvas>
    </main>
  );
};
