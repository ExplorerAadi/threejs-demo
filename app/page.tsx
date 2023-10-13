"use client";

import { Canvas, ThreeEvent, useFrame, useThree } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import { useState, useEffect, useRef, ReactNode } from "react";
import * as THREE from "three";
import { MethlabModel } from "./MethlabModel";

export default function Page() {
  const [keysPressed, setKeysPressed] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setKeysPressed((keys) => ({ ...keys, [event.key]: true }));
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      setKeysPressed((keys) => ({ ...keys, [event.key]: false }));
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <div className="h-screen flex items-center justify-center w-screen">
      <Canvas camera={{ fov: 75 }} shadows>
        {/* <gridHelper /> */}
        <Experience>
          <Environment files="/artist_workshop_1k.hdr" background />
          <MethlabModel />
          <Model keysPressed={keysPressed} />
        </Experience>
      </Canvas>
    </div>
  );
}

function Model({ keysPressed }: { keysPressed: Record<string, boolean> }) {
  const [animation, setAnimation] = useState<"Idle" | "Running">("Idle");
  const group = useRef<any>(null);
  const controlsRef = useRef<typeof OrbitControls>();
  // @ts-expect-error
  const { nodes, materials, animations } = useGLTF("/woman.gltf");
  const { actions } = useAnimations(animations as any[], group);
  const camera = useThree((state) => state.camera);
  const walkDirection = new THREE.Vector3();
  const rotateAngle = new THREE.Vector3(1, 0, 0);
  // const rotateQuarternion = new THREE.Quaternion();
  const cameraTarget = new THREE.Vector3();

  useEffect(() => {
    actions[animation]?.reset().play();
    return () => {
      actions[animation]?.fadeOut(0.5);
    };
  }, [actions, animation]);

  const pressedKey = Object.keys(keysPressed).find((key) => keysPressed[key]);

  const updateCameraTarget = (moveX: number, moveZ: number) => {
    camera.position.x += moveX;
    camera.position.z += moveZ;

    cameraTarget.x = group.current.position.x;
    cameraTarget.y = group.current.position.y + 2;
    cameraTarget.z = group.current.position.z;
    if (controlsRef.current) {
      controlsRef.current.target = cameraTarget;
    }
  };

  useFrame((_state, delta) => {
    if (group.current) {
      if (pressedKey) {
        camera.getWorldDirection(walkDirection);
        walkDirection.y = 0;
        walkDirection.normalize();
        walkDirection.applyAxisAngle(rotateAngle, group.current.rotation.y);

        const moveX = walkDirection.x * delta;
        const moveZ = walkDirection.z * delta;
        updateCameraTarget(moveX, moveZ);

        switch (pressedKey) {
          case "ArrowRight":
            setAnimation("Running");
            group.current.rotation.y = -Math.PI / 2;
            group.current.position.x += delta;
            break;
          case "ArrowLeft":
            setAnimation("Running");
            group.current.rotation.y = Math.PI / 2;
            group.current.position.x -= 0.02;
            break;
          case "ArrowUp":
            setAnimation("Running");
            group.current.rotation.y = 0;
            group.current.position.z -= 0.02;
            break;
          case "ArrowDown":
            setAnimation("Running");
            group.current.rotation.y = -Math.PI;
            group.current.position.z += 0.02;
            break;
        }
      } else {
        setAnimation("Idle");
      }
    }
  });

  return (
    <group ref={group} dispose={null} name="modelContainer">
      <group name="Model">
        <group
          name="Armature"
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={0.01}
        >
          <OrbitControls ref={controlsRef} />
          <primitive object={nodes.mixamorigHips} />
          <group name="SM_Chr_Developer_Female_02">
            <skinnedMesh
              castShadow
              name="Mesh019"
              geometry={nodes.Mesh019.geometry}
              material={materials.Glasses}
              skeleton={nodes.Mesh019.skeleton}
            />
            <skinnedMesh
              castShadow
              name="Mesh019_1"
              geometry={nodes.Mesh019_1.geometry}
              material={materials.Eyes}
              skeleton={nodes.Mesh019_1.skeleton}
            />
            <skinnedMesh
              castShadow
              name="Mesh019_2"
              geometry={nodes.Mesh019_2.geometry}
              material={materials.Hair}
              skeleton={nodes.Mesh019_2.skeleton}
            />
            <skinnedMesh
              castShadow
              name="Mesh019_3"
              geometry={nodes.Mesh019_3.geometry}
              material={materials.Skin}
              skeleton={nodes.Mesh019_3.skeleton}
            />
            <skinnedMesh
              castShadow
              name="Mesh019_4"
              geometry={nodes.Mesh019_4.geometry}
              material={materials.Mouth}
              skeleton={nodes.Mesh019_4.skeleton}
            />
            <skinnedMesh
              castShadow
              name="Mesh019_5"
              geometry={nodes.Mesh019_5.geometry}
              material={materials.Shirt}
              skeleton={nodes.Mesh019_5.skeleton}
            />
            <skinnedMesh
              castShadow
              name="Mesh019_6"
              geometry={nodes.Mesh019_6.geometry}
              material={materials.Pants}
              skeleton={nodes.Mesh019_6.skeleton}
            />
            <skinnedMesh
              castShadow
              name="Mesh019_7"
              geometry={nodes.Mesh019_7.geometry}
              material={materials.Shoes}
              skeleton={nodes.Mesh019_7.skeleton}
            />
            <skinnedMesh
              castShadow
              name="Mesh019_8"
              geometry={nodes.Mesh019_8.geometry}
              material={materials.Sole}
              skeleton={nodes.Mesh019_8.skeleton}
            />
            <skinnedMesh
              castShadow
              name="Mesh019_9"
              geometry={nodes.Mesh019_9.geometry}
              material={materials.Laces}
              skeleton={nodes.Mesh019_9.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

function Experience({ children }: { children: ReactNode }) {
  const modelRef = useRef(null);
  const rotateAxis = new THREE.Vector3(0, 1, 0);
  const geometry = new THREE.PlaneGeometry(1, 2.5);
  const material = new THREE.MeshBasicMaterial({
    color: "#e0e0e0",
    side: THREE.DoubleSide,
  });
  const door = new THREE.Mesh(geometry, material).rotateOnAxis(
    rotateAxis,
    Math.PI / 2
  );
  const stand = new THREE.Mesh(geometry, material).rotateOnAxis(
    rotateAxis,
    Math.PI / 2
  );
  door.name = "door";
  stand.name = "stand";

  const handleDoorClick = (event: ThreeEvent<MouseEvent>) => {
    const modelScene = (modelRef.current as any).getObjectByName(
      "modelContainer"
    );
    const proximity = event.point.distanceTo(
      modelScene.position as THREE.Vector3
    );

    if (proximity < 1.2) {
      console.log("Door Clicked");
    }
  };

  const handleStandClick = (event: ThreeEvent<MouseEvent>) => {
    const modelScene = (modelRef.current as any).getObjectByName(
      "modelContainer"
    );
    const proximity = event.point.distanceTo(
      modelScene.position as THREE.Vector3
    );

    if (proximity < 1.2) {
      console.log("Wallet Clicked");
    }
  };

  return (
    <>
      <OrbitControls />
      <ambientLight />
      <directionalLight
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      {/* <group position={[5, 0, -6]} onClick={handleDoorClick}>
        <primitive object={door} />
      </group> */}
      <group position={[0, -1, 0]} ref={modelRef}>
        {children}
      </group>
      {/* <group position={[-5, 0, -6]} onClick={handleStandClick}>
        <primitive object={stand} />
      </group> */}
      <mesh
        rotation={[-0.5 * Math.PI, 0, 0]}
        position={[0, -1, 0]}
        receiveShadow
      >
        <planeGeometry args={[10, 10, 1, 1]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
    </>
  );
}

useGLTF.preload("/woman.gltf");

// TODO: Rotate character and camera as they move
// Put some objects and trigger actions based on proximity
