import { NavBar } from "../../shared/components/Navbar/NavBar";
import { Box1, Box2, Box3, BoxTop, Container } from "./styles/styles";

export const Home = () => {
  return (
    <>
      <Container>
        <BoxTop>
          <Box1>
            <NavBar />
          </Box1>
          <Box2>
            {" "}
            <h1>WEB DESIGNER & DEVELOPER</h1>
          </Box2>
          <Box3>
            <h1>
              Meu nome é Mariza, sou desenvolvedora front-end e designer UI e
              UX. Minhas formações são ensino Técnico em Administração, ensino
              Técnico em Informática e graduação em Gestão de Cooperativas.
            </h1>
          </Box3>
        </BoxTop>
      </Container>
    </>
  );
};
