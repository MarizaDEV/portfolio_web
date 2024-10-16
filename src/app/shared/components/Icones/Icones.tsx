import React from "react";
import { Boxicon, IconContainer, Tooltip } from "./styles/styles";

interface IconesProps {
  image: string;
  title: string;
}
export const Icones: React.FC<IconesProps> = ({ image, title }) => {
  return (
    <IconContainer>
      <Boxicon>
        <img
          src={image}
          alt={title}
          style={{ width: "100%", height: "100%", padding: "5px" }}
        />
      </Boxicon>
      <Tooltip>{title}</Tooltip> {/* Para a legenda */}
    </IconContainer>
  );
};
