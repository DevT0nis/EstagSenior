import React, { useEffect, useRef, useMemo } from "react";
import { ContactShadows, Environment, OrbitControls, Sky, useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { Avatar } from "./Avatar";
import NeonText from "./NeonText";
import * as THREE from "three";

import { useFrame, useLoader } from "@react-three/fiber";



// todo: verificar se existe alguma lib para convertes os arquivos com defeito para que a pagina carregue normalmente

export const Experience = () => {
  const { animation } = useControls({
    animation: {
      value: "Trabalhando",
      options: ["Trabalhando", "Standing", "Talking", "Jumping"],
    },
  });

  const chair = useGLTF('./models/gaming_chair.glb', true);
  const table = useGLTF('./models/gaming_desktop_pc.glb', true);
  const bed = useGLTF('./models/modern_double_bed.glb', true);
  

  const bmo = useGLTF('./models/bmo_realistic.glb', true);
  const book = useGLTF('./models/book_shelf.glb', true);
   const table2 = useGLTF('./models/bureau_2.glb', true);

  const celular = useGLTF('./models/samsung_s22_ultra.glb', true);
  const bedside = useGLTF('./models/jenson_bedside_table_dark_stain_oak.glb', true);
  const cat = useGLTF('./models/cat.glb', true);
  const tapete = useGLTF('./models/5x7_ojai_cali_rug.glb', true);
  const arara = useGLTF('./models/hanger_chusig.glb', true);
  const arvores = useGLTF('./models/laying_under_a_tree_with_pink_leaves_and_wind.glb', true);
  const tenis = useGLTF('./models/sneakers_seen.glb', true);

  const roupa1 = useGLTF('./models/jeans_jacket_on_a_hanger.glb', true);
  const roupa2 = useGLTF('./models/striped_coat_on_a_hanger.glb', true);

  const videogame = useGLTF('./models/playstation_5.glb', true);
  const monitor = useGLTF('./models/rigged_monitor_iiyama_gb2770hsu_free_download.glb', true);
  const controle = useGLTF('./models/playstation_5_dualsense.glb', true);
  const livros = useGLTF('./models/books_collection.glb', true);

  const window = useGLTF('./models/window.glb', true);
  
  const woodTexture = useLoader(THREE.TextureLoader, './textures/Wood084A_2K-JPG_Color.jpg');

  const catRef = useRef();
  const bmoRef = useRef();
   const arvoresRef = useRef();

  const catMixer = useRef();
  const bmoMixer = useRef();
   const arvoresMixer = useRef();

  useEffect(() => {
    if (cat) {
      catMixer.current = new THREE.AnimationMixer(cat.scene);
      const action = catMixer.current.clipAction(cat.animations[0]);
      action.play();
    }

    if (bmo) {
      bmoMixer.current = new THREE.AnimationMixer(bmo.scene);
      const action = bmoMixer.current.clipAction(bmo.animations[0]);
      action.play();
    }

    if (arvores) {
      arvoresMixer.current = new THREE.AnimationMixer(arvores.scene);
      const action = arvoresMixer.current.clipAction(arvores.animations[0]);
      action.play();
    }
  }, [cat, bmo]);

  useFrame((state, delta) => {
    catMixer.current?.update(delta);
    bmoMixer.current?.update(delta);
     arvoresMixer.current?.update(delta);
  });

  const createWallWithHole = useMemo(() => (position, rotation) => {
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
    const material = new THREE.MeshStandardMaterial({ color: "#a5986d" });
    const wallWithHoleMesh = new THREE.Mesh(geometry, material);

    wallWithHoleMesh.position.set(...position);
    wallWithHoleMesh.rotation.set(...rotation);

    return wallWithHoleMesh;
  }, []);

  return (
    <>
      <OrbitControls />
      <Sky
        distance={450000}
        sunPosition={[1, 0.7, -1]}
        inclination={0.6}
        azimuth={0.25}
        mieCoefficient={0.00555}
        mieDirectionalG={0.8}
        rayleigh={0.1}
        turbidity={0.1}
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
        {animation === "Trabalhando" && (
          <>
            <primitive object={chair.scene} rotation-y={0.8} scale={[1, 1, 1]} position={[-1.35, 0, -1.80]} />
            <primitive object={tapete.scene} rotation-y={0} scale={[1.5, 1, 1.5]} position={[0, -0.01, 0]} />
            <primitive ref={bmoRef} object={bmo.scene} rotation-y={3.7} scale={[1, 1, 1]} position={[0.38, 40.73, 0]} />
          </>
        )}
        <primitive object={table.scene} rotation-y={1.5} scale={[0.12, 0.12, 0.12]} position={[-0.27, 0.7, 0.8]} />
         <primitive object={table2.scene} rotation-y={-3.2} scale={[1.3, 1, 1.1]} position={[0.84, -0.029, 1.4]} /> 


          <primitive 
          object={monitor.scene} 
          rotation-y={-5.47} 
          scale={[0.5, 0.52, 0.5]} 
          position={[-1.8, 0.74, 0.87]}
           />

          <primitive 
          object={videogame.scene} 
          rotation-y={-3} 
          scale={[0.2, 0.2, 0.2]} 
          position={[-2.2, 0.87, 0.2]}
           />

          <primitive
            object={controle.scene}
            rotation-x={Math.PI / 2}  // Rotaciona 90 graus em torno do eixo X
            rotation-y={0}            // Rotação no eixo Y
            rotation-z={-5.6}            // Rotação no eixo Z
            scale={[0.5, 0.5, 0.5]}
            position={[-0.8, 0.77, 0.3]}
          />

<primitive
            object={livros.scene}
            rotation-x={0}  // Rotaciona 90 graus em torno do eixo X
            rotation-y={2.3}            // Rotação no eixo Y
            rotation-z={0}            // Rotação no eixo Z
            scale={[0.01, 0.01, 0.01]}
            position={[-2, 0.73, -0.02]}
          />


          
        <NeonText text={["Os            ㅤ"]} position={[2.7, 2, -3.9]} color="green" neonColor="#40ff00" fontSize={0.5} />
        <NeonText text={["Estagiários"]} position={[2.7, 1.5, -3.9]} color="green" neonColor="#ff00ff" fontSize={0.5} />
        <primitive object={bed.scene} rotation-y={6.3} scale={[1, 1, 1]} position={[2.6, 0, -4.4]} />
        <primitive ref={catRef} object={cat.scene} rotation-y={-1.3} scale={[0.02, 0.02, 0.02]} position={[2.6, 0.5, -2.4]} />
        <primitive object={book.scene} rotation-y={6.3} scale={[0.008, 0.005, 0.01]} position={[-1.5, 0, -3.2]} />
        <primitive object={arara.scene} rotation-y={6.3} scale={[0.5, 0.7, 0.5]} position={[0, 2, -3.6]} />
        <primitive ref={arvoresRef} object={arvores.scene} rotation-y={1.7} scale={[0.5, 0.5, 0.5]} position={[7, -2, 0]} color="#a5986d" />
        <primitive object={tenis.scene} rotation-y={1.5} scale={[1, 1, 1]} position={[0, 0.1, -3.2]} />
        {/* <primitive object={tenis2.scene} rotation-y={6} scale={[1.3, 1.3, 1.3]} position={[-0.4, 0.2, -3.2]} /> */}
        <primitive object={roupa1.scene} rotation-y={3.3} scale={[1.5, 1.5, 1.5]} position={[0.50, 0.4, -3.23]} />
        <primitive object={roupa2.scene} rotation-y={2} scale={[1.5, 1.5, 1.5]} position={[-0.5, 0.43, -3.23]} />
        
        <primitive object={window.scene} rotation-y={-3.15} scale={[0.030, 0.030, 0.030]} position={[4.63, 0, 0.5]} /> 
        <primitive object={bedside.scene} rotation-y={6.3} scale={[0.0080, 0.0080, 0.0080]} position={[1.7, 0, -3.6]} />
        <primitive object={celular.scene} rotation-y={6.3} scale={[0.08, 0.08, 0.08]} position={[1.7, 0.43, -3.6]} />
        <mesh scale={8} rotation-x={-Math.PI * 0.5} position-y={-0.001}>
          <planeGeometry />
          <meshStandardMaterial map={woodTexture} />
        </mesh>
        <mesh position={[0, 1.5, -4]} rotation-y={0}>
          <boxGeometry args={[8, 4, 0.1]} />
          <meshStandardMaterial color="#b08a42" />
        </mesh>
        <mesh position={[-4, 1.5, 0]} rotation-y={1.57}>
          <boxGeometry args={[8, 4, 0.1]} />
          <meshStandardMaterial color="#a5986d" />
        </mesh>
        <mesh color="gray">
          <primitive object={createWallWithHole([4, 1.5, 0], [0, -Math.PI / 2, 0])} />
        </mesh>
  
      </group>
    </>
  );
};
