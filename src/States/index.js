import { Wrapper, Details, Image } from "./styled";

export const State = ({ info, additional, alt, src, }) => (
  <>
    <Wrapper>
      <Details>
        <p>{info}</p>
        <Image alt={alt} src={`simple-weather-app/icons/${src}.png`} />
        {additional}
      </Details>
    </Wrapper>
  </>
);