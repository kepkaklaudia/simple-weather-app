import styled from "styled-components";

export const Loader = styled.p`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin: 10px auto;
  animation: animatedLoader 1s linear infinite alternate;
  
  @keyframes animatedLoader {
    0% {
      box-shadow: -38px -12px,  -14px 0,  14px 0, 38px 0;
    }
    33% {
      box-shadow: -38px 0px, -14px -12px,  14px 0, 38px 0;
    }
    66% {
      box-shadow: -38px 0px, -14px 0, 14px -12px, 38px 0;
    }
    100% {
      box-shadow: -38px 0, -14px 0, 14px 0, 38px -12px;
    }
  }
`;