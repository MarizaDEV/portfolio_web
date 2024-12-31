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

  @media (max-width: 600px) {
    h1 {
      font-size: 20px;
    }
  }
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
  margin: 35px 0;
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
    font-size: 1rem;
    text-align: center;
  }

  @media (max-width: 600px) {
    p {
      font-size: 0.9rem;
      width: 310px;
    }
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

  @media (max-width: 970px) {
    img {
      display: none;
    }
  }
`;

export const Box5 = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 40px;
  font-family: "Orbitron", sans-serif;
  font-weight: 500;
  color: #be267a;
  font-size: 15px;
  position: relative;
  background-color: rgba(0, 0, 0, 0.5);

  .icons-ling {
    display: flex;
    gap: 30px;
  }

  img {
    width: 35px;
  }

  @media (max-width: 970px) {
    .icons-ling {
      gap: 10px;
    }
  }
  @media (max-width: 335px) {
    img {
      width: 20px;
    }
  }
`;

export const BoxCenter = styled.div`
  width: 100%;
  //height: 100%;
  font-family: "Orbitron", sans-serif;
  font-weight: 500;
  color: #be267a;
  font-size: 15px;
  background: linear-gradient(
    180deg,
    rgba(4, 4, 4, 1) 0%,
    rgba(27, 48, 80, 1) 85%
  );
`;

export const BoxStyleCards = styled.div`
  width: 100%;
  // height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 60px;
  padding: 80px;
`;

export const CarrosselStyle = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;

  @media (max-width: 970px) {
    height: 300px;
  }
`;
