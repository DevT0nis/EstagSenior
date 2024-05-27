import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import HomeAi from "./components/HomeAi";
import styled from "styled-components";


const Container = styled.div`

  display: flex;
  height: 100vh; 
`;


const HomeAiContainer = styled.div`
  flex: 1; 
  display: flex;
  justify-content: center;
  align-items: center;
`;


const CanvasContainer = styled.div`
  flex: 1;
`;

function App() {
  return (
    <Container>
      <HomeAiContainer>
        <HomeAi />
      </HomeAiContainer>
      <CanvasContainer>
        <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
          <color attach="background" args={["#ececec"]} />
          <Experience />
        </Canvas>
      </CanvasContainer>
    </Container>
  );
}

export default App;
