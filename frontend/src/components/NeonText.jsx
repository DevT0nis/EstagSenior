import React, { useRef, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { Text } from "@react-three/drei";
import * as THREE from 'three'; // Importe o THREE

const NeonText = ({ text, position, color, fontSize, neonColor }) => {
  const font = useLoader(FontLoader, "./fonts/helvetiker_regular.typeface.json");
  const textRef = useRef();
  const [isPulsing, setIsPulsing] = useState(true);

  // Animação de pulsação usando useFrame
  useFrame(({ clock }) => {
    if (isPulsing) {
      const scale = 1 + 0.1 * Math.sin(clock.getElapsedTime() * 1.7); // Ajuste a velocidade e intensidade da pulsação aqui
      textRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group position={position}>
      {/* Texto base */}
      <Text
        ref={textRef}
        font={font}
        fontSize={fontSize}
        side={THREE.FrontSide} // 
        color={neonColor}
        position={[0, 0, 0]}
      >
        {text}
      </Text>

   

    </group>
  );
};

export default NeonText;