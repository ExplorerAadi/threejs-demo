"use client";

import { ACESFilmicToneMapping } from "three";
import { Experience } from "./Experience";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center p-8">
      <Canvas
        gl={{
          antialias: true,
          toneMapping: ACESFilmicToneMapping,
          // outputColorSpace: THREE.SRGBColorSpace
        }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [3, 2, 6],
        }}
      >
        <Experience />
      </Canvas>
    </main>
  );
}
