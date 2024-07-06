"use client";

import { Canvas } from "@react-three/fiber";
import { usePathname } from "next/navigation";
import { ReactNode, useCallback } from "react";
import { ACESFilmicToneMapping } from "three";

const cameraValues = {
  root: {
    fov: 45,
    near: 0.1,
    far: 200,
    position: [3, 2, 6],
  },
  "/shaders/1": {
    position: [1, 1, 1],
  },
  "/shaders/2": {
    position: [0, 0, 8],
  },
  "/shaders/3": {
    position: [0.0, 0.0, 1.5],
  },
};

export const ThreeJSWrapper = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  const getCameraValue = useCallback(() => {
    const cameraValuesKeys = Object.keys(cameraValues);
    const camera =
      // @ts-expect-error
      cameraValues[
        cameraValuesKeys.find((key) => key === pathname) || cameraValuesKeys[0]
      ];
    return camera;
  }, [pathname]);

  return (
    <main className="flex h-screen flex-col items-center p-8">
      <Canvas
        gl={{
          antialias: true,
          toneMapping: ACESFilmicToneMapping,
          // outputColorSpace: THREE.SRGBColorSpace
        }}
        camera={getCameraValue()}
      >
        {children}
      </Canvas>
    </main>
  );
};
