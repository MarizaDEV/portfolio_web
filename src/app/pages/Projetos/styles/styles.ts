import styled from "styled-components";

export const Container = styled.div`
  background: var(white-theme);
  height: 100vh;
  font-family: "Orbitron", sans-serif;
`;

export const BoxTopProjects = styled.div`
  background: linear-gradient(
    180deg,
    rgba(4, 4, 4, 1) 0%,
    rgba(27, 48, 80, 1) 85%
  );
  width: 100%;
  height: auto;
  padding: 10px 0;
`;

export const BoxImagesNew = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
  gap: 20px;
  flex-wrap: wrap;

  img {
    width: 300px;
    height: 320px;
    box-shadow: 15px 4px 25px rgba(4, 4, 4, 1);
    border-radius: 5px;
  }

  .Image-2 {
    width: 300px;
    height: 380px;
  }

  @media (min-width: 651px) and (max-width: 950px) {
    img {
      width: 200px;
      height: 220px;
    }
    .Image-2 {
      width: 180px;
      height: 260px;
    }
  }
  @media (min-width: 510px) and (max-width: 650px) {
    img {
      width: 150px;
      height: 200px;
    }
    .Image-2 {
      width: 150px;
      height: 230px;
    }
  }
  @media (max-width: 509px) {
    img {
      width: 100px;
      height: 150px;
    }
    .Image-2 {
      width: 100px;
      height: 200px;
    }
  }
  @media (max-width: 355px) {
    img {
      width: 80px;
      height: 150px;
    }
    .Image-2 {
      width: 80px;
      height: 180px;
    }
  }
`;

export const BoxProjetos = styled.div`
  background: linear-gradient(
    180deg,
    rgba(4, 4, 4, 1) 0%,
    rgba(27, 48, 80, 1) 85%
  );
  width: 100%;
  height: auto;
  min-height: 800px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 40px 0;
  flex-direction: column;

  h1 {
    color: #be267a;
    font-size: 38px;
    font-weight: 500;
    padding: 30px 0;
  }
`;

export const ListImagesProjects = styled.div`
  display: flex;
  width: 100%;
`;
