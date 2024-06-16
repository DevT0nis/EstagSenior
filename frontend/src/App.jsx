import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import styled from "styled-components";
import { Suspense } from "react";
import LoadingSpinner from "./components/LoadingSpinner";



const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const CanvasContainer = styled.div`
  flex: 1;
`;

function App() {
  return (
  <Suspense fallback={<LoadingSpinner />}>
    <Container>
      <CanvasContainer>
        <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
          <color attach="background" args={["#ececec"]} />
          
            <Experience />
          
        </Canvas>
      </CanvasContainer>
    </Container>
    </Suspense>
  );
}

export default App;
