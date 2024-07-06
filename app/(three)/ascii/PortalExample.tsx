"use client";

import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import {
  IcosahedronGeometry,
  Mesh,
  PerspectiveCamera,
  Plane,
  Vector3,
  WebGLRenderTarget,
} from "three";
import * as CameraUtils from "three/examples/jsm/utils/CameraUtils.js";
import { OrbitControls } from "@react-three/drei";

export const PortalExample = () => {
  const { gl, scene, camera } = useThree();
  const smallSphereOneRef = useRef<Mesh>(null);
  const smallSphereTwoRef = useRef<Mesh>(null);
  const leftPortalRef = useRef<Mesh>(null);
  const rightPortalRef = useRef<Mesh>(null);
  const leftPortalTexture = useRef(new WebGLRenderTarget(256, 256));
  const rightPortalTexture = useRef(new WebGLRenderTarget(256, 256));
  const portalCameraRef = useRef(new PerspectiveCamera(45, 1.0, 0.1, 500.0));
  const reflectedPosition = useRef(new Vector3());
  const bottomLeftCorner = useRef(new Vector3());
  const bottomRightCorner = useRef(new Vector3());
  const topLeftCorner = useRef(new Vector3());

  useEffect(() => {
    camera.position.set(0, 75, 160);
  }, [camera]);

  // @ts-expect-error
  const renderPortal = (thisPortalMesh, otherPortalMesh, thisPortalTexture) => {
    const portalCamera = portalCameraRef.current;

    // Ensure the objects have the necessary functions
    if (!thisPortalMesh || !otherPortalMesh) return;

    thisPortalMesh.worldToLocal(
      reflectedPosition.current.copy(camera.position)
    );
    reflectedPosition.current.x *= -1.0;
    reflectedPosition.current.z *= -1.0;
    otherPortalMesh.localToWorld(reflectedPosition.current);
    portalCamera.position.copy(reflectedPosition.current);

    otherPortalMesh.localToWorld(
      bottomLeftCorner.current.set(50.05, -50.05, 0.0)
    );
    otherPortalMesh.localToWorld(
      bottomRightCorner.current.set(-50.05, -50.05, 0.0)
    );
    otherPortalMesh.localToWorld(topLeftCorner.current.set(50.05, 50.05, 0.0));
    CameraUtils.frameCorners(
      portalCamera,
      bottomLeftCorner.current,
      bottomRightCorner.current,
      topLeftCorner.current,
      false
    );

    thisPortalTexture.texture.colorSpace = gl.outputColorSpace;
    gl.setRenderTarget(thisPortalTexture);
    gl.state.buffers.depth.setMask(true);
    if (gl.autoClear === false) gl.clear();
    thisPortalMesh.visible = false;
    gl.render(scene, portalCamera);
    thisPortalMesh.visible = true;
  };

  useFrame(() => {
    const timerOne = Date.now() * 0.01;
    const timerTwo = timerOne + Math.PI * 10.0;

    if (!smallSphereOneRef.current || !smallSphereTwoRef.current) return;

    smallSphereOneRef.current.position.set(
      Math.cos(timerOne * 0.1) * 30,
      Math.abs(Math.cos(timerOne * 0.2)) * 20 + 5,
      Math.sin(timerOne * 0.1) * 30
    );
    smallSphereOneRef.current.rotation.y = Math.PI / 2 - timerOne * 0.1;
    smallSphereOneRef.current.rotation.z = timerOne * 0.8;

    smallSphereTwoRef.current.position.set(
      Math.cos(timerTwo * 0.1) * 30,
      Math.abs(Math.cos(timerTwo * 0.2)) * 20 + 5,
      Math.sin(timerTwo * 0.1) * 30
    );
    smallSphereTwoRef.current.rotation.y = Math.PI / 2 - timerTwo * 0.1;
    smallSphereTwoRef.current.rotation.z = timerTwo * 0.8;

    renderPortal(
      leftPortalRef.current,
      rightPortalRef.current,
      leftPortalTexture.current
    );
    renderPortal(
      rightPortalRef.current,
      leftPortalRef.current,
      rightPortalTexture.current
    );

    gl.setRenderTarget(null);
    gl.render(scene, camera);
  });

  return (
    <>
      <OrbitControls args={[camera, gl.domElement]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 5]} intensity={1} />
      <pointLight intensity={2.5} position={[0, 60, 0]} />
      <pointLight color={0x00ff00} intensity={0.5} position={[550, 50, 0]} />
      <pointLight color={0xff0000} intensity={0.5} position={[-550, 50, 0]} />
      <pointLight color={0xbbbbfe} intensity={0.5} position={[0, 50, 550]} />

      <mesh ref={smallSphereOneRef} geometry={new IcosahedronGeometry(5, 0)}>
        <meshPhongMaterial
          color={0xffffff}
          emissive={0x333333}
          flatShading
          clippingPlanes={[new Plane(new Vector3(0, 0, 1), 0.0)]}
          clipShadows
        />
      </mesh>
      <mesh ref={smallSphereTwoRef} geometry={new IcosahedronGeometry(5, 0)}>
        <meshPhongMaterial
          color={0xffffff}
          emissive={0x333333}
          flatShading
          clippingPlanes={[new Plane(new Vector3(0, 0, 1), 0.0)]}
          clipShadows
        />
      </mesh>

      <mesh
        ref={leftPortalRef}
        position={[-30, 20, 0]}
        scale={[0.35, 0.35, 0.35]}
      >
        <planeGeometry args={[100.1, 100.1]} />
        <meshBasicMaterial map={leftPortalTexture.current.texture} />
      </mesh>
      <mesh
        ref={rightPortalRef}
        position={[30, 20, 0]}
        scale={[0.35, 0.35, 0.35]}
      >
        <planeGeometry args={[100.1, 100.1]} />
        <meshBasicMaterial map={rightPortalTexture.current.texture} />
      </mesh>

      <mesh position={[0, 100, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[100.1, 100.1]} />
        <meshPhongMaterial color={0xffffff} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[100.1, 100.1]} />
        <meshPhongMaterial color={0xffffff} />
      </mesh>
      <mesh position={[0, 50, 50]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[100.1, 100.1]} />
        <meshPhongMaterial color={0x7f7fff} />
      </mesh>
      <mesh position={[0, 50, -15]}>
        <planeGeometry args={[100.1, 100.1]} />
        <meshPhongMaterial color={0xff7fff} />
      </mesh>
      <mesh position={[50, 50, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[100.1, 100.1]} />
        <meshPhongMaterial color={0x00ff00} />
      </mesh>
      <mesh position={[-50, 50, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[100.1, 100.1]} />
        <meshPhongMaterial color={0xff0000} />
      </mesh>

      <primitive object={portalCameraRef.current} />
    </>
  );
};
