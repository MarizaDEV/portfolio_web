import {
  BoxContacts,
  BoxEnd,
  BoxTop,
  FooterStyle,
  Line,
  LineStyle,
} from "./styles/styles";

import logo from "../../assets/images/logo_light.png";
import { Icones } from "../Icones/Icones";

import figma from "../../assets/icones/figma.svg";

const iconsContacts = [
  {
    image: figma,
    title: "Figma",
  },
];

export const Footer = () => {
  return (
    <FooterStyle>
      <BoxTop>
        <div>
          <img
            className="banner-image"
            src={logo}
            alt="Imagem Banner"
            width={"90px"}
            height={"100px"}
          />
        </div>
        <div>
          <p>Home</p>
          <p>Projetos</p>
          <p>Páginas Webs</p>
        </div>
      </BoxTop>
      <LineStyle>
        <Line></Line>
      </LineStyle>
      <BoxContacts>
        {iconsContacts.map((icon, index) => (
          <Icones key={index} image={icon.image} title={icon.title} />
        ))}
      </BoxContacts>
      <BoxEnd>
        <p> &copy; 2024 MARIZA L. SOUZA Todos os direitos reservados.</p>
      </BoxEnd>
    </FooterStyle>
  );
};
