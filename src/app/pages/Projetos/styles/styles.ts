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
  height: 530px;
`;

export const BoxImagesNew = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 20px 0;
  gap: 10px;

  img {
    width: 250px;
    height: 350px;
  }

  .Image-2 img {
  }
`;
