import { useNavigate } from "react-router-dom";
import { Button } from "../../shared/components/Button/Button";
import { NavBar } from "../../shared/components/Navbar/NavBar";
import { Box1, Box2, Box3, BoxTop, Container } from "./styles/styles";

export const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/projetos");
  };
  return (
    <>
      <Container>
        <BoxTop>
          <Box1>
            <NavBar />
          </Box1>
          <Box2>
            {" "}
            <h1>WEB DESIGNER</h1>
            <h1>& DEVELOPER</h1>
          </Box2>
          <Box3>
            <p>
              Meu nome é Mariza, sou desenvolvedora front-end e designer UI e
              UX.
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
        </BoxTop>
      </Container>
    </>
  );
};
