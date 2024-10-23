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
  const [intervalId, setIntervalId] = useState<ReturnType<
    typeof setInterval
  > | null>(null);

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
    const startInterval = () => {
      const id = setInterval(handleNext, 10000);
      setIntervalId(id);
    };

    startInterval();

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (intervalId) {
      clearInterval(intervalId);
      const newIntervalId = setInterval(handleNext, 50000);
      setIntervalId(newIntervalId);
    }
  }, [currentIndex]); // Reinicia o intervalo quando o índice muda

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
