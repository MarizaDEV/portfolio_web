import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  height: 100%;
`;

export const BoxCard = styled.div`
  width: 40px;
  height: 40px;
  background: #a3497b;
  border-radius: 50px;
  box-shadow: 8px 4px 25px rgba(190, 38, 122, 0.8);
  transition: transform 0.2s;
  cursor: pointer;
  position: relative;

  &:hover {
    transform: scale(1.2);
  }
`;

export const TextCard = styled.div`
  width: 100%;
  height: 100%;
`;
