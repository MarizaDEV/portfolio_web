import { useState, useEffect } from "react";
import {
  CarouselContainer,
  CarouselTrack,
  CarouselImage,
  PrevButton,
  NextButton,
  IndicatorContainer,
  Indicator,
} from "./styles/styles";

import imgbanner from "../../assets/images/banner.png";

const images = [imgbanner, imgbanner, imgbanner];

export const Carrossel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsCount = images.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % itemsCount);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + itemsCount) % itemsCount);
  };

  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <CarouselContainer>
      <CarouselTrack offset={`-${currentIndex * 100}%`}>
        {images.map((image, index: number) => (
          <CarouselImage key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </CarouselTrack>
      <PrevButton onClick={handlePrev}>←</PrevButton>
      <NextButton onClick={handleNext}>→</NextButton>
      <IndicatorContainer>
        {images.map((_, index: number) => (
          <Indicator
            key={index}
            active={currentIndex === index}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </IndicatorContainer>
    </CarouselContainer>
  );
};
