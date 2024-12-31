import styled from "styled-components";

export const Container = styled.div`
  background: var(white-theme);
  height: 100vh;
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
  margin: 20px 0;
  gap: 20px;
  flex-wrap: wrap;

  img {
    width: 200px;
    height: 300px;
    box-shadow: 15px 4px 25px rgba(4, 4, 4, 1);
    border-radius: 5px;
  }

  .Image-2 {
    width: 200px;
    height: 350px;
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
