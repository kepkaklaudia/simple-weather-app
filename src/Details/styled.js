import styled from "styled-components";

export const Wrapper = styled.div`
display: grid;
grid-template-columns: repeat(3, 150px);
grid-gap: 20px;
margin: 0 auto;
padding: 80px 20px;
justify-content: center;
  display: grid;
  grid-template-columns: repeat(3, 150px);
  grid-gap: 20px;
  margin: 0 auto;
  padding: 80px 20px;
  justify-content: center;
@media (max-width: 600px) {
  grid-template-columns: repeat(2, 150px);
}
@media (max-width: 380px) {
  grid-template-columns: repeat(1, 150px);
}
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 150px);
  }
  
  @media (max-width: 380px) {
    grid-template-columns: repeat(1, 150px);
  }
`;

export const Detail = styled.div`
background-color: yellow;
border-radius: 20px;
padding: 5px;
  background-color: yellow;
  border-radius: 20px;
`;

export const Text = styled.p`
  margin: 15px;
`;