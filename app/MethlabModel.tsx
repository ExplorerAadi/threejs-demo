import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cylinder001: THREE.Mesh;
    Plane009: THREE.Mesh;
    Plane010: THREE.Mesh;
    Cube020_1: THREE.Mesh;
    Cube020_2: THREE.Mesh;
    Cube016: THREE.Mesh;
    Cube018: THREE.Mesh;
    Cylinder013_1: THREE.Mesh;
    Cylinder013_2: THREE.Mesh;
    Cylinder022_1: THREE.Mesh;
    Cylinder022_2: THREE.Mesh;
    Cylinder015_1: THREE.Mesh;
    Cylinder015_2: THREE.Mesh;
    Cylinder018: THREE.Mesh;
    Cylinder033_1: THREE.Mesh;
    Cylinder033_2: THREE.Mesh;
    Cylinder021: THREE.Mesh;
    Cylinder022: THREE.Mesh;
    Plane018: THREE.Mesh;
    Cylinder004: THREE.Mesh;
    Cone002: THREE.Mesh;
    Cylinder023: THREE.Mesh;
    Cone003: THREE.Mesh;
    Cylinder024: THREE.Mesh;
    Cylinder028: THREE.Mesh;
    Cone004: THREE.Mesh;
    Cylinder029: THREE.Mesh;
    Cone005: THREE.Mesh;
    Cylinder030: THREE.Mesh;
    Cube011: THREE.Mesh;
    Cube023: THREE.Mesh;
    Cube025: THREE.Mesh;
    Cylinder031: THREE.Mesh;
    Plane004: THREE.Mesh;
    Plane005: THREE.Mesh;
    Cube005: THREE.Mesh;
    Plane008: THREE.Mesh;
    Plane012: THREE.Mesh;
    Cylinder003_1: THREE.Mesh;
    Cylinder003_2: THREE.Mesh;
    Cylinder003_3: THREE.Mesh;
    Cube012: THREE.Mesh;
    Cylinder002: THREE.Mesh;
    Cube013: THREE.Mesh;
    Cylinder005: THREE.Mesh;
    Cylinder006: THREE.Mesh;
    Cylinder008_1: THREE.Mesh;
    Cylinder008_2: THREE.Mesh;
    Cylinder008_3: THREE.Mesh;
    Torus001: THREE.Mesh;
    Torus002: THREE.Mesh;
    Cylinder008: THREE.Mesh;
    BezierCurve: THREE.Mesh;
    BezierCurve001: THREE.Mesh;
    Mesh004: THREE.Mesh;
    Mesh004_1: THREE.Mesh;
    Mesh004_2: THREE.Mesh;
    Cylinder025: THREE.Mesh;
    Torus003: THREE.Mesh;
    Cube024: THREE.Mesh;
    Cylinder026: THREE.Mesh;
    Cylinder027: THREE.Mesh;
    Plane019: THREE.Mesh;
    Cube029: THREE.Mesh;
    cardboard_box_01: THREE.Mesh;
    cardboard_box_01001: THREE.Mesh;
    cardboard_box_01002: THREE.Mesh;
    cardboard_box_01003: THREE.Mesh;
    Cube009: THREE.Mesh;
    Cube026: THREE.Mesh;
    Cube049: THREE.Mesh;
    Cube049_1: THREE.Mesh;
    Cube049_2: THREE.Mesh;
    Cube049_3: THREE.Mesh;
    Cube049_4: THREE.Mesh;
    Cube049_5: THREE.Mesh;
    Cube004: THREE.Mesh;
    Plane003: THREE.Mesh;
    Cube006: THREE.Mesh;
    Cube007: THREE.Mesh;
    Cube008: THREE.Mesh;
    Cube001: THREE.Mesh;
    Mesh931: THREE.Mesh;
    Mesh931_1: THREE.Mesh;
    Mesh802: THREE.Mesh;
    Mesh802_1: THREE.Mesh;
    Mesh803: THREE.Mesh;
    Mesh803_1: THREE.Mesh;
    Mesh804: THREE.Mesh;
    Mesh804_1: THREE.Mesh;
    Mesh016: THREE.Mesh;
    Mesh016_1: THREE.Mesh;
    Cylinder056: THREE.Mesh;
    Cylinder056_1: THREE.Mesh;
    security_camera_02_mount: THREE.Mesh;
    Plane020: THREE.Mesh;
    Plane021: THREE.Mesh;
    Plane023: THREE.Mesh;
    Plane024: THREE.Mesh;
    temp007: THREE.Mesh;
    tapa_motor012: THREE.Mesh;
    tapa_motor011: THREE.Mesh;
    Cube196: THREE.Mesh;
    Cube196_1: THREE.Mesh;
    Cube441: THREE.Mesh;
    Cube441_1: THREE.Mesh;
    soportes013: THREE.Mesh;
    soportes012: THREE.Mesh;
    patas007: THREE.Mesh;
    marco005: THREE.Mesh;
    manija012: THREE.Mesh;
    manija011: THREE.Mesh;
    Mesh_1: THREE.Mesh;
    Mesh_2: THREE.Mesh;
    Mesh_3: THREE.Mesh;
    Cylinder169: THREE.Mesh;
    Cylinder168: THREE.Mesh;
    Cylinder167: THREE.Mesh;
    Cylinder166: THREE.Mesh;
    Cylinder165: THREE.Mesh;
    Cylinder164: THREE.Mesh;
    Cylinder163: THREE.Mesh;
    Cylinder162: THREE.Mesh;
    Cylinder161: THREE.Mesh;
    Cylinder160: THREE.Mesh;
    Cube758: THREE.Mesh;
    Cube757: THREE.Mesh;
    Cube756: THREE.Mesh;
    Cube750: THREE.Mesh;
    Cube710: THREE.Mesh;
    burlete012: THREE.Mesh;
    burlete011: THREE.Mesh;
    bisagra025: THREE.Mesh;
    bisagra024: THREE.Mesh;
    bisagra023: THREE.Mesh;
    bisagra022: THREE.Mesh;
    Cube002: THREE.Mesh;
    Cube002_1: THREE.Mesh;
    Cube037: THREE.Mesh;
    Cube037_1: THREE.Mesh;
    Nuclear_Waste_Oil_Drum: THREE.Mesh;
    Flammable_Red_Oil_Drum: THREE.Mesh;
    Black_Oil_Drum: THREE.Mesh;
    Cube038: THREE.Mesh;
    Cube038_1: THREE.Mesh;
    Cube038_2: THREE.Mesh;
    Cube039: THREE.Mesh;
    Cube039_1: THREE.Mesh;
    Cube039_2: THREE.Mesh;
    Cylinder025_1: THREE.Mesh;
    Cylinder025_2: THREE.Mesh;
    Cylinder025_3: THREE.Mesh;
    Cylinder025_4: THREE.Mesh;
    Cylinder026_1: THREE.Mesh;
    Cylinder026_2: THREE.Mesh;
    Cylinder026_3: THREE.Mesh;
    Cylinder027_1: THREE.Mesh;
    Cylinder027_2: THREE.Mesh;
    Cylinder027_3: THREE.Mesh;
    Cylinder027_4: THREE.Mesh;
    Cylinder027_5: THREE.Mesh;
    Cylinder035_1: THREE.Mesh;
    Cylinder035_2: THREE.Mesh;
    Cylinder035_3: THREE.Mesh;
    Cylinder054: THREE.Mesh;
    Cylinder054_1: THREE.Mesh;
    Cylinder054_2: THREE.Mesh;
    Cylinder054_3: THREE.Mesh;
    Cylinder055: THREE.Mesh;
    Cylinder055_1: THREE.Mesh;
    Cylinder055_2: THREE.Mesh;
    modular_industrial_pipes_01_pipe02004: THREE.Mesh;
    Mesh015: THREE.Mesh;
    Mesh015_1: THREE.Mesh;
    Mesh017: THREE.Mesh;
    Mesh017_1: THREE.Mesh;
    wall_clamp_01002: THREE.Mesh;
    Stairs_Down_1: THREE.Mesh;
    Stairs_Down_2: THREE.Mesh;
    Stairs_Down_3: THREE.Mesh;
    Stairs_Down_4: THREE.Mesh;
    Stairs_Down_5: THREE.Mesh;
    Stairs_Down_6: THREE.Mesh;
    Stairs_Down_7: THREE.Mesh;
    Stairs_Down_8: THREE.Mesh;
    Stairs_Down_9: THREE.Mesh;
    Mesh018: THREE.Mesh;
    Mesh018_1: THREE.Mesh;
    Mesh019: THREE.Mesh;
    Mesh019_1: THREE.Mesh;
    Mesh019_2: THREE.Mesh;
    Mesh019_3: THREE.Mesh;
    Mesh019_4: THREE.Mesh;
    Mesh019_5: THREE.Mesh;
    Mesh019_6: THREE.Mesh;
    Mesh020: THREE.Mesh;
    Mesh020_1: THREE.Mesh;
    Mesh021: THREE.Mesh;
    Mesh021_1: THREE.Mesh;
    Mesh021_2: THREE.Mesh;
    Mesh021_3: THREE.Mesh;
    Mesh021_4: THREE.Mesh;
    Mesh022: THREE.Mesh;
    Mesh022_1: THREE.Mesh;
    Mesh022_2: THREE.Mesh;
    Mesh023: THREE.Mesh;
    Mesh023_1: THREE.Mesh;
    Mesh023_2: THREE.Mesh;
    Alarm: THREE.Mesh;
    Mesh052: THREE.Mesh;
    Mesh052_1: THREE.Mesh;
    Array_Boole_2: THREE.Mesh;
    Array_Boole_2_2: THREE.Mesh;
    Array_Boole_2_3: THREE.Mesh;
    Array_Boole_2_4: THREE.Mesh;
    Array_Boole_2001: THREE.Mesh;
    Array_Boole_2_2001: THREE.Mesh;
    Array_Boole_2_3001: THREE.Mesh;
    Array_Boole_2_4001: THREE.Mesh;
    center_tube_left001: THREE.Mesh;
    garden_gloves_01001: THREE.Mesh;
    multi_cleaner_bottle001: THREE.Mesh;
    plastic_bottle_gallon001: THREE.Mesh;
    multi_cleaner_5_litre_cap001: THREE.Mesh;
    pipe_wrench001: THREE.Mesh;
    Cylinder015: THREE.Mesh;
    Circle: THREE.Mesh;
    Torus011: THREE.Mesh;
    Torus012: THREE.Mesh;
    Torus013: THREE.Mesh;
    BezierCurve002: THREE.Mesh;
    BezierCurve003: THREE.Mesh;
    BezierCurve004: THREE.Mesh;
    BezierCurve005: THREE.Mesh;
    Cube020: THREE.Mesh;
    Cube019: THREE.Mesh;
    Cylinder009: THREE.Mesh;
    Torus006: THREE.Mesh;
    Cube014: THREE.Mesh;
    Cylinder010: THREE.Mesh;
    Cylinder011: THREE.Mesh;
    Plane011: THREE.Mesh;
    Cube017: THREE.Mesh;
    Mesh277: THREE.Mesh;
    Mesh277_1: THREE.Mesh;
    Mesh277_2: THREE.Mesh;
    Mesh277_3: THREE.Mesh;
    Mesh277_4: THREE.Mesh;
    Mesh277_5: THREE.Mesh;
    Mesh277_6: THREE.Mesh;
    Mesh277_7: THREE.Mesh;
    Mesh277_8: THREE.Mesh;
    Mesh277_9: THREE.Mesh;
    Mesh277_10: THREE.Mesh;
    Mesh277_11: THREE.Mesh;
    Mesh277_12: THREE.Mesh;
    Mesh277_13: THREE.Mesh;
    Mesh277_14: THREE.Mesh;
    Mesh277_15: THREE.Mesh;
    Mesh277_16: THREE.Mesh;
    Mesh277_17: THREE.Mesh;
  };
  materials: {
    ["Material.001"]: THREE.MeshStandardMaterial;
    ["fermentation_tank.002"]: THREE.MeshPhysicalMaterial;
    ["Material.005"]: THREE.MeshStandardMaterial;
    ["Genral room.003"]: THREE.MeshStandardMaterial;
    ["Genral room.001"]: THREE.MeshStandardMaterial;
    ["black metal"]: THREE.MeshStandardMaterial;
    ["swithc one"]: THREE.MeshPhysicalMaterial;
    ["swithc two.001"]: THREE.MeshPhysicalMaterial;
    ["swithc two"]: THREE.MeshPhysicalMaterial;
    ["Genral room"]: THREE.MeshStandardMaterial;
    Glass: THREE.MeshStandardMaterial;
    ["Material.008"]: THREE.MeshStandardMaterial;
    ["Genral room.002"]: THREE.MeshStandardMaterial;
    ["Material.009"]: THREE.MeshStandardMaterial;
    ["Material.010"]: THREE.MeshPhysicalMaterial;
    ["rubber wiresz"]: THREE.MeshStandardMaterial;
    ["metal things"]: THREE.MeshStandardMaterial;
    ["Material.019"]: THREE.MeshStandardMaterial;
    ["02 - Default"]: THREE.MeshPhysicalMaterial;
    ["01 - Default"]: THREE.MeshPhysicalMaterial;
    Material: THREE.MeshStandardMaterial;
    cardboard_box_01: THREE.MeshStandardMaterial;
    ["concrete_wall_007.001"]: THREE.MeshStandardMaterial;
    ["Material.030"]: THREE.MeshStandardMaterial;
    ["Material.028"]: THREE.MeshStandardMaterial;
    ["Material.027"]: THREE.MeshStandardMaterial;
    ["Material.031"]: THREE.MeshStandardMaterial;
    ["Material.032"]: THREE.MeshStandardMaterial;
    ["Material.033"]: THREE.MeshStandardMaterial;
    ["Material.035"]: THREE.MeshStandardMaterial;
    concrete_wall_007: THREE.MeshStandardMaterial;
    ["Material #35"]: THREE.MeshPhysicalMaterial;
    ["Material.036"]: THREE.MeshStandardMaterial;
    security_camera_02: THREE.MeshStandardMaterial;
    security_camera_02_glass: THREE.MeshStandardMaterial;
    FC_Plastic: THREE.MeshPhysicalMaterial;
    FC_Glass: THREE.MeshStandardMaterial;
    TEMPERATURA: THREE.MeshPhysicalMaterial;
    Nikon: THREE.MeshStandardMaterial;
    ["Glass.001"]: THREE.MeshPhysicalMaterial;
    Plastic: THREE.MeshPhysicalMaterial;
    ["Old Silver"]: THREE.MeshStandardMaterial;
    ["luz heladeras"]: THREE.MeshStandardMaterial;
    Rubber: THREE.MeshStandardMaterial;
    ["Brushed Aluminum 2"]: THREE.MeshPhysicalMaterial;
    Silver: THREE.MeshStandardMaterial;
    ["Material.012"]: THREE.MeshStandardMaterial;
    ["Material.013"]: THREE.MeshStandardMaterial;
    ["Material.014"]: THREE.MeshStandardMaterial;
    ["Material.015"]: THREE.MeshStandardMaterial;
    ["Material.016"]: THREE.MeshStandardMaterial;
    ["Material.018"]: THREE.MeshPhysicalMaterial;
    ["Material.020"]: THREE.MeshStandardMaterial;
    ["Material.023"]: THREE.MeshStandardMaterial;
    ["Degradable Metal"]: THREE.MeshPhysicalMaterial;
    ["Material.024"]: THREE.MeshStandardMaterial;
    bh0303_Madeira: THREE.MeshStandardMaterial;
    ["Material.025"]: THREE.MeshStandardMaterial;
    ["Metal 02"]: THREE.MeshPhysicalMaterial;
    modular_industrial_pipes_01_group01: THREE.MeshStandardMaterial;
    modular_industrial_pipes_01_group02: THREE.MeshStandardMaterial;
    ["Material.029"]: THREE.MeshPhysicalMaterial;
    ["Food Tray"]: THREE.MeshPhysicalMaterial;
    modular_pipes_plastic_01: THREE.MeshStandardMaterial;
    Stairs_geo1: THREE.MeshPhysicalMaterial;
    ["Material.026"]: THREE.MeshStandardMaterial;
    ["Material #302"]: THREE.MeshPhysicalMaterial;
    ["Material #559"]: THREE.MeshPhysicalMaterial;
    defaultMats: THREE.MeshPhysicalMaterial;
    ["Material #584"]: THREE.MeshPhysicalMaterial;
    ["Material #584.001"]: THREE.MeshPhysicalMaterial;
    ["Material #584.002"]: THREE.MeshPhysicalMaterial;
    ["Material #584.003"]: THREE.MeshPhysicalMaterial;
    ["Material #588"]: THREE.MeshPhysicalMaterial;
    ["Material #590"]: THREE.MeshPhysicalMaterial;
    ["Material #302sze"]: THREE.MeshPhysicalMaterial;
    ["Material #603"]: THREE.MeshPhysicalMaterial;
    ["Material #302sz"]: THREE.MeshPhysicalMaterial;
    ["Black shine metal"]: THREE.MeshPhysicalMaterial;
    ["Black shine metal.001"]: THREE.MeshPhysicalMaterial;
    ["Material #616"]: THREE.MeshPhysicalMaterial;
    ["Material #617"]: THREE.MeshPhysicalMaterial;
    defaultMat: THREE.MeshPhysicalMaterial;
    ["Material #571"]: THREE.MeshPhysicalMaterial;
    ["Material #572"]: THREE.MeshPhysicalMaterial;
    Fire_Alarm_Mat: THREE.MeshPhysicalMaterial;
    Box_Material: THREE.MeshPhysicalMaterial;
    Glass_Mat: THREE.MeshPhysicalMaterial;
    ["Metal 02.001"]: THREE.MeshPhysicalMaterial;
    garden_gloves_01: THREE.MeshStandardMaterial;
    multi_cleaner_bottle: THREE.MeshStandardMaterial;
    plastic_bottle_gallon: THREE.MeshStandardMaterial;
    multi_cleaner_5_litre: THREE.MeshStandardMaterial;
    pipe_wrench: THREE.MeshStandardMaterial;
    Offwhite: THREE.MeshStandardMaterial;
    ["Mat.1"]: THREE.MeshPhysicalMaterial;
    ["Mat.003"]: THREE.MeshPhysicalMaterial;
    Mat: THREE.MeshPhysicalMaterial;
    ["Mat.004"]: THREE.MeshPhysicalMaterial;
    ["Mat.005"]: THREE.MeshPhysicalMaterial;
    ["Mat.2"]: THREE.MeshPhysicalMaterial;
    ["Mat.007"]: THREE.MeshPhysicalMaterial;
    ["Mat.008"]: THREE.MeshPhysicalMaterial;
    ["Metal - Brushed.001"]: THREE.MeshStandardMaterial;
    ["Mat.002"]: THREE.MeshPhysicalMaterial;
    ["Mat.006"]: THREE.MeshPhysicalMaterial;
    ["Mat.009"]: THREE.MeshPhysicalMaterial;
    ["Mat.3"]: THREE.MeshPhysicalMaterial;
    ["Mat.010"]: THREE.MeshPhysicalMaterial;
    ["Mat.011"]: THREE.MeshPhysicalMaterial;
    ["Mat.4"]: THREE.MeshPhysicalMaterial;
  };
};

