import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 20px 45px;
`;

export const Details = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  padding: 10px 25px;
`;

export const Image = styled.img`
  animation: animatedCloud 2s linear infinite;

  @keyframes animatedCloud  {
    0%, 7% {
      transform: rotateZ(0);
    }
    15% {
      transform: rotateZ(-15deg);
    }
     20% {
      transform: rotateZ(10deg);
    }
    25% {
      transform: rotateZ(-10deg);
    }
    30% {
      transform: rotateZ(6deg);
    }
    35% {
     transform: rotateZ(-4deg);
    }
    40%, 100% {
      transform: rotateZ(0);
    }
  }
`;