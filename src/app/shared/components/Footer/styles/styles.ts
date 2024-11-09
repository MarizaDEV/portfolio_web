import styled from "styled-components";

export const FooterStyle = styled.div`
  width: 100%;
  height: 300px;
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
  padding: 20px;
  text-align: center;
`;

export const LineStyle = styled.div`
  margin: 0 40px;
`;

export const Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-bottom: 2px solid #ffffff;
`;
