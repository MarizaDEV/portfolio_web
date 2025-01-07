import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { imageNew1, imageNew2, imageNew3 } from "../../assets";
import {
  BoxContainer,
  BoxContainerImages,
  BoxImages,
  TabStyle,
} from "./styles/styles";

const images: {
  [key in "All" | "webdesign" | "posts" | "bradings"]: string[];
} = {
  All: [imageNew1, imageNew2, imageNew3, imageNew1, imageNew2, imageNew3],
  webdesign: [imageNew1, imageNew1, imageNew1, imageNew1, imageNew2, imageNew3],
  posts: [imageNew2, imageNew2, imageNew2, imageNew1, imageNew2, imageNew3],
  bradings: [imageNew3, imageNew3, imageNew3],
};

export default function ImageList() {
  const [value, setValue] = React.useState<
    "All" | "webdesign" | "posts" | "bradings"
  >("webdesign");

  const handleChange = (
    _event: React.SyntheticEvent,
    newValue: "All" | "webdesign" | "posts" | "bradings"
  ) => {
    setValue(newValue);
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
            {images[value].map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Tab ${value} - ${index}`} />
              </div>
            ))}
          </BoxImages>
        </BoxContainerImages>
      </BoxContainer>
    </>
  );
}
