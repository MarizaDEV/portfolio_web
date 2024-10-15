import React from "react";
import { Boxicon } from "./styles/styles";

interface IconesProps {
  image: string;
}

export const Icones: React.FC<IconesProps> = ({ image }) => {
  return (
    <Boxicon>
      <img
        src={image}
        alt="Ícone"
        style={{ width: "100%", height: "100%", padding: "5px" }}
      />
    </Boxicon>
  );
};
