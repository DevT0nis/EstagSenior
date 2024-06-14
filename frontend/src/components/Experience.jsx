import React from "react";
import {
  ContactShadows,
  Environment,
  OrbitControls,
  Sky,
} from "@react-three/drei";
import { useControls } from "leva";
import { Avatar } from "./Avatar";
import { useGLTF } from "@react-three/drei";
import NeonText from "./NeonText";
import * as THREE from "three";

export const Experience = () => {
  const { animation } = useControls({
    animation: {
      value: "Typing",
      options: ["Typing", "Falling", "Standing", "Talking", "Jumping"],
    },
  });

  const chair = useGLTF('./models/gaming_chair.glb');
  const table = useGLTF('./models/gaming_desktop_pc.glb');
  const bed = useGLTF('./models/modern_double_bed.glb');
  const window = useGLTF('./models/window.glb');

  // Function to create a wall with a hole
  const createWallWithHole = (position, rotation) => {
    const shape = new THREE.Shape();
    shape.moveTo(-4, -2);
    shape.lineTo(4, -2);
    shape.lineTo(4, 2);
    shape.lineTo(-4, 2);
    shape.lineTo(-4, -2);

    const hole = new THREE.Path();
    hole.moveTo(-1, -1);
    hole.lineTo(0.9, -1);
    hole.lineTo(0.9, 0.9);
    hole.lineTo(-0.4, 0.9);
    hole.lineTo(-0.4, -1);
    shape.holes.push(hole);

    const geometry = new THREE.ShapeGeometry(shape);
    const material = new THREE.MeshStandardMaterial({ color: "white" });
    const wallWithHoleMesh = new THREE.Mesh(geometry, material);

    wallWithHoleMesh.position.set(...position);
    wallWithHoleMesh.rotation.set(...rotation);

    return wallWithHoleMesh;
  };

  return (
    <>
      <OrbitControls />
      <Sky
        distance={450000}
        sunPosition={[-1, 0.5, -1]}
        inclination={0.6}
        azimuth={0.25}
        mieCoefficient={0.005}
        mieDirectionalG={0.8}
        rayleigh={0.2}  // Darker sky setting
        turbidity={2}  // Lower haziness
      />
      <Environment preset="sunset" />
      <group position-y={-1}>
        <ContactShadows
          opacity={0.42}
          scale={10}
          blur={1}
          far={10}
          resolution={256}
          color="#000000"
        />
        <Avatar animation={animation} />
        {animation === "Typing" && (
          <primitive object={chair.scene} rotation-y={0.8} scale={[1, 1, 1]} position={[-1.35, 0, -1.80]} />
        )}

        <primitive object={table.scene} rotation-y={1.5} scale={[0.12, 0.12, 0.12]} position={[-0.27, 0.7, 0.8]} />

        <NeonText text={["Os            ㅤ"]} position={[-1, 2, -3.9]} color="green" neonColor="#2fff00" fontSize={0.5} />
        <NeonText text={["Estagiários"]} position={[-1, 1.5, -3.9]} color="green" neonColor="#ff00ff" fontSize={0.5} />

        <primitive object={bed.scene} rotation-y={6.3} scale={[1, 1, 1]} position={[2.6, 0, -4.4]} />

        <mesh scale={8} rotation-x={-Math.PI * 0.5} position-y={-0.001}>
          <planeGeometry />
          <meshStandardMaterial color="black" />
        </mesh>

        {/* Adding walls with holes */}
        <mesh position={[0, 1.5, -4]} rotation-y={0}>
          <boxGeometry args={[8, 4, 0.1]} />
          <meshStandardMaterial color="white" />
        
        </mesh>
        <primitive object={createWallWithHole([4, 1.5, 0], [0, -Math.PI / 2, 0])} />

        {/* Adding windows to the walls */}
        
        <primitive object={window.scene} scale={[0.030, 0.030, 0.030]} position={[3.35, 0, 0]} />
      </group>
    </>
  );
};
