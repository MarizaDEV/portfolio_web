import { MenuStyled } from "./styles/styles";

export const NavBar = () => {
  return (
    <>
      <MenuStyled>
        <ul>
          <li>
            <a href="#">
              <img src="./logo-light.png" />
            </a>
          </li>
          <li>
            <a href="default.asp">Home</a>
          </li>
          <li>
            <a href="news.asp">Projetos</a>
          </li>
          <li>
            <a href="contact.asp">Páginas Webs</a>
          </li>
        </ul>
      </MenuStyled>
    </>
  );
};
