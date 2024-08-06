import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Container = styled.div`
display: flex;





`;



const Text = styled.div`
   text-align: center;
  color: #f3fff0;
  
  font-size: 100px;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-style: normal;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  

`;

const Spinner = styled.div`
  border: 15px solid rgba(55, 255, 0, 0.871);
  border-top: 15px solid #d818d8;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  animation: ${spin} 1s linear infinite;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LoadingSpinner = () => {
  const [text, setText] = useState("");
  const loadingText = "  Carregando...";
  const interval = 250; 

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText((prevText) => prevText + loadingText[index]);
      index++;
      if (index === loadingText.length) {
        index = 0;
        setText("");
      }
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    
    <Container>
      <Text>{text}</Text>
      <Spinner />
    
      </Container>
 
  );
};

export default LoadingSpinner;

