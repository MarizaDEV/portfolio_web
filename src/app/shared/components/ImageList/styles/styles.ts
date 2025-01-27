import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  padding: 0 16px;
`;

export const BoxContainerImages = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (min-width: 550px) {
    .boximages {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (min-width: 321px) and (max-width: 549px) {
    .boximages {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 320px) {
    .boximages {
      grid-template-columns: repeat(1, 1fr);
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
      width: 100%;
    }
  }
`;

export const TabStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ButtonMais = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;
