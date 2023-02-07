import { Wrapper } from "./styled";
import { Detail, Text } from "./styled";

export const Details = ({ humidity, wind, pressure, clouds, sunrise, sunset }) => (
  <Wrapper>
    <Detail>
      <Text>humidity</Text>
      <Text>{humidity}</Text>
    </Detail>
    <Detail>
      <Text>wind</Text>
      <Text>{wind}</Text>
    </Detail>
    <Detail>
      <Text>pressure</Text>
      <Text>{pressure}</Text>
    </Detail>
    <Detail>
      <Text>clouds</Text>
      <Text>{clouds}</Text>
    </Detail>
    <Detail>
      <Text>sunrise</Text>
      <Text>{sunrise}</Text>
    </Detail>
    <Detail>
      <Text>sunset</Text>
      <Text>{sunset}</Text>
    </Detail>
  </Wrapper>
)