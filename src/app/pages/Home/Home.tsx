import { NavBar } from "../../shared/components/Navbar/NavBar";
import { Box1, BoxTop, Container } from "./styles/styles";

export const Home = () => {
  return (
    <>
      <Container>
        <BoxTop>
          <Box1>
            <NavBar />
          </Box1>
        </BoxTop>
      </Container>
    </>
  );
};
