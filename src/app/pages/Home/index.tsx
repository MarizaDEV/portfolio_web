import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box2,
  Box3,
  Box4,
  Box5,
  BoxCenter,
  BoxStyleCards,
  BoxTop,
  CarrosselStyle,
  Container,
} from "./styles/styles";

import {
  css,
  figma,
  git,
  html,
  imgbanner,
  javaScript,
  react,
  setleft,
  setright,
} from "../../shared/assets";

import {
  Arrow,
  Button,
  Cards,
  Carrossel,
  Footer,
  Icones,
  NavBar,
} from "../../shared/components";

const iconsData = [
  { image: figma, title: "Figma" },
  { image: html, title: "HTML5" },
  { image: css, title: "CSS" },
  { image: javaScript, title: "JavaScript" },
  { image: react, title: "React" },
  { image: git, title: "Git" },
];

const cardsData = [
  { image: figma, text: "Floricultura Lua", link: "https://.com" },
];

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
                <img className="set-image" src={setleft} alt="seta esquerda" />
              </Arrow>
              {displayedIcons.map((icon, index) => (
                <Icones key={index} image={icon.image} title={icon.title} />
              ))}
              <Arrow
                onClick={handleNext}
                disabled={currentIndex + itemsPerPage >= iconsData.length}
              >
                <img className="set-image" src={setright} alt="seta direita" />
              </Arrow>
            </div>
          </Box5>
        </BoxTop>

        <BoxCenter>
          <BoxStyleCards>
            <div className="Cards">
              {cardsData.map((card, index) => (
                <Cards
                  key={index}
                  image={card.image}
                  text={card.text}
                  link={card.link}
                />
              ))}
            </div>
            <div className="Cards">
              {cardsData.map((card, index) => (
                <Cards
                  key={index}
                  image={card.image}
                  text={card.text}
                  link={card.link}
                />
              ))}
            </div>
            <div className="Cards">
              {cardsData.map((card, index) => (
                <Cards
                  key={index}
                  image={card.image}
                  text={card.text}
                  link={card.link}
                />
              ))}
            </div>
            <div className="Cards">
              {cardsData.map((card, index) => (
                <Cards
                  key={index}
                  image={card.image}
                  text={card.text}
                  link={card.link}
                />
              ))}
            </div>
          </BoxStyleCards>
          <CarrosselStyle>
            <Carrossel />
          </CarrosselStyle>
        </BoxCenter>
        <Footer />
      </Container>
    </>
  );
};
