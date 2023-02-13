import { Wrapper } from "./styled";
import { Detail, Text } from "./styled";

export const Details = ({ humidity, wind, pressure, clouds, sunrise, sunset }) => {
  const details = [
    {
      name: "humidity",
      value: humidity
    },
    {
      name: "wind",
      value: wind
    },
    {
      name: "pressure",
      value: pressure
    },
    {
      name: "clouds",
      value: clouds
    },
    {
      name: "sunrise",
      value: sunrise
    },
    {
      name: "sunset",
      value: sunset
    },
  ];

  return (
    <Wrapper>
      {details.map(({ name, value }) => (
        <Detail key={name}>
          <Text>{name}</Text>
          <Text>{value}</Text>
        </Detail>
      ))}
    </Wrapper>
  )
};