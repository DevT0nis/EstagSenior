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
        rayleigh={3}
        turbidity={10}
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

        {/* Adicionando a mesa à cena */}
        <primitive object={table.scene} rotation-y={1.5} scale={[0.12, 0.12, 0.12]} position={[-0.27, 0.7, 0.8]} />

        {/* Adicionando o texto em estilo neon */}
        <NeonText text={["Os            ."]} position={[2, 2, -5]} color="green" neonColor="#ffc400" fontSize={0.5} />
        <NeonText text={[ "Estagiários"]} position={[2, 1.5, -5]} color="green" neonColor="#ff00ff" fontSize={0.5} />
        {/* Adicionando a cama à cena */}
        <primitive object={bed.scene} rotation-y={6.3} scale={[1, 1, 1]} position={[2, 0, -3]} />

        {/* Adicionando um plano para o chão */}
        <mesh scale={8} rotation-x={-Math.PI * 0.5} position-y={-0.001}>
          <planeGeometry />
          <meshStandardMaterial color="black" />
        </mesh>
      </group>
    </>
  );
};
