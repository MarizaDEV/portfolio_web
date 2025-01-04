import { imageNew1 } from "../../shared/assets";
import { NavBar } from "../../shared/components";
import ImageList from "../../shared/components/ImageList";
import {
  BoxImagesNew,
  BoxProjetos,
  BoxTopProjects,
  Container,
  ListImagesProjects,
} from "./styles/styles";

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
        <h1>PROJETOS</h1>
        <BoxProjetos>
          <ListImagesProjects>
            {" "}
            <ImageList />
          </ListImagesProjects>
        </BoxProjetos>
      </Container>
    </>
  );
};
