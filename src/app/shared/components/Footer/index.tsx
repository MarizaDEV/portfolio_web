import {
  BoxContacts,
  BoxEnd,
  BoxTop,
  FooterStyle,
  Line,
  LineStyle,
} from "./styles/styles";

import logo from "../../assets/images/logo_light.png";

import Instagram from "../../assets/iconsRedesSociais/instagram.svg";
import linkedin from "../../assets/iconsRedesSociais/linkedin.svg";
import git from "../../assets/iconsRedesSociais/git.svg";

import { IconFooter } from "../IconFooter";

const iconsContacts = [
  { image: Instagram },
  { image: linkedin },
  { image: git },
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
            width={"80px"}
            height={"80px"}
          />
        </div>
        <div>
          <p>Home</p>
          <p>Projetos</p>
          <p>Páginas Webs</p>
        </div>
      </BoxTop>

      <BoxContacts>
        {iconsContacts.map((icon, index) => (
          <IconFooter key={index} image={icon.image} />
        ))}
      </BoxContacts>
      <BoxEnd>
        <p> &copy; 2024 MARIZA L. SOUZA Todos os direitos reservados.</p>
      </BoxEnd>
    </FooterStyle>
  );
};
