import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 100%;
  max-width: 620px;
  overflow: hidden;
  position: relative;
  margin: auto;
`;

export const CarouselTrack = styled.div<{ offset: string }>`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => props.offset});
`;

export const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  flex-shrink: 0;
`;

export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 1;
  border-radius: 50%;
  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;

export const PrevButton = styled(ArrowButton)`
  left: 10px;
`;

export const NextButton = styled(ArrowButton)`
  right: 10px;
`;

export const IndicatorContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const Indicator = styled.button<{ active: boolean }>`
  background: ${(props) => (props.active ? "#be267a" : "#ccc")};
  border: none;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  cursor: pointer;
  &:hover {
    background: #be267a;
  }
`;
