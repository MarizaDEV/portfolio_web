import styled from "styled-components";

export const BoxiconFooter = styled.div`
  width: 40px;
  height: 40px;
  background: #000;
  border-radius: 50px;
  box-shadow: 8px 4px 25px rgba(4, 4, 4, 1);
  transition: transform 0.2s;
  cursor: pointer;
  position: relative;

  &:hover {
    transform: scale(1.2);
  }
`;

export const IconContainerFooter = styled.div`
  position: relative;
  display: inline-block;

  &:hover div {
    visibility: visible;
  }
`;
