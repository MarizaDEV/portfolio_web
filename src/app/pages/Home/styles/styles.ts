import styled from "styled-components";
import banner from "../../../shared/assets/images/banner.png";

export const Container = styled.div`
  background: var(white-theme);
  height: 100vh;
`;

export const BoxTop = styled.div`
  background: url(${banner}) no-repeat right top fixed;
  width: 100%;
  height: 100%;
  max-height: 520px;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Box1 = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Box2 = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  font-family: "Orbitron", sans-serif;
  font-weight: 500;
  color: #be267a;
  margin: 30px 0;
  width: 300px;
  font-size: 15px;
`;

export const Box3 = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  color: #ffffff;
  width: 600px;
  font-size: 9px;
`;
