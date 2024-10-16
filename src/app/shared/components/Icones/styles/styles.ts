import styled from "styled-components";

export const Boxicon = styled.div`
  width: 40px;
  height: 40px;
  background: #762c55;
  border-radius: 50px;
  box-shadow: 8px 4px 25px rgba(190, 38, 122, 0.8);
  transition: transform 0.2s;
  cursor: pointer;
  position: relative;

  &:hover {
    transform: scale(1.2);
  }
`;

export const IconContainer = styled.div`
  position: relative;
  display: inline-block;

  &:hover div {
    visibility: visible;
  }
`;
export const Tooltip = styled.div`
  visibility: hidden;
  width: 80px;
  background-color: black;
  color: #fff;
  font-size: 0.75rem;
  text-align: center;
  border-radius: 5px;
  padding: 5px;
  position: absolute;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  transition: visibility 0.2s ease;
`;
