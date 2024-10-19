import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  height: 100%;
`;

export const BoxCard = styled.div`
  width: 280px;
  height: 250px;
  background: #010911;
  border-radius: 3px;
  box-shadow: 15px 4px 25px rgba(4, 4, 4, 1);
  cursor: pointer;
  position: relative;
`;

export const TextCard = styled.div`
  width: 100%;
  height: 100%;
`;

export const BoxStyledImg = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoxImg = styled.div`
  width: 200px;
  height: 170px;
  background-color: #ffffff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.2);
  }
`;
