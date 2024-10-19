import { useNavigate } from "react-router-dom";
import { Button } from "../../shared/components/Button/Button";
import { NavBar } from "../../shared/components/Navbar/NavBar";
import {
  Box2,
  Box3,
  Box4,
  Box5,
  BoxCenter,
  BoxStyleCards,
  BoxTop,
  Container,
} from "./styles/styles";
import imgbanner from "../../shared/assets/images/image_banner.png";
import figma from "../../shared/assets/icones/figma.svg";
import html from "../../shared/assets/icones/html.svg";
import css from "../../shared/assets/icones/css.svg";
import react from "../../shared/assets/icones/react.svg";
import javascript from "../../shared/assets/icones/javascript.svg";
import git from "../../shared/assets/icones/git.svg";

import setright from "../../shared/assets/icones/setas/setright.png";
import setleft from "../../shared/assets/icones/setas/setleft.png";

import { Icones } from "../../shared/components/Icones/Icones";
import { Cards } from "../../shared/components/Cards/Cards";
import { useState } from "react";
import { Arrow } from "../../shared/components/Icones/styles/styles";

const iconsData = [
  { image: figma, title: "Figma" },
  { image: html, title: "HTML5" },
  { image: css, title: "CSS" },
  { image: javascript, title: "JavaScript" },
  { image: react, title: "React" },
  { image: git, title: "Git" },
];

const cardsData = [{ image: figma, text: "Floricultura Lua" }];

export const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/projetos");
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 5;

  const handleNext = () => {
    if (currentIndex + itemsPerPage < iconsData.length) {
      setCurrentIndex((prevIndex) => prevIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex((prevIndex) => prevIndex - itemsPerPage);
    }
  };

  const displayedIcons = iconsData.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

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
              <Arrow onClick={handlePrev} disabled={currentIndex === 0}>
                <img
                  className="set-image"
                  src={setleft}
                  alt="seta esquerda"
                  width={"25px"}
                />
              </Arrow>
              {displayedIcons.map((icon, index) => (
                <Icones key={index} image={icon.image} title={icon.title} />
              ))}
              <Arrow
                onClick={handleNext}
                disabled={currentIndex + itemsPerPage >= iconsData.length}
              >
                <img
                  className="set-image"
                  src={setright}
                  alt="seta direita"
                  width={"25px"}
                />
              </Arrow>
            </div>
          </Box5>
        </BoxTop>

        <BoxCenter>
          <BoxStyleCards>
            <div className="Cards">
              {cardsData.map((card, index) => (
                <Cards key={index} image={card.image} text={card.text} />
              ))}
            </div>
            <div className="Cards">
              {cardsData.map((card, index) => (
                <Cards key={index} image={card.image} text={card.text} />
              ))}
            </div>
            <div className="Cards">
              {cardsData.map((card, index) => (
                <Cards key={index} image={card.image} text={card.text} />
              ))}
            </div>
            <div className="Cards">
              {cardsData.map((card, index) => (
                <Cards key={index} image={card.image} text={card.text} />
              ))}
            </div>
          </BoxStyleCards>
        </BoxCenter>
      </Container>
    </>
  );
};
