import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { imageNew1, imageNew2, imageNew3 } from "../../assets";

const images: { [key in "All" | "one" | "two" | "three"]: string[] } = {
  All: [imageNew1, imageNew1, imageNew1],
  one: [imageNew1, imageNew1, imageNew1],
  two: [imageNew2, imageNew2, imageNew2],
  three: [imageNew3, imageNew3, imageNew3],
};

export default function ImageList() {
  const [value, setValue] = React.useState<"All" | "one" | "two" | "three">(
    "one"
  );

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: "All" | "one" | "two" | "three"
  ) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
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

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          paddingTop: "10px",
        }}
      >
        {images[value].map((image, index) => (
          <div key={index} style={{ width: "150px", height: "150px" }}>
            <img
              src={image}
              alt={`Tab ${value} - ${index}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </div>
        ))}
      </div>
    </Box>
  );
}
