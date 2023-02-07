import styled from "styled-components";

export const Input = styled.input`
  background-color: rgba(225, 225, 225, 0.3);
  color: white;
  padding: 5px;
  border-radius: 10px;
  text-align: center;
  border: 1px solid white;

  :focus {
    outline: 1px solid white;
  }
  ::placeholder {
    color: rgba(225, 225, 225, 0.9);
  }
`;

export const StyledForm = styled.form`
  padding-top: 25px;
  margin-left: 45px;

  @media (max-width: 300px) {
    margin: 0 35px;
  }
`;

export const StyledButton = styled.button`
  padding: 10px;
  margin-left: 15px;
  width: 40px;
  height: 40px;
  border: none;
  cursor: pointer;
  background-color: rgba(225,225,225,0);
`;