export function MethlabModel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/Methlabnoniso_textfull42_wala.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials["Material.001"]}
          position={[5.359, 0.413, -0.698]}
          scale={0.13}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane009.geometry}
          material={materials["fermentation_tank.002"]}
          position={[0.758, 2.895, 12.436]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
          scale={[0.627, 0.129, 0.246]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane010.geometry}
          material={materials["Material.005"]}
          position={[2.076, 0.174, 2.088]}
          scale={[15.483, 15.483, 9.922]}
        />
        <group
          position={[1.35, 1.192, 3.57]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.301, 0.594, 0.565]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube020_1.geometry}
            material={materials["Genral room.003"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube020_2.geometry}
            material={materials["Genral room.001"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube016.geometry}
          material={materials["black metal"]}
          position={[1.35, 0.429, 3.57]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.301, 0.168, 0.565]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube018.geometry}
          material={materials["Genral room.001"]}
          position={[1.374, 0.555, 3.278]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={-0.064}
        />
        <group
          position={[1.028, 1.702, 3.954]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={[0.057, 0.032, 0.057]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder013_1.geometry}
            material={materials["black metal"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder013_2.geometry}
            material={materials["swithc one"]}
          />
        </group>
        <group
          position={[1.055, 1.28, 3.498]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={[0.034, 0.019, 0.034]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder022_1.geometry}
            material={materials["swithc two.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder022_2.geometry}
            material={materials["swithc two.001"]}
          />
        </group>
        <group
          position={[1.055, 1.612, 3.275]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={[0.047, 0.026, 0.047]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder015_1.geometry}
            material={materials["swithc one"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder015_2.geometry}
            material={materials["swithc two"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018.geometry}
          material={materials["swithc one"]}
          position={[1.055, 1.541, 3.713]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={[0.03, 0.017, 0.03]}
        />
        <group
          position={[1.055, 1.28, 3.498]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={[0.034, 0.019, 0.034]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder033_1.geometry}
            material={materials["swithc two.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder033_2.geometry}
            material={materials["swithc two"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder021.geometry}
          material={materials["swithc one"]}
          position={[1.055, 0.853, 3.688]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={[0.034, 0.019, 0.034]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder022.geometry}
          material={materials["swithc one"]}
          position={[1.055, 1.28, 3.498]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={[0.034, 0.019, 0.034]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane018.geometry}
          material={materials["Genral room"]}
          position={[5.886, 3.218, 3.346]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.176, 0.485, 0.607]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004.geometry}
          material={materials.Glass}
          position={[5.837, 2.847, 2.936]}
          rotation={[Math.PI, -1.314, Math.PI]}
          scale={0.086}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cone002.geometry}
          material={materials.Glass}
          position={[5.845, 2.868, 3.178]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.107}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder023.geometry}
          material={materials.Glass}
          position={[5.837, 2.847, 3.671]}
          rotation={[0, -0.533, 0]}
          scale={0.086}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cone003.geometry}
          material={materials.Glass}
          position={[5.855, 2.868, 4.137]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.107}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder024.geometry}
          material={materials.Glass}
          position={[5.837, 2.847, 3.916]}
          rotation={[0, -0.533, 0]}
          scale={0.086}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder028.geometry}
          material={materials.Glass}
          position={[5.837, 2.847, -0.29]}
          rotation={[Math.PI, -1.314, Math.PI]}
          scale={0.086}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cone004.geometry}
          material={materials.Glass}
          position={[5.845, 2.868, -0.048]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.107}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder029.geometry}
          material={materials.Glass}
          position={[5.837, 2.847, 0.445]}
          rotation={[0, -0.533, 0]}
          scale={0.086}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cone005.geometry}
          material={materials.Glass}
          position={[5.855, 2.868, 0.911]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.107}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder030.geometry}
          material={materials.Glass}
          position={[5.837, 2.847, 0.689]}
          rotation={[0, -0.533, 0]}
          scale={0.086}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011.geometry}
          material={materials["fermentation_tank.002"]}
          position={[5.252, 1.158, -0.554]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.833, 0.149, 0.409]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube023.geometry}
          material={materials["Material.008"]}
          position={[5.988, 2.143, 0.627]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.095, -0.29, -0.18]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube025.geometry}
          material={materials["Genral room.002"]}
          position={[5.746, 0.367, -0.689]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.036, 0.111, 0.09]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder031.geometry}
          material={materials["fermentation_tank.002"]}
          position={[5.764, 0.229, -0.684]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.036}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004.geometry}
          material={materials["Genral room"]}
          position={[5.886, 3.218, 0.143]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[0.176, 0.485, 0.607]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005.geometry}
          material={materials["fermentation_tank.002"]}
          position={[2.105, 3.145, -2.104]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.627, 0.129, 0.246]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials["Material.008"]}
          position={[2.357, 2.143, -2.047]}
          rotation={[0, -1.571, 0]}
          scale={[-0.138, -0.492, -0.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008.geometry}
          material={materials["Genral room"]}
          position={[-1.882, 2.29, 3.515]}
          rotation={[0, 0.002, 0]}
          scale={[0.176, 0.485, 0.607]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane012.geometry}
          material={materials["Genral room"]}
          position={[-1.882, 1.766, 3.515]}
          rotation={[0, 0.002, 0]}
          scale={[0.176, 0.485, 0.607]}
        />
        <group
          position={[2.613, 0.197, 0.944]}
          rotation={[Math.PI / 2, 0, -3.135]}
          scale={[0.079, 0.034, 0.088]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003_1.geometry}
            material={materials["fermentation_tank.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003_2.geometry}
            material={materials["Material.009"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003_3.geometry}
            material={materials["Material.010"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012.geometry}
          material={materials["black metal"]}
          position={[1.696, 0.496, 0.897]}
          rotation={[-Math.PI, 0.007, -Math.PI]}
          scale={[0.347, 0.174, 0.431]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002.geometry}
          material={materials["rubber wiresz"]}
          position={[2.032, 0.26, 1.311]}
          rotation={[Math.PI, -0.001, Math.PI / 2]}
          scale={[0.053, 0.02, 0.053]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013.geometry}
          material={materials["Genral room"]}
          position={[1.3, 0.558, 1.19]}
          rotation={[-Math.PI, 0.007, -Math.PI]}
          scale={[0.028, 0.108, 0.108]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005.geometry}
          material={materials["swithc two"]}
          position={[1.27, 0.483, 1.233]}
          rotation={[-Math.PI, 0.007, Math.PI / 2]}
          scale={[0.016, 0.009, 0.016]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006.geometry}
          material={materials["swithc one"]}
          position={[1.271, 0.484, 1.138]}
          rotation={[-Math.PI, 0.007, Math.PI / 2]}
          scale={[0.016, 0.009, 0.016]}
        />
        <group
          position={[1.454, 0.911, 0.862]}
          rotation={[1.828, 0.002, -3.135]}
          scale={[0.143, 0.467, 0.143]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder008_1.geometry}
            material={materials["fermentation_tank.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder008_2.geometry}
            material={materials["metal things"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder008_3.geometry}
            material={materials["Material.019"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus001.geometry}
          material={materials["fermentation_tank.002"]}
          position={[1.967, 0.764, 0.52]}
          rotation={[Math.PI / 2, 0, -3.135]}
          scale={[0.878, 0.994, 0.994]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus002.geometry}
          material={materials["fermentation_tank.002"]}
          position={[1.962, 0.43, 1.292]}
          rotation={[-Math.PI / 2, 0, 3.135]}
          scale={0.994}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008.geometry}
          material={materials["fermentation_tank.002"]}
          position={[1.673, 1.702, 0.581]}
          rotation={[-3.026, 0.007, 3.141]}
          scale={0.032}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve.geometry}
          material={materials["rubber wiresz"]}
          position={[2.943, 0.037, 0.953]}
          rotation={[-Math.PI, 0.007, -Math.PI]}
          scale={0.994}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve001.geometry}
          material={materials["rubber wiresz"]}
          position={[2.943, 0.037, 0.909]}
          rotation={[-Math.PI, 0.007, -Math.PI]}
          scale={0.994}
        />
        <group
          position={[5.516, 1.685, 7.645]}
          rotation={[0, 1.538, 0]}
          scale={[0.018, 0.012, 0.018]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh004.geometry}
            material={materials["02 - Default"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh004_1.geometry}
            material={materials["01 - Default"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh004_2.geometry}
            material={materials.Material}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder025.geometry}
          material={materials["fermentation_tank.002"]}
          position={[1.869, 0.573, 5.508]}
          rotation={[0, 1.534, 0]}
          scale={0.557}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus003.geometry}
          material={materials["fermentation_tank.002"]}
          position={[1.869, 0.123, 5.508]}
          rotation={[-Math.PI, 0.036, -Math.PI]}
          scale={0.834}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024.geometry}
          material={materials["fermentation_tank.002"]}
          position={[2.252, 1.19, 5.571]}
          rotation={[0, -0.006, 0]}
          scale={[0.024, 0.09, 0.09]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder026.geometry}
          material={materials["fermentation_tank.002"]}
          position={[1.564, 1.162, 5.606]}
          rotation={[0, 1.534, 0]}
          scale={0.071}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder027.geometry}
          material={materials["black metal"]}
          position={[1.866, 1.225, 5.596]}
          rotation={[0, 1.534, 0]}
          scale={[0.073, 0.1, 0.073]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane019.geometry}
          material={materials["fermentation_tank.002"]}
          position={[1.824, 1.1, 5.439]}
          rotation={[0, 1.534, 0]}
          scale={[0.098, 0.333, 0.333]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube029.geometry}
          material={materials["fermentation_tank.002"]}
          position={[2.123, 0.715, 5.258]}
          rotation={[0, 1.534, 0]}
          scale={0.043}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cardboard_box_01.geometry}
          material={materials.cardboard_box_01}
          position={[-1.344, 0.455, 5.343]}
          rotation={[Math.PI, -0.34, Math.PI]}
          scale={0.942}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cardboard_box_01001.geometry}
          material={materials.cardboard_box_01}
          position={[-1.847, 0.455, 5.277]}
          rotation={[Math.PI, -0.34, Math.PI]}
          scale={0.942}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cardboard_box_01002.geometry}
          material={materials.cardboard_box_01}
          position={[-1.556, 0.455, 4.831]}
          rotation={[Math.PI, -0.34, Math.PI]}
          scale={0.942}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cardboard_box_01003.geometry}
          material={materials.cardboard_box_01}
          position={[-1.556, 0.764, 5.175]}
          rotation={[Math.PI, -1.021, Math.PI]}
          scale={[0.919, 0.942, 0.825]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009.geometry}
          material={materials["concrete_wall_007.001"]}
          position={[0.816, 1.243, -1.902]}
          scale={[0.677, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube026.geometry}
          material={materials["fermentation_tank.002"]}
          position={[4.685, 1.429, -2.044]}
          scale={[0.411, 0.02, 0.02]}
        />
        <group
          position={[-0.968, 0.921, 8.353]}
          rotation={[Math.PI, -0.271, Math.PI]}
          scale={[0.055, 0.003, 0.704]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube049.geometry}
            material={materials["Material.030"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube049_1.geometry}
            material={materials["Material.028"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube049_2.geometry}
            material={materials["Material.027"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube049_3.geometry}
            material={materials["Material.031"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube049_4.geometry}
            material={materials["Material.032"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube049_5.geometry}
            material={materials["Material.033"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials["concrete_wall_007.001"]}
          position={[4.949, 3.738, 3.806]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003.geometry}
          material={materials["Material.035"]}
          position={[5.716, 3.749, 2.364]}
          rotation={[0, 0, Math.PI / 2]}
          scale={[-0.018, -0.078, -7.602]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={materials.concrete_wall_007}
          position={[0, 0, 1.785]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <group
          position={[0.411, 0, -0.151]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.967}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={materials["fermentation_tank.002"]}
          position={[-1.007, 1.429, -2.044]}
          scale={[0.411, 0.02, 0.02]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={materials["fermentation_tank.002"]}
          position={[-1.012, 0.419, -2.035]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[-0.392, -0.003, -0.116]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials["fermentation_tank.002"]}
          position={[4.667, 0.419, -2.035]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[-0.392, -0.003, -0.116]}
        />
        <group
          position={[1.512, 2.412, 7.513]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[2.932, 2.412, 7.513]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[6.038, 3.313, 0.646]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
          scale={0.001}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh931.geometry}
            material={materials["Material #35"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh931_1.geometry}
            material={materials["Material.036"]}
          />
        </group>
        <group
          position={[6.038, 3.313, 3.892]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
          scale={0.001}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh802.geometry}
            material={materials["Material #35"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh802_1.geometry}
            material={materials["Material.036"]}
          />
        </group>
        <group
          position={[0.325, 3.313, 12.364]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.001}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh803.geometry}
            material={materials["Material #35"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh803_1.geometry}
            material={materials["Material.036"]}
          />
        </group>
        <group
          position={[6.038, 3.313, 9.995]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
          scale={0.001}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh804.geometry}
            material={materials["Material #35"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh804_1.geometry}
            material={materials["Material.036"]}
          />
        </group>
        <group
          position={[-2.035, 2.918, 3.125]}
          rotation={[Math.PI / 2, 0, -0.002]}
          scale={0.001}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh016.geometry}
            material={materials["Material #35"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh016_1.geometry}
            material={materials["Material.036"]}
          />
        </group>
        <group
          position={[0.709, 4.281, 12.196]}
          rotation={[2.96, 0, Math.PI]}
          scale={1.274}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder056.geometry}
            material={materials.security_camera_02}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder056_1.geometry}
            material={materials.security_camera_02_glass}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.security_camera_02_mount.geometry}
          material={materials.security_camera_02}
          position={[0.709, 4.245, 12.39]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={1.274}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane020.geometry}
          material={materials.FC_Plastic}
          position={[1.895, 1.152, 5.843]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane021.geometry}
          material={materials.FC_Glass}
          position={[1.895, 1.149, 5.843]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <group
          position={[1.895, 1.091, 5.843]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane023.geometry}
          material={materials.FC_Plastic}
          position={[1.895, 1.091, 5.843]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane024.geometry}
          material={materials.FC_Glass}
          position={[1.895, 1.091, 5.843]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <group
          position={[1.895, 1.091, 5.843]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={0.104}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.temp007.geometry}
          material={materials.TEMPERATURA}
          position={[0.755, 0.317, 12.64]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tapa_motor012.geometry}
          material={materials.Nikon}
          position={[0.755, 0.317, 12.64]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tapa_motor011.geometry}
          material={materials.Nikon}
          position={[0.755, 0.317, 12.64]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <group
          position={[0.738, 0.317, 12.64]}
          rotation={[0, 0, -Math.PI]}
          scale={-1}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube196.geometry}
            material={materials.Nikon}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube196_1.geometry}
            material={materials["Glass.001"]}
          />
        </group>
        <group
          position={[0.755, 0.317, 12.64]}
          rotation={[Math.PI, 0, Math.PI]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube441.geometry}
            material={materials.Nikon}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube441_1.geometry}
            material={materials["Glass.001"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.soportes013.geometry}
          material={nodes.soportes013.material}
          position={[0.755, 0.317, 12.64]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.soportes012.geometry}
          material={nodes.soportes012.material}
          position={[0.755, 0.317, 12.64]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.patas007.geometry}
          material={nodes.patas007.material}
          position={[0.747, 0.332, 12.65]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.marco005.geometry}
          material={materials.Plastic}
          position={[0.755, 0.317, 12.64]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.manija012.geometry}
          material={materials.Nikon}
          position={[0.755, 0.317, 12.64]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.manija011.geometry}
          material={materials.Nikon}
          position={[0.755, 0.317, 12.64]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <group position={[0.756, 0.317, 12.649]} rotation={[0, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_1.geometry}
            material={materials.Plastic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_2.geometry}
            material={materials["Old Silver"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_3.geometry}
            material={materials["luz heladeras"]}
          />
        </group>
        <group
          position={[6.323, 0.317, 6.455]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder169.geometry}
          material={materials.Plastic}
          position={[0.755, 0.317, 12.64]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder168.geometry}
          material={materials.Plastic}
          position={[0.755, 0.317, 12.64]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder167.geometry}
          material={materials.Plastic}
          position={[0.755, 0.317, 12.64]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder166.geometry}
          material={materials.Plastic}
          position={[0.755, 0.317, 12.64]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder165.geometry}
          material={materials.Plastic}
          position={[0.755, 0.317, 12.64]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder164.geometry}
          material={materials.Plastic}
          position={[0.755, 0.317, 12.64]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder163.geometry}
          material={materials.Plastic}
          position={[0.755, 0.317, 12.64]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder162.geometry}
          material={materials.Plastic}
          position={[0.755, 0.317, 12.64]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder161.geometry}
          material={materials.Plastic}
          position={[0.755, 0.317, 12.64]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder160.geometry}
          material={materials.Plastic}
          position={[0.755, 0.317, 12.64]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube758.geometry}
          material={materials.Plastic}
          position={[0.755, 0.317, 12.64]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube757.geometry}
          material={materials.Plastic}
          position={[0.755, 0.317, 12.64]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube756.geometry}
          material={materials.Plastic}
          position={[0.755, 0.317, 12.64]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube750.geometry}
          material={materials.Plastic}
          position={[0.755, 0.317, 12.64]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube710.geometry}
          material={materials.Plastic}
          position={[0.755, 0.317, 12.64]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.burlete012.geometry}
          material={materials.Rubber}
          position={[0.755, 0.317, 12.64]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.burlete011.geometry}
          material={materials.Rubber}
          position={[0.755, 0.317, 12.64]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bisagra025.geometry}
          material={materials["Brushed Aluminum 2"]}
          position={[0.755, 0.317, 12.64]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bisagra024.geometry}
          material={materials["Brushed Aluminum 2"]}
          position={[0.755, 0.317, 12.64]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bisagra023.geometry}
          material={materials["Brushed Aluminum 2"]}
          position={[6.314, 0.317, 6.456]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bisagra022.geometry}
          material={materials["Brushed Aluminum 2"]}
          position={[0.755, 0.317, 12.64]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <group
          position={[5.666, 0.562, 5.382]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <group position={[5.65, 0.578, 5.382]} rotation={[-Math.PI, -1.571, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002.geometry}
            material={materials.Silver}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002_1.geometry}
            material={materials["Material.012"]}
          />
        </group>
        <group
          position={[5.666, 0.562, 7.602]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <group position={[5.65, 0.578, 7.602]} rotation={[-Math.PI, -1.571, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube037.geometry}
            material={materials.Silver}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube037_1.geometry}
            material={materials["Material.012"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Nuclear_Waste_Oil_Drum.geometry}
          material={materials["Material.013"]}
          position={[-1.779, 0.263, 6.501]}
          rotation={[0, 0.34, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Flammable_Red_Oil_Drum.geometry}
          material={materials["Material.014"]}
          position={[-1.686, 0.262, 5.814]}
          rotation={[0, 0.34, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Black_Oil_Drum.geometry}
          material={materials["Material.015"]}
          position={[-1.168, 0.255, 6.249]}
          rotation={[0, 0.34, 0]}
        />
        <group position={[5.546, 0.256, 3.62]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube038.geometry}
            material={materials["Material.016"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube038_1.geometry}
            material={materials["Material.018"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube038_2.geometry}
            material={materials["Material.020"]}
          />
        </group>
        <group position={[4.647, 0.256, 2.054]} rotation={[0, -1.571, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube039.geometry}
            material={materials["Material.016"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube039_1.geometry}
            material={materials["Material.018"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube039_2.geometry}
            material={materials["Material.020"]}
          />
        </group>
        <group position={[4.663, 0.301, -2.109]} />
        <group position={[5.081, 1.315, -2.037]} rotation={[0, -1.571, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder025_1.geometry}
            material={materials["Material.023"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder025_2.geometry}
            material={materials["Degradable Metal"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder025_3.geometry}
            material={materials["Material.024"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder025_4.geometry}
            material={materials.bh0303_Madeira}
          />
        </group>
        <group
          position={[4.268, 1.204, -2.038]}
          rotation={[-Math.PI, -1.571, 0]}
          scale={-1}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder026_1.geometry}
            material={materials["Material.023"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder026_2.geometry}
            material={materials["Material.025"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder026_3.geometry}
            material={materials.bh0303_Madeira}
          />
        </group>
        <group position={[1.262, 1.315, -4.172]} rotation={[0, -1.571, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder027_1.geometry}
            material={materials["Material.023"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder027_2.geometry}
            material={materials["Metal 02"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder027_3.geometry}
            material={materials["Degradable Metal"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder027_4.geometry}
            material={materials["Material.024"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder027_5.geometry}
            material={materials.bh0303_Madeira}
          />
        </group>
        <group
          position={[0.449, 1.204, -4.173]}
          rotation={[-Math.PI, -1.571, 0]}
          scale={-1}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder035_1.geometry}
            material={materials["Material.023"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder035_2.geometry}
            material={materials["Material.025"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder035_3.geometry}
            material={materials.bh0303_Madeira}
          />
        </group>
        <group position={[-0.611, 1.315, -2.037]} rotation={[0, -1.571, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder054.geometry}
            material={materials["Material.023"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder054_1.geometry}
            material={materials["Degradable Metal"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder054_2.geometry}
            material={materials["Material.024"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder054_3.geometry}
            material={materials.bh0303_Madeira}
          />
        </group>
        <group
          position={[-1.424, 1.204, -2.038]}
          rotation={[-Math.PI, -1.571, 0]}
          scale={-1}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder055.geometry}
            material={materials["Material.023"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder055_1.geometry}
            material={materials["Material.025"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder055_2.geometry}
            material={materials.bh0303_Madeira}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.modular_industrial_pipes_01_pipe02004.geometry}
          material={materials.modular_industrial_pipes_01_group01}
          position={[5.469, 5.462, -1.659]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={0.675}
        />
        <group
          position={[5.663, 3.895, -1.294]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={0.675}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh015.geometry}
            material={materials.modular_industrial_pipes_01_group01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh015_1.geometry}
            material={materials.modular_industrial_pipes_01_group02}
          />
        </group>
        <group
          position={[1.055, 2.111, 12.619]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
          scale={0.01}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh017.geometry}
            material={materials["Material.029"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh017_1.geometry}
            material={materials["Food Tray"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_clamp_01002.geometry}
          material={materials.modular_pipes_plastic_01}
          position={[3.07, 3.281, -2.03]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={1.578}
        />
        <group position={[0, 4.239, 0]} scale={0.01} />
        <group
          position={[-1.054, 4.442, 9.992]}
          rotation={[0, 0.891, -Math.PI]}
          scale={-0.009}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Stairs_Down_1.geometry}
            material={materials.Stairs_geo1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Stairs_Down_2.geometry}
            material={materials.Stairs_geo1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Stairs_Down_3.geometry}
            material={materials["Degradable Metal"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Stairs_Down_4.geometry}
            material={materials["Material.024"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Stairs_Down_5.geometry}
            material={materials["Brushed Aluminum 2"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Stairs_Down_6.geometry}
            material={materials["Material.025"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Stairs_Down_7.geometry}
            material={materials.Stairs_geo1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Stairs_Down_8.geometry}
            material={materials.Stairs_geo1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Stairs_Down_9.geometry}
            material={materials["Material.026"]}
          />
        </group>
        <group
          position={[0.763, 6.135, 4.838]}
          rotation={[0, 0, Math.PI]}
          scale={0.008}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh018.geometry}
            material={materials["Material #302"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh018_1.geometry}
            material={materials["Material #559"]}
          />
        </group>
        <group
          position={[2.594, 6.438, 3.6]}
          rotation={[0, 0, Math.PI]}
          scale={0.008}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh019.geometry}
            material={materials.defaultMats}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh019_1.geometry}
            material={materials["Material #584"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh019_2.geometry}
            material={materials["Material #584.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh019_3.geometry}
            material={materials["Material #584.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh019_4.geometry}
            material={materials["Material #584.003"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh019_5.geometry}
            material={materials["Material #588"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh019_6.geometry}
            material={materials["Material #590"]}
          />
        </group>
        <group
          position={[1.347, 6.027, 10.04]}
          rotation={[0, 0, Math.PI]}
          scale={0.008}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh020.geometry}
            material={materials["Material #302sze"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh020_1.geometry}
            material={materials["Material #603"]}
          />
        </group>
        <group
          position={[0.199, 6.161, 4.639]}
          rotation={[0, 0, Math.PI]}
          scale={0.008}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh021.geometry}
            material={materials["Material #302sz"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh021_1.geometry}
            material={materials["Black shine metal"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh021_2.geometry}
            material={materials["Black shine metal.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh021_3.geometry}
            material={materials["Material #616"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh021_4.geometry}
            material={materials["Material #617"]}
          />
        </group>
        <group
          position={[-0.699, 6.196, 3.643]}
          rotation={[0, 0, Math.PI]}
          scale={0.008}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh022.geometry}
            material={materials.defaultMat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh022_1.geometry}
            material={materials["Material #571"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh022_2.geometry}
            material={materials["Material #572"]}
          />
        </group>
        <group
          position={[-0.699, 6.196, 8.173]}
          rotation={[0, 0, Math.PI]}
          scale={0.008}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh023.geometry}
            material={materials.defaultMat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh023_1.geometry}
            material={materials["Material #571"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh023_2.geometry}
            material={materials["Material #572"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Alarm.geometry}
          material={materials.Fire_Alarm_Mat}
          position={[3.675, 1.675, -2.021]}
          scale={0.011}
        />
        <group position={[2.268, 0.227, 0]} scale={0.011} />
        <group
          position={[5.409, 2.456, -1.405]}
          rotation={[0, -1.016, 0]}
          scale={0.012}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh052.geometry}
            material={materials.Box_Material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh052_1.geometry}
            material={materials.Glass_Mat}
          />
        </group>
        <group position={[3.047, 0.575, 0.118]} scale={0.012} />
        <group position={[3.047, 0.227, 0]} scale={0.012} />
        <group
          position={[1.204, 1.075, 7.983]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Array_Boole_2.geometry}
          material={materials["Metal 02.001"]}
          position={[1.232, 1.225, 6.684]}
          rotation={[0, -0.785, Math.PI / 2]}
          scale={0.004}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Array_Boole_2_2.geometry}
          material={materials["Metal 02.001"]}
          position={[1.203, 1.225, 6.74]}
          rotation={[0, -0.624, Math.PI / 2]}
          scale={0.004}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Array_Boole_2_3.geometry}
          material={materials["Metal 02.001"]}
          position={[1.314, 1.225, 6.588]}
          rotation={[0, -1.106, Math.PI / 2]}
          scale={0.004}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Array_Boole_2_4.geometry}
          material={materials["Metal 02.001"]}
          position={[1.269, 1.225, 6.633]}
          rotation={[0, -0.945, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[1.577, 1.41, 6.886]}
          rotation={[Math.PI / 2, 0, -2.996]}
          scale={0.004}
        />
        <group
          position={[2.624, 1.075, 7.983]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Array_Boole_2001.geometry}
          material={materials["Metal 02.001"]}
          position={[2.652, 1.225, 6.684]}
          rotation={[0, -0.785, Math.PI / 2]}
          scale={0.004}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Array_Boole_2_2001.geometry}
          material={materials["Metal 02.001"]}
          position={[2.623, 1.225, 6.74]}
          rotation={[0, -0.624, Math.PI / 2]}
          scale={0.004}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Array_Boole_2_3001.geometry}
          material={materials["Metal 02.001"]}
          position={[2.734, 1.225, 6.588]}
          rotation={[0, -1.106, Math.PI / 2]}
          scale={0.004}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Array_Boole_2_4001.geometry}
          material={materials["Metal 02.001"]}
          position={[2.689, 1.225, 6.633]}
          rotation={[0, -0.945, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[2.997, 1.41, 6.886]}
          rotation={[Math.PI / 2, 0, -2.996]}
          scale={0.004}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.center_tube_left001.geometry}
          material={materials["fermentation_tank.002"]}
          position={[2, 0.26, 10]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.007}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.garden_gloves_01001.geometry}
          material={materials.garden_gloves_01}
          position={[-1.871, 1.313, 3.163]}
          rotation={[Math.PI, -0.002, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.multi_cleaner_bottle001.geometry}
          material={materials.multi_cleaner_bottle}
          position={[-1.976, 1.305, 3.956]}
          rotation={[Math.PI, -0.002, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.plastic_bottle_gallon001.geometry}
          material={materials.plastic_bottle_gallon}
          position={[-1.904, 1.834, 3.02]}
          rotation={[-Math.PI, 1.029, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.multi_cleaner_5_litre_cap001.geometry}
          material={materials.multi_cleaner_5_litre}
          position={[-2.03, 2.105, 3.711]}
          rotation={[-Math.PI, 0.693, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pipe_wrench001.geometry}
          material={materials.pipe_wrench}
          position={[-1.777, 1.32, 2.923]}
          rotation={[-1.54, -0.019, -0.549]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder015.geometry}
          material={materials["fermentation_tank.002"]}
          position={[2.743, 1.334, 3.908]}
          rotation={[Math.PI, -0.224, Math.PI]}
          scale={0.641}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle.geometry}
          material={materials["Genral room"]}
          position={[2.691, 2.177, 3.516]}
          rotation={[2.698, -0.203, 3.046]}
          scale={0.151}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus011.geometry}
          material={materials["fermentation_tank.002"]}
          position={[2.756, 2.399, 3.993]}
          rotation={[Math.PI / 2, 0, 1.362]}
          scale={[1.161, 3.299, 1.181]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus012.geometry}
          material={materials["fermentation_tank.002"]}
          position={[2.406, 2.198, 4.118]}
          rotation={[Math.PI / 2, 0, 1.762]}
          scale={[0.818, 2.385, 0.829]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus013.geometry}
          material={materials["fermentation_tank.002"]}
          position={[3.095, 2.198, 3.936]}
          rotation={[Math.PI / 2, 0, 0.838]}
          scale={[0.829, 2.868, 0.829]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve002.geometry}
          material={materials["rubber wiresz"]}
          position={[2.453, -0.04, 3.784]}
          rotation={[Math.PI, -0.224, -3.026]}
          scale={[1.49, 0.916, 1.49]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve003.geometry}
          material={materials["rubber wiresz"]}
          position={[2.464, -0.045, 3.836]}
          rotation={[Math.PI, -0.224, -3.026]}
          scale={[1.49, 0.916, 1.49]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve004.geometry}
          material={materials["rubber wiresz"]}
          position={[2.476, -0.045, 3.887]}
          rotation={[Math.PI, -0.224, -3.026]}
          scale={[1.49, 0.916, 1.49]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve005.geometry}
          material={materials["rubber wiresz"]}
          position={[2.488, -0.045, 3.939]}
          rotation={[Math.PI, -0.224, -3.026]}
          scale={[1.49, 0.916, 1.49]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube020.geometry}
          material={materials["fermentation_tank.002"]}
          position={[2.125, 1.487, 4.044]}
          rotation={[Math.PI, -0.224, Math.PI]}
          scale={[0.042, 0.162, 0.162]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019.geometry}
          material={materials.Offwhite}
          position={[2.433, 0.627, 4.274]}
          rotation={[Math.PI, -0.224, Math.PI]}
          scale={0.041}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder009.geometry}
          material={materials["fermentation_tank.002"]}
          position={[2.467, 0.584, 2.047]}
          rotation={[0, 1.534, 0]}
          scale={0.557}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus006.geometry}
          material={materials["fermentation_tank.002"]}
          position={[2.467, 0.134, 2.047]}
          rotation={[-Math.PI, 0.036, -Math.PI]}
          scale={0.834}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube014.geometry}
          material={materials["fermentation_tank.002"]}
          position={[2.85, 1.201, 2.11]}
          rotation={[0, -0.006, 0]}
          scale={[0.024, 0.09, 0.09]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder010.geometry}
          material={materials["fermentation_tank.002"]}
          position={[2.162, 1.173, 2.145]}
          rotation={[0, 1.534, 0]}
          scale={0.071}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder011.geometry}
          material={materials["black metal"]}
          position={[2.464, 1.236, 2.136]}
          rotation={[0, 1.534, 0]}
          scale={[0.073, 0.1, 0.073]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane011.geometry}
          material={materials["fermentation_tank.002"]}
          position={[2.422, 1.111, 1.978]}
          rotation={[0, 1.534, 0]}
          scale={[0.098, 0.333, 0.333]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube017.geometry}
          material={materials["fermentation_tank.002"]}
          position={[2.721, 0.699, 1.797]}
          rotation={[0, 1.534, 0]}
          scale={0.043}
        />
        <group
          position={[1.577, 0.887, 7.224]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[1.456, 0.74, 6.408]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[1.497, 0.74, 6.408]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[1.537, 0.74, 6.408]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[1.577, 0.74, 6.408]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[1.618, 0.74, 6.408]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[1.658, 0.74, 6.408]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[1.698, 0.74, 6.408]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[1.456, 0.74, 6.408]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[1.576, 0.356, 7.417]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[1.082, 1.145, 7.057]}
          rotation={[-Math.PI, 1.571, 0]}
          scale={0.004}
        />
        <group
          position={[1.082, 1.109, 7.057]}
          rotation={[-Math.PI, 1.571, 0]}
          scale={0.004}
        />
        <group
          position={[1.095, 1.128, 7.057]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[1.082, 1.145, 6.904]}
          rotation={[-Math.PI, 1.571, 0]}
          scale={0.004}
        />
        <group
          position={[1.082, 1.109, 6.904]}
          rotation={[-Math.PI, 1.571, 0]}
          scale={0.004}
        />
        <group
          position={[1.095, 1.128, 6.904]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[1.311, 1.12, 7.699]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh277.geometry}
            material={materials["fermentation_tank.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh277_1.geometry}
            material={materials["Mat.1"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh277_2.geometry}
            material={materials["Metal 02.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh277_3.geometry}
            material={materials["Mat.003"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh277_4.geometry}
            material={materials.Mat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh277_5.geometry}
            material={materials["Mat.004"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh277_6.geometry}
            material={materials["Mat.005"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh277_7.geometry}
            material={materials["Mat.2"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh277_8.geometry}
            material={materials["Mat.007"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh277_9.geometry}
            material={materials["Mat.008"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh277_10.geometry}
            material={materials["Metal - Brushed.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh277_11.geometry}
            material={materials["Mat.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh277_12.geometry}
            material={materials["Mat.006"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh277_13.geometry}
            material={materials["Mat.009"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh277_14.geometry}
            material={materials["Mat.3"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh277_15.geometry}
            material={materials["Mat.010"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh277_16.geometry}
            material={materials["Mat.011"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh277_17.geometry}
            material={materials["Mat.4"]}
          />
        </group>
        <group
          position={[1.101, 1.6, 8.318]}
          rotation={[-Math.PI, 1.571, 0]}
          scale={0.004}
        />
        <group
          position={[1.098, 1.383, 7.932]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[1.098, 1.383, 8.191]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[1.098, 1.216, 8.191]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[1.098, 1.216, 7.936]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[1.099, 1.075, 8.001]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
          scale={0.004}
        />
        <group
          position={[1.097, 1.03, 7.918]}
          rotation={[-Math.PI, 1.571, 0]}
          scale={0.004}
        />
        <group
          position={[1.852, 0.887, 6.563]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[1.852, 0.887, 7.206]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[2.139, 0.356, 7.418]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[2.139, 0.355, 6.351]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[2.139, 0.355, 8.504]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[1.013, 0.355, 6.351]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[1.013, 0.355, 8.504]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[1.232, 1.225, 6.684]}
          rotation={[0, -0.785, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[1.208, 1.255, 6.708]}
          rotation={[-Math.PI, 0.785, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[1.208, 1.225, 6.708]}
          rotation={[-Math.PI, 0.785, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[1.214, 1.24, 6.701]}
          rotation={[Math.PI / 2, 0, 2.355]}
          scale={0.004}
        />
        <group
          position={[1.569, 1.757, 6.89]}
          rotation={[Math.PI / 2, 0, 1.222]}
          scale={0.004}
        />
        <group
          position={[1.203, 1.225, 6.74]}
          rotation={[0, -0.624, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[1.183, 1.255, 6.768]}
          rotation={[-Math.PI, 0.624, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[1.183, 1.225, 6.768]}
          rotation={[-Math.PI, 0.624, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[1.189, 1.24, 6.761]}
          rotation={[Math.PI / 2, 0, 2.195]}
          scale={0.004}
        />
        <group
          position={[1.569, 1.757, 6.89]}
          rotation={[Math.PI / 2, 0, 1.061]}
          scale={0.004}
        />
        <group
          position={[1.314, 1.225, 6.588]}
          rotation={[0, -1.106, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[1.284, 1.255, 6.603]}
          rotation={[-Math.PI, 1.106, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[1.284, 1.225, 6.603]}
          rotation={[-Math.PI, 1.106, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[1.292, 1.24, 6.599]}
          rotation={[Math.PI / 2, 0, 2.677]}
          scale={0.004}
        />
        <group
          position={[1.569, 1.757, 6.89]}
          rotation={[Math.PI / 2, 0, 1.543]}
          scale={0.004}
        />
        <group
          position={[1.269, 1.225, 6.633]}
          rotation={[0, -0.945, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[1.242, 1.255, 6.653]}
          rotation={[-Math.PI, 0.945, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[1.242, 1.225, 6.653]}
          rotation={[-Math.PI, 0.945, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[1.249, 1.24, 6.647]}
          rotation={[Math.PI / 2, 0, 2.516]}
          scale={0.004}
        />
        <group
          position={[1.569, 1.757, 6.89]}
          rotation={[Math.PI / 2, 0, 1.382]}
          scale={0.004}
        />
        <group
          position={[1.569, 1.757, 6.89]}
          rotation={[Math.PI / 2, 0, 2.213]}
          scale={0.004}
        />
        <group
          position={[1.569, 1.757, 6.89]}
          rotation={[Math.PI / 2, 0, 2.059]}
          scale={0.004}
        />
        <group
          position={[1.569, 1.757, 6.89]}
          rotation={[Math.PI / 2, 0, 1.899]}
          scale={0.004}
        />
        <group
          position={[1.569, 1.757, 6.89]}
          rotation={[Math.PI / 2, 0, 1.732]}
          scale={0.004}
        />
        <group
          position={[1.551, 1.696, 6.847]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[1.573, 1.681, 6.888]}
          rotation={[Math.PI / 2, 0, -2.996]}
          scale={0.004}
        />
        <group
          position={[1.494, 1.037, 7.248]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[1.494, 1.037, 7.248]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[2.997, 0.887, 7.224]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[2.876, 0.74, 6.408]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[2.917, 0.74, 6.408]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[2.957, 0.74, 6.408]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[2.998, 0.74, 6.408]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[3.038, 0.74, 6.408]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[3.078, 0.74, 6.408]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[3.119, 0.74, 6.408]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[2.876, 0.74, 6.408]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[2.997, 0.356, 7.417]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[2.502, 1.145, 7.057]}
          rotation={[-Math.PI, 1.571, 0]}
          scale={0.004}
        />
        <group
          position={[2.502, 1.109, 7.057]}
          rotation={[-Math.PI, 1.571, 0]}
          scale={0.004}
        />
        <group
          position={[2.515, 1.128, 7.057]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[2.502, 1.145, 6.904]}
          rotation={[-Math.PI, 1.571, 0]}
          scale={0.004}
        />
        <group
          position={[2.502, 1.109, 6.904]}
          rotation={[-Math.PI, 1.571, 0]}
          scale={0.004}
        />
        <group
          position={[2.515, 1.128, 6.904]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[2.521, 1.6, 8.318]}
          rotation={[-Math.PI, 1.571, 0]}
          scale={0.004}
        />
        <group
          position={[2.519, 1.383, 7.932]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[2.519, 1.383, 8.191]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[2.519, 1.216, 8.191]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[2.519, 1.216, 7.936]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[2.52, 1.075, 8.001]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
          scale={0.004}
        />
        <group
          position={[2.518, 1.03, 7.918]}
          rotation={[-Math.PI, 1.571, 0]}
          scale={0.004}
        />
        <group
          position={[3.272, 0.887, 6.563]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[3.272, 0.887, 7.206]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[3.559, 0.356, 7.418]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[3.559, 0.355, 6.351]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[3.559, 0.355, 8.504]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[2.434, 0.355, 6.351]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[2.434, 0.355, 8.504]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[2.652, 1.225, 6.684]}
          rotation={[0, -0.785, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[2.628, 1.255, 6.708]}
          rotation={[-Math.PI, 0.785, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[2.628, 1.225, 6.708]}
          rotation={[-Math.PI, 0.785, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[2.635, 1.24, 6.701]}
          rotation={[Math.PI / 2, 0, 2.355]}
          scale={0.004}
        />
        <group
          position={[2.99, 1.757, 6.89]}
          rotation={[Math.PI / 2, 0, 1.222]}
          scale={0.004}
        />
        <group
          position={[2.623, 1.225, 6.74]}
          rotation={[0, -0.624, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[2.604, 1.255, 6.768]}
          rotation={[-Math.PI, 0.624, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[2.604, 1.225, 6.768]}
          rotation={[-Math.PI, 0.624, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[2.609, 1.24, 6.761]}
          rotation={[Math.PI / 2, 0, 2.195]}
          scale={0.004}
        />
        <group
          position={[2.99, 1.757, 6.89]}
          rotation={[Math.PI / 2, 0, 1.061]}
          scale={0.004}
        />
        <group
          position={[2.734, 1.225, 6.588]}
          rotation={[0, -1.106, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[2.704, 1.255, 6.603]}
          rotation={[-Math.PI, 1.106, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[2.704, 1.225, 6.603]}
          rotation={[-Math.PI, 1.106, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[2.712, 1.24, 6.599]}
          rotation={[Math.PI / 2, 0, 2.677]}
          scale={0.004}
        />
        <group
          position={[2.99, 1.757, 6.89]}
          rotation={[Math.PI / 2, 0, 1.543]}
          scale={0.004}
        />
        <group
          position={[2.689, 1.225, 6.633]}
          rotation={[0, -0.945, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[2.662, 1.255, 6.653]}
          rotation={[-Math.PI, 0.945, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[2.662, 1.225, 6.653]}
          rotation={[-Math.PI, 0.945, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[2.669, 1.24, 6.647]}
          rotation={[Math.PI / 2, 0, 2.516]}
          scale={0.004}
        />
        <group
          position={[2.99, 1.757, 6.89]}
          rotation={[Math.PI / 2, 0, 1.382]}
          scale={0.004}
        />
        <group
          position={[2.99, 1.757, 6.89]}
          rotation={[Math.PI / 2, 0, 2.213]}
          scale={0.004}
        />
        <group
          position={[2.99, 1.757, 6.89]}
          rotation={[Math.PI / 2, 0, 2.059]}
          scale={0.004}
        />
        <group
          position={[2.99, 1.757, 6.89]}
          rotation={[Math.PI / 2, 0, 1.899]}
          scale={0.004}
        />
        <group
          position={[2.99, 1.757, 6.89]}
          rotation={[Math.PI / 2, 0, 1.732]}
          scale={0.004}
        />
        <group
          position={[2.972, 1.696, 6.847]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[2.993, 1.681, 6.888]}
          rotation={[Math.PI / 2, 0, -2.996]}
          scale={0.004}
        />
        <group
          position={[2.914, 1.037, 7.248]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
        <group
          position={[2.914, 1.037, 7.248]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={0.004}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Methlabnoniso_textfull42_wala.glb");
