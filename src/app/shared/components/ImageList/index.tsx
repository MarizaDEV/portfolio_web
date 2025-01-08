import * as React from "react";
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
import { IoIosAddCircleOutline } from "react-icons/io";

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
  webdesign: [imageNew1, imageNew1, imageNew1, imageNew1, imageNew2, imageNew3],
  posts: [imageNew2, imageNew2, imageNew2, imageNew1, imageNew2, imageNew3],
  bradings: [imageNew3, imageNew3, imageNew3],
};

export default function ImageList() {
  const [value, setValue] = React.useState<
    "All" | "webdesign" | "posts" | "bradings"
  >("webdesign");
  const [displayedImages, setDisplayedImages] = React.useState(12);
  const imagesPerLoad = 12;

  const handleChange = (
    _event: React.SyntheticEvent,
    newValue: "All" | "webdesign" | "posts" | "bradings"
  ) => {
    setValue(newValue);
    setDisplayedImages(12);
  };

  const currentImages = images[value];
  const imagesToShow = currentImages.slice(0, displayedImages);

  const loadMoreImages = () => {
    setDisplayedImages((prev) => prev + imagesPerLoad);
  };

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

        {displayedImages < currentImages.length && (
          <ButtonMais>
            <Button label="Mais" onClick={loadMoreImages} variant="primary">
              <IoIosAddCircleOutline />
            </Button>
          </ButtonMais>
        )}
      </BoxContainer>
    </>
  );
}
