import styled from "styled-components";

export const FooterStyle = styled.div`
  width: 100%;
  height: auto;
  background: radial-gradient(
    circle,
    rgba(14, 24, 41, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  color: aliceblue;
`;

export const BoxTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px;
  text-align: center;
  object-fit: cover;
`;

export const LineStyle = styled.div`
  margin: 0 40px;
`;

export const BoxContacts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 30px;
  padding: 40px 0;
`;

export const BoxEnd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 40px;
  text-align: center;
  background: #000000;
  font-size: 12px;
`;
