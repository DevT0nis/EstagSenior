import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`;

const Spinner = styled.div`
  border: 8px solid rgba(12, 231, 220, 0.871);
  border-top: 8px solid #d818d8;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 1s linear infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Text = styled.div`
   text-align: center;
  color: #f3fff0;
  font-size: 50px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: normal;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  

`;

const LoadingSpinner = () => {
  const [text, setText] = useState("");
  const loadingText = " Carregando...";
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
      <Spinner />
      <Text>{text}</Text>
      </Container>
 
  );
};

export default LoadingSpinner;

