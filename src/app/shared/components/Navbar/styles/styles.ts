import styled from "styled-components";

export const MenuStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  width: 100%;
  padding-bottom: 30px;

  ul {
    display: flex;
    align-items: center;
    gap: 20px;
    list-style-type: none;
    margin: 25px;
    padding: 0;
    overflow: hidden;
  }

  li {
    float: left;
    overflow: hidden;

    :hover {
      background-color: var(--pink-theme);
      border-radius: 2px;
    }
  }

  li a.active {
    background-color: var(--pink-theme);
    border-radius: 2px;
  }

  li a {
    display: block;
    color: #ffffff;
    text-align: center;
    padding: 3px 10px;
    text-decoration: none;
    transition: color 0.3s ease, transform 0.3s ease;
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
