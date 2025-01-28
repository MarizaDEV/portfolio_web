import { NavLink } from "react-router-dom"; // Importando o NavLink
import { MenuStyled } from "./styles/styles";

export const NavBar = () => {
  return (
    <MenuStyled>
      <ul>
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projetos"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Projetos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/pag-webs"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <span className="full-text">Páginas Webs</span>
            <span className="short-text">Pág. Webs</span>
          </NavLink>
        </li>
      </ul>
    </MenuStyled>
  );
};
