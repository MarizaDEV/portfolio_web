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

const images: { [key in "All" | "one" | "two" | "three"]: string[] } = {
  All: [imageNew1, imageNew2, imageNew3, imageNew1, imageNew2, imageNew3],
  one: [imageNew1, imageNew1, imageNew1, imageNew1, imageNew2, imageNew3],
  two: [imageNew2, imageNew2, imageNew2, imageNew1, imageNew2, imageNew3],
  three: [imageNew3, imageNew3, imageNew3],
};

export default function ImageList() {
  const [value, setValue] = React.useState<"All" | "one" | "two" | "three">(
    "one"
  );

  const handleChange = (
    _event: React.SyntheticEvent,
    newValue: "All" | "one" | "two" | "three"
  ) => {
    setValue(newValue);
  };

  return (
    <>
      <BoxContainer>
        <TabStyle>
          {" "}
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="image tabs"
          >
            <Tab value="All" label="All" />
            <Tab value="one" label="Tab 1" />
            <Tab value="two" label="Tab 2" />
            <Tab value="three" label="Tab 3" />
          </Tabs>
        </TabStyle>

        <BoxContainerImages>
          {" "}
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
