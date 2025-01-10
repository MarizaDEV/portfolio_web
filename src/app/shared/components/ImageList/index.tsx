import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { imageNew1, imageNew2, imageNew3 } from "../../assets";
import {
  BoxContainer,
  BoxContainerImages,
  BoxImages,
  ButtonMais,
  TabStyle,
} from "./styles/styles";
import { Button } from "../Button/Button";
import { IoMdAdd } from "react-icons/io";
import { AiOutlineMinus } from "react-icons/ai";

const images: {
  [key in "All" | "webdesign" | "posts" | "bradings"]: string[];
} = {
  All: [
    imageNew1,
    imageNew2,
    imageNew3,
    imageNew1,
    imageNew2,
    imageNew3,
    imageNew1,
    imageNew2,
    imageNew3,
    imageNew1,
    imageNew2,
    imageNew3,
    imageNew1,
    imageNew2,
    imageNew3,
    imageNew1,
    imageNew2,
    imageNew3,
  ],
  webdesign: [
    imageNew1,
    imageNew1,
    imageNew1,
    imageNew1,
    imageNew2,
    imageNew3,
    imageNew3,
  ],
  posts: [imageNew2, imageNew2, imageNew2, imageNew1, imageNew2, imageNew3],
  bradings: [imageNew3, imageNew3, imageNew3],
};

export default function ImageList() {
  const [value, setValue] = useState<
    "All" | "webdesign" | "posts" | "bradings"
  >("All");
  const [displayedImages, setDisplayedImages] = useState(8);
  const [isExpanded, setIsExpanded] = useState(false);
  const imagesPerLoad = 8;

  const handleChange = (
    _event: React.SyntheticEvent,
    newValue: "All" | "webdesign" | "posts" | "bradings"
  ) => {
    setValue(newValue);
    setDisplayedImages(8);
    setIsExpanded(false);
  };

  const currentImages = images[value];
  const imagesToShow = isExpanded
    ? currentImages
    : currentImages.slice(0, displayedImages);

  const loadMoreImages = () => {
    if (isExpanded) {
      setDisplayedImages(8);
      setIsExpanded(false);
    } else {
      setDisplayedImages((prev) => prev + imagesPerLoad);
      setIsExpanded(true);
    }
  };

  const shouldShowLoadMoreButton = currentImages.length > 8;

  return (
    <>
      <BoxContainer>
        <TabStyle>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="image tabs"
          >
            <Tab value="All" label="All" />
            <Tab value="webdesign" label="Web Design" />
            <Tab value="posts" label="Posts" />
            <Tab value="bradings" label="BRADINGS" />
          </Tabs>
        </TabStyle>

        <BoxContainerImages>
          <BoxImages className="boximages">
            {imagesToShow.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Tab ${value} - ${index}`} />
              </div>
            ))}
          </BoxImages>
        </BoxContainerImages>

        {shouldShowLoadMoreButton && (
          <ButtonMais>
            <Button
              label={isExpanded ? "Diminuir" : "Mais"}
              onClick={loadMoreImages}
              variant="primary"
            >
              {isExpanded ? <AiOutlineMinus /> : <IoMdAdd />}
            </Button>
          </ButtonMais>
        )}
      </BoxContainer>
    </>
  );
}
