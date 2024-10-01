import styled from "styled-components";

export const MenuStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    width: 500px;
    list-style-type: none;
    margin: 40px;
    padding: 0;
    overflow: hidden;
    background-color: rgba(248, 248, 255, 0.2);
    border-radius: 40px;
  }

  li {
    float: left;
  }

  li a {
    display: block;
    color: #ffffff;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  li a:hover {
    background-color: #111;
  }
`;
