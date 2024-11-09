import { BoxTop, FooterStyle, Line, LineStyle } from "./styles/styles";

import logo from "../../assets/images/logo_light.png";

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
    </FooterStyle>
  );
};
