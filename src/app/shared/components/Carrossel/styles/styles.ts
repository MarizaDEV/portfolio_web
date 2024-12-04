import styled from "styled-components";

export const BoxImagens = styled.div`
  background: red;
  width: 100%;
  max-width: 500px;
  height: 350px;
  position: relative;
  padding-bottom: 20px;
  margin: 0 auto;

  .banner-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: opacity 0.5s ease-in-out;
  }

  @media (max-width: 768px) {
    height: 250px;
    .banner-image {
      height: 150px;
    }
  }

  @media (max-width: 480px) {
    height: 200px;
    .banner-image {
      height: 120px;
    }
  }
`;

export const ImagensCarrossel = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  position: absolute;
  bottom: 10px;

  img {
    width: 100px;
    height: 100px;
    margin: 0 10px;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }

  @media (max-width: 768px) {
    img {
      width: 80px;
      height: 80px;
    }
  }

  @media (max-width: 480px) {
    img {
      width: 60px;
      height: 60px;
    }
  }
`;
