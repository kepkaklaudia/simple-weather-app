import { useState } from "react";
import { Arrow } from "./Arrow";
import { StyledForm, Input, StyledButton } from "./styled";

export const Form = ({ submitSearch }) => {
  const [location, setLocation] = useState("");
  const onInputChange = ({ target }) => setLocation(target.value);

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (!location || location.trim() === "")
      return setLocation("");

    submitSearch(location);
    setLocation("");
  }

  return (
    <StyledForm
      onSubmit={onFormSubmit}
    >
      <Input
        type="text"
        value={location}
        onChange={onInputChange}
        placeholder="Enter location"
        autoFocus
      >
      </Input>
      <StyledButton
        onClick={onFormSubmit}
      >
        <Arrow />
      </StyledButton>
    </StyledForm>
  );
};