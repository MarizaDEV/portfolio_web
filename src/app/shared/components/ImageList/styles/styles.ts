import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 0 16px;
`;

export const BoxContainerImages = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (min-width: 1024px) {
    .boximages {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (max-width: 1024px) and (min-width: 768px) {
    .boximages {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 768px) {
    .boximages {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 480px) {
    .boximages {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 0;
    }
  }
`;

export const BoxImages = styled.div`
  display: grid;
  grid-gap: 10px;
  padding-top: 10px;
  width: 100%;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 8px;

    @media (max-width: 480px) {
      width: 150px;
    }
  }
`;

export const TabStyle = styled.div``;
