import styled from "styled-components";
import banner from "../../../shared/assets/images/banner.png";

export const Container = styled.div`
  background: var(white-theme);
  height: 100vh;
`;

export const BoxTop = styled.div`
  background: url(${banner}) no-repeat right top fixed;
  width: 100%;
  height: 100%;
  max-height: 520px;
  background-size: 100% 100%;
`;
