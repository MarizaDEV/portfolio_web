import { useState } from "react";
import { MenuStyled } from "./styles/styles";
import Logo from "../../../shared/assets/images/logo_light.png";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MenuStyled>
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? "open" : ""}`} />
          <div className={`bar ${isOpen ? "open" : ""}`} />
          <div className={`bar ${isOpen ? "open" : ""}`} />
        </div>

        <ul className={isOpen ? "open" : ""}>
          <li>
            <a href="#">
              <img src={Logo} alt="Logo" />
            </a>
          </li>
          <li>
            <a href="portfolio-web/home">Home</a>
          </li>
          <li>
            <a href="portfolio-web/home">Projetos</a>
          </li>
          <li>
            <a href="portfolio-web/home">Páginas Webs</a>
          </li>
        </ul>
      </MenuStyled>
    </>
  );
};
