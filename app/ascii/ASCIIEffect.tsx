"use client";

import { useThree } from "@react-three/fiber";
import {
  AsciiRenderer,
  MeshPortalMaterial,
  OrbitControls,
} from "@react-three/drei";
import { Sphere } from "@react-three/drei";
import { EffectComposer } from "@react-three/postprocessing";

export const ASCIIEffect = () => {
  const { camera, gl } = useThree();

  return (
    <>
      <OrbitControls args={[camera, gl.domElement]} />

      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={1.5} />
      <mesh>
        {/* <roundedPlaneGeometry args={[1, 1, 0.1]} /> */}
        <MeshPortalMaterial></MeshPortalMaterial>
      </mesh>
      {/* <EffectComposer> */}
      <AsciiRenderer characters=" .:,-=+*#%@1234567890" invert={false} />
      {/* </EffectComposer> */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 5]} intensity={1} />
      <Sphere visible position={[0, 0, 0]} args={[1, 16, 16]}>
        <meshStandardMaterial />
      </Sphere>
    </>
  );
};
