import styled from "styled-components";

export const Arrow = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  margin-bottom: -3px;
  border-bottom: 3px solid white;
  border-right: 3px solid white;
  animation: animate 1.5s infinite;
  @keyframes animate {
    0% {
      opacity: 0;
      transform: rotate(315deg) translate(-12px, -12px);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: rotate(315deg) translate(2px, 2px);
    }
  }
`;