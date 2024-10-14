import { MenuStyled } from "./styles/styles";
import Logo from "../../../shared/assets/images/logo_light.png";

export const NavBar = () => {
  return (
    <>
      <MenuStyled>
        <ul>
          <li>
            <a href="#">
              <img src={Logo} />
            </a>
          </li>
          <li>
            <a href="portfolio-web/home">Home</a>
          </li>
          <li>
            <a href="portfolio-web/home">Projetos</a>
          </li>
          <li>
            <a href="portfolio-web/home">
              <span className="full-text">Páginas Webs</span>
              <span className="short-text">Pág. Webs</span>
            </a>
          </li>
        </ul>
      </MenuStyled>
    </>
  );
};
