import { imageNew1 } from "../../shared/assets";
import { Footer, NavBar } from "../../shared/components";
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

        <BoxProjetos>
          <div>
            <h1>Meus Projetos</h1>
          </div>
          <ListImagesProjects>
            <ImageList />
          </ListImagesProjects>
        </BoxProjetos>

        <Footer />
      </Container>
    </>
  );
};
