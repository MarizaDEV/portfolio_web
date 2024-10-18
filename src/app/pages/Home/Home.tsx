import { useNavigate } from "react-router-dom";
import { Button } from "../../shared/components/Button/Button";
import { NavBar } from "../../shared/components/Navbar/NavBar";
import {
  Box2,
  Box3,
  Box4,
  Box5,
  BoxCenter,
  BoxTop,
  Container,
} from "./styles/styles";
import imgbanner from "../../shared/assets/images/image_banner.png";
import { Icones } from "../../shared/components/Icones/Icones";
import figma from "../../shared/assets/icones/figma.svg";
import html from "../../shared/assets/icones/html.svg";
import css from "../../shared/assets/icones/css.svg";
import react from "../../shared/assets/icones/react.svg";
import javascript from "../../shared/assets/icones/javascript.svg";
import git from "../../shared/assets/icones/git.svg";

const iconsData = [
  { image: figma, title: "Figma" },
  { image: html, title: "HTML5" },
  { image: css, title: "CSS" },
  { image: javascript, title: "JavaScript" },
  { image: react, title: "React" },
  { image: git, title: "Git" },
];

export const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/projetos");
  };
  return (
    <>
      <Container>
        <BoxTop>
          <NavBar />
          <Box2>
            <h1>WEB DESIGNER</h1>
            <h1>& DEVELOPER</h1>
          </Box2>
          <Box3>
            <p>
              Meu nome é Mariza, sou desenvolvedora front-end e designer UI/UX.
            </p>
            <p>
              Minhas formações são ensino Técnico em Administração, ensino
              Técnico em Informática e graduação em Gestão de Cooperativas.
            </p>
            <Button
              label="Projetos"
              onClick={handleClick}
              variant="secondary"
            />
          </Box3>
          <Box4>
            <img
              className="banner-image"
              src={imgbanner}
              alt="Imagem Banner"
              width={"300px"}
            />
          </Box4>{" "}
          <Box5>
            <h1>Tecnologias & Linguagens</h1>
            <div className="icons-ling">
              {iconsData.map((icon, index) => (
                <Icones key={index} image={icon.image} title={icon.title} />
              ))}
            </div>
          </Box5>
        </BoxTop>

        <BoxCenter>
          <p>meio aqui</p>
        </BoxCenter>
      </Container>
    </>
  );
};
