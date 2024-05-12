import { Root, Text } from "@react-three/uikit";
import { useEffect, useRef, useMemo } from "react";
import { BufferGeometry, DoubleSide, MeshPhongMaterial, NormalBufferAttributes } from "three";

export const CustomObject = () => {
  const geometryRef = useRef<BufferGeometry<NormalBufferAttributes>>(null);

  const verticesCount = 10 * 3;

  const positions = useMemo(() => {
    const positions = new Float32Array(verticesCount * 3);

    for (let i = 0; i < verticesCount * 3; i++)
      positions[i] = (Math.random() - 0.5) * 3;

    return positions;
  }, [verticesCount]);

  useEffect(() => {
    if (geometryRef.current?.computeVertexNormals) {
      geometryRef.current.computeVertexNormals();
    }
  }, []);

  return (
    <mesh>
      <bufferGeometry ref={geometryRef}>
        <bufferAttribute
          attach="attributes-position"
          count={verticesCount}
          itemSize={3}
          array={positions}
        />
      </bufferGeometry>
      <meshStandardMaterial color="red" side={DoubleSide} />
    </mesh>
  );
};

export const Text3D = () => {
  return (
      <Root>
        <Text
          backgroundColor="black"
          color="white"
          padding={24}
          borderRadius={32}
          fontSize={32}
          borderColor="black"
          borderBend={0.3}
          borderWidth={8}
          panelMaterialClass={FancyMaterial}
        >
          Some Fancy Text
        </Text>
      </Root>
  )
}

class FancyMaterial extends MeshPhongMaterial {
  constructor() {
    super({
      specular: 0x111111,
      shininess: 100,
    })
  }
}
