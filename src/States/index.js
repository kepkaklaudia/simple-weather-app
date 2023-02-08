import { Wrapper, Details, Image } from "./styled";

export const State = ({ info, additional, alt, src, }) => (
  <>
    <Wrapper>
      <Details>
        <p>{info}</p>
        <Image alt={alt} src={`${process.env.PUBLIC_URL}/icons/${src}.png`} />
        {additional}
      </Details>
    </Wrapper>
  </>
);