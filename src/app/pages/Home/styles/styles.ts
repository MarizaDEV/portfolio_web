import styled, { keyframes } from "styled-components";
import banner from "../../../shared/assets/images/banner.png";

const slideIn = keyframes`
  0% {
    transform: translateX(-100%); 
  }
  100% {
    transform: translateX(0); 
  }
`;

export const Container = styled.div`
  background: var(white-theme);
  height: 100vh;
`;

export const BoxTop = styled.div`
  background: url(${banner}) no-repeat right top fixed;
  width: 100%;
  max-height: 850px;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

export const Box1 = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`;

export const Box2 = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  font-family: "Orbitron", sans-serif;
  font-weight: 500;
  color: #be267a;
  font-size: 15px;
  flex-direction: column;
  gap: 5px;
  margin: 15px 0;
`;

export const Box3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  max-width: 550px;

  p {
    color: #ffffff;
    font-size: 1.125rem;
    text-align: center;
  }
`;

export const Box4 = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  img {
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 1;
    animation: ${slideIn} 1s ease forwards;
  }
`;

export const Box5 = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Orbitron", sans-serif;
  font-weight: 500;
  color: #be267a;
  font-size: 15px;
  position: relative;
  background-color: rgba(0, 0, 0, 0.5);
`;
