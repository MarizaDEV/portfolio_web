import { imageNew1 } from "../../shared/assets";
import { NavBar } from "../../shared/components";
import { BoxImagesNew, BoxTopProjects, Container } from "./styles/styles";

export const Projetos = () => {
  return (
    <>
      <Container>
        <BoxTopProjects>
          <NavBar />
          <BoxImagesNew>
            <img
              className="Image-1"
              src={imageNew1}
              alt="Imagens-novos-projetos"
            />
            <img
              className="Image-2"
              src={imageNew1}
              alt="Imagens-novos-projetos"
            />
            <img
              className="Image-3"
              src={imageNew1}
              alt="Imagens-novos-projetos"
            />
          </BoxImagesNew>
        </BoxTopProjects>
      </Container>
    </>
  );
};
