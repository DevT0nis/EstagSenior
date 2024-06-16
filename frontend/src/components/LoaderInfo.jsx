import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: none; /* Inicialmente oculto */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;

const Span = styled.span`
  font-size: 24px;
`;

const LoaderInfo = ({ target, callback }) => {
  const spanRef = useRef(null);

  useEffect(() => {
    target.addEventListener("progress", progress);
    return () => {
      target.removeEventListener("progress", progress);
    };
  }, []);

  const progress = (e) => {
    if (e.loaded === e.total) {
      loaded(e);
    }
    let t = (e.loaded / e.total) * 100;
    t = t.toFixed(0);
    spanRef.current.innerHTML = `${t}%`;
  };

  const loaded = (e) => {
    spanRef.current.innerHTML = "100%";
    if (callback) {
      callback(e);
    }
  };

  return (
    <Container>
      <Span ref={spanRef}></Span>
    </Container>
  );
};

export default LoaderInfo;
