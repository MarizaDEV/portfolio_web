import styled from "styled-components";

export const MenuStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  width: 100%;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 600px;
    list-style-type: none;
    margin: 15px;
    padding: 0;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 40px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }

  li {
    float: left;
    border-radius: 20px;
    overflow: hidden;
  }

  li img {
    width: 48px;
    height: 50px;
  }

  li a {
    display: block;
    color: #ffffff;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    transition: color 0.3s ease, background-color 0.3s ease, transform 0.3s ease;
  }

  li a:hover {
    transform: translateY(-3px);
  }

  .short-text {
    display: none;
  }

  @media (max-width: 400px) {
    font-size: 0.75rem;
  }

  @media (max-width: 600px) {
    .full-text {
      display: none;
    }
    .short-text {
      display: inline;
    }
  }
`;
