import { OrbitControls, useFBO } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
// @ts-expect-error
import reflectionVertexShader from "./reflectionVertex.glsl";
// @ts-expect-error
import reflectionFragmentShader from "./reflectionFragment.glsl";
import "./scene.css";
import { Mesh, ShaderMaterial } from "three";
import { range } from "../../ascii/utils";

const Geometries = () => {
  // This reference gives us direct access to our mesh
  const mesh = useRef<Mesh>(null);
  const backgroundGroup = useRef<any>(null);

  // This is our main render target where we'll render and store the scene as a texture
  const mainRenderTarget = useFBO();

  const uniforms = useMemo(
    () => ({
      uTexture: {
        value: null,
      },
      winResolution: {
        value: new THREE.Vector2(
          window.innerWidth,
          window.innerHeight
        ).multiplyScalar(Math.min(window.devicePixelRatio, 2)), // if DPR is 3 the shader glitches 🤷‍♂️
      },
    }),
    []
  );

  useFrame((state) => {
    const { gl, scene, camera } = state;
    // Hide the mesh
    if (mesh.current) {
      mesh.current.visible = false;
      gl.setRenderTarget(mainRenderTarget);
      // Render into the FBO
      gl.render(scene, camera);

      // Pass the texture data to our shader material
      (mesh.current.material as ShaderMaterial).uniforms.uTexture.value =
        mainRenderTarget.texture;

      gl.setRenderTarget(null);
      // Show the mesh
      mesh.current.visible = true;
    }
  });

  const columns = range(-7.5, 7.5, 2.5);
  const rows = range(-7.5, 7.5, 2.5);

  return (
    <>
      <color attach="background" args={["black"]} />
      <group ref={backgroundGroup}>
        {columns.map((col, i) =>
          rows.map((row, j) => (
            <mesh position={[col, row, -4]}>
              <icosahedronGeometry args={[0.333, 8]} />
              <meshStandardMaterial color="white" />
            </mesh>
          ))
        )}
      </group>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[2.84, 20]} />
        <shaderMaterial
          key={Math.random()}
          vertexShader={reflectionVertexShader}
          fragmentShader={reflectionFragmentShader}
          uniforms={uniforms}
        />
      </mesh>
    </>
  );
};

const Scene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 6] }} dpr={[1, 2]}>
      <ambientLight intensity={1.0} />
      <Geometries />
      <OrbitControls />
    </Canvas>
  );
};

export default Scene;
