import styled from "styled-components";

export const BoxImagens = styled.div`
  background: red;
  width: 100%;
  max-width: 620px;
  height: 420px;
  position: relative;
  padding-bottom: 20px;
  margin: 0 auto;
  border-radius: 5px;

  .banner-image {
    width: 100%;
    height: 300px;
    object-fit: cover;
    transition: opacity 0.5s ease-in-out;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    height: 350px;
    .banner-image {
      height: 250px;
    }
  }

  @media (max-width: 480px) {
    height: 270px;
    .banner-image {
      height: 190px;
    }
  }
`;

export const ImagensCarrossel = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  position: relative;
  bottom: 8px;

  img {
    width: 130px;
    height: 100px;
    margin: 0 10px;
    cursor: pointer;
    transition: transform 0.3s ease;
    border-radius: 5px;

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
