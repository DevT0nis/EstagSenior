import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Howl } from "howler";

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const CanvasContainer = styled.div`
  flex: 1;
`;

const UIContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 10;
`;

const Button = styled.button`
  background-color: #333133;
  border-radius: 20px;
  height: 50px;
  width: 150px;
  color: #6fff00;
  border: none;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 17px;
  margin: 5px;
  &:hover {
    background-color: #131213;
  }
`;

const VolumeSlider = styled.input`
  width: 100%;
  margin: 10px 0;
`;

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);


  const sound = new Howl({
    src: ['./music/Minecraft FULL SOUNDTRACK.mp3'],
    autoplay: false,
    loop: false,
    volume: 0.5, 
  });

 
  useEffect(() => {
    sound.volume(volume);
  }, [volume]);


  const handlePlayPauseMusic = () => {
    if (isPlaying) {
      sound.pause();
    } else {
      sound.play();
    }
    setIsPlaying(!isPlaying); 
  };

 
  const handleVolumeChange = (event) => {
    setVolume(parseFloat(event.target.value));
  };

  return (
    <Container>
      <CanvasContainer>
        <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
          <color attach="background" args={["#ececec"]} />
          <Experience setIsPlaying={setIsPlaying} />
        </Canvas>
      </CanvasContainer>
      <UIContainer>
        <Button onClick={handlePlayPauseMusic}>
          {isPlaying ? "Pausar Música" : "Tocar Música"}
        </Button>
        <VolumeSlider
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
      </UIContainer>
    </Container>
  );
}

export default App;
