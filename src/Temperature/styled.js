import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 100px 100px 50px;
  justify-content: center;
`;

export const Icon = styled.p`
  grid-row: 1 / 3;
  grid-column: 2;
  align-self: start;
  margin-top: -20px;
`;

export const Description = styled.p`
  transform: rotate(330deg);
  grid-row: 1 / 3;
  grid-column: 3;
  margin-top: 90px;
`;

export const Heading = styled.h2`
  margin-top: 10px;
  margin-bottom: 0;
`;

export const Text = styled.p`
  margin-top: 0px;
`;