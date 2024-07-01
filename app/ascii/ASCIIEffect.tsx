"use client";

import { useFrame, useThree } from "@react-three/fiber";
import {
  AsciiRenderer,
  Center,
  FontData,
  OrbitControls,
  Scroll,
  ScrollControls,
  Text3D,
} from "@react-three/drei";

import font from "./font.json";
import { useRef } from "react";
import { Mesh, ShaderMaterial, Shape } from "three";
// @ts-ignore
import fragmentShader from "./shaders/fragment.glsl";
// @ts-ignore
import vertexShader from "./shaders/vertex.glsl";

export const ASCIIEffect = () => {
  const { camera, gl } = useThree();
  const textRef = useRef<Mesh>(null);
  const shaderRef = useRef<ShaderMaterial>(null);

  useFrame((_state, delta) => {
    if (textRef.current) {
      textRef.current.position.x -= delta * 0.5;
    }
    if (shaderRef.current) {
      shaderRef.current.uniforms.uTime.value += delta;
    }
  });

  return (
    <>
      <OrbitControls args={[camera, gl.domElement]} />

      <ambientLight intensity={0.5} />
      {/* <directionalLight position={[0, 10, 5]} intensity={1} /> */}
      <AsciiRenderer characters=" .:,-+*@" invert={false} />
      {/* <AnimatingObject /> */}
      <mesh ref={textRef}>
        <Center position={[0, 0, 0]}>
          <Text3D
            rotation={[0, 0.5, 0]}
            font={font as unknown as FontData}
            size={6}
            height={0.2}
            letterSpacing={0.1}
            curveSegments={6}
            bevelEnabled
            bevelSegments={4}
            bevelSize={0.05}
            bevelThickness={0.05}
          >
            <shaderMaterial
              ref={shaderRef}
              attach="material"
              uniforms={{
                uTime: { value: 0 },
              }}
              vertexShader={vertexShader}
              fragmentShader={fragmentShader}
            />
            methlab
            {/* <meshStandardMaterial attach="material" color="white" /> */}
          </Text3D>
        </Center>
      </mesh>
    </>
  );
};

// const AnimatingObject = () => {
//   const meshRef = useRef<Mesh | null>(null);

//   useFrame((_state, delta) => {
//     if (meshRef.current) {
//       meshRef.current.position.x += delta * 1;
//     }
//   });

//   return (
//     <>
//       <mesh
//         ref={meshRef}
//         position={[0, 0, 0]}
//         scale={[1.5, 1.5, 1.5]}
//         rotation={[0, 0.5, 0]}
//       >
//         <extrudeGeometry
//           args={[
//             new Shape().moveTo(0, 0).lineTo(2, 3).lineTo(4, 0).lineTo(0, 0),
//             {
//               steps: 5,
//               depth: 1,
//               bevelEnabled: true,
//               bevelThickness: 0.3,
//               bevelSize: 0.5,
//               bevelOffset: 0,
//               bevelSegments: 1,
//             },
//           ]}
//         />
//         <meshPhongMaterial color={0xf6c12a} shininess={70} />
//       </mesh>
//       <ambientLight intensity={0.55} color={0xffffff} />
//     </>
//   );
// };

// import React, { useRef, useEffect } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { AsciiRenderer } from "@react-three/drei";
// import * as THREE from "three";

// const BackgroundCanvas = () => {
//   const meshRef = useRef<THREE.Mesh>(null);
//   useFrame((state) => {
//     const t = state.clock.getElapsedTime();
//     if (meshRef.current === null) return;
//     meshRef.current.rotation.x = t / 2;
//     meshRef.current.rotation.y = t / 2;
//   });

//   return (
//     <>
//       {/* <AsciiRenderer invert /> */}
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[0, 10, 5]} intensity={1} />
//       <mesh ref={meshRef}>
//         <boxGeometry args={[2, 2, 2]} />
//         <meshStandardMaterial color="white" />
//       </mesh>
//     </>
//   );
// };

// const MaskCanvas = () => {
//   const canvasRef = useRef<any>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const context = canvas.getContext("2d");
//     context.font = "50px Arial";
//     context.fillStyle = "black";
//     context.textAlign = "center";

//     const drawText = () => {
//       context.clearRect(0, 0, canvas.width, canvas.height);
//       const scrollTop = window.scrollY;
//       context.fillText(
//         "Scroll to see effect",
//         canvas.width / 2,
//         canvas.height / 2 + scrollTop / 10
//       );
//     };

//     const handleResize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       drawText();
//     };

//     const handleScroll = () => {
//       drawText();
//     };

//     window.addEventListener("resize", handleResize);
//     window.addEventListener("scroll", handleScroll);

//     handleResize();
//     return () => {
//       window.removeEventListener("resize", handleResize);
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         pointerEvents: "none",
//         zIndex: 10,
//       }}
//     />
//   );
// };

// export const ASCIIEffect = () => {
//   return (
//     <>
//       {/* <div style={{ position: "absolute", width: "100%", height: "100%" }}> */}
//       {/* <Canvas
//         gl={{
//           antialias: true,
//           toneMapping: THREE.ACESFilmicToneMapping,
//           // outputColorSpace: THREE.SRGBColorSpace
//         }}
//         camera={{
//           fov: 45,
//           near: 0.1,
//           far: 200,
//           position: [3, 2, 6],
//         }}
//       > */}
//       <BackgroundCanvas />
//       {/* </Canvas> */}
//       {/* </div> */}
//       {/* <MaskCanvas /> */}
//     </>
//   );
// };
