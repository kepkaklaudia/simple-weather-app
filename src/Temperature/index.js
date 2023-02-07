import { Wrapper, Description, Icon, Heading, Text } from "./styled";

export const Temperature = ({ temperature, feelsLike, description, icon }) => (
  <Wrapper>
    <Heading>
      {temperature}
    </Heading>
    <Text>
      feels like
      {feelsLike}
    </Text>
    <Icon>
      <img
        alt="weatherIcon"
        src={icon}
      />
    </Icon>
    <Description>
      {description}
    </Description>
  </Wrapper>
)