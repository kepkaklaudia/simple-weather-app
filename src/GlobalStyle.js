import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import bg from "./images/bg.jpg";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  body {
    font-family: 'Red Hat Display', sans-serif;
    text-align: center;
    margin: 0 auto;
    color: white;
  }
`;

export const Background = styled.div`
  background-image: url("${bg}");
  background-color: rgba(0, 0, 0, 0.4);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  width: 100%;
  min-height: 100%;
  position: absolute;
`;