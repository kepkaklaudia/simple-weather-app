import { Details } from "./Details";
import { Location } from "./Location";
import { Temperature } from "./Temperature";
import { Background } from "./GlobalStyle";
import { useData } from "./useData";
import { Form } from "./Form";

function App() {
  const { loading, error, data, submitRequest } = useData();
  const onSubmit = value => submitRequest(value);

  return (
    <>
      <Background>
        <Form submitSearch={onSubmit} />
        {/*loading ? <Loader /> : */}
        {/*error ? <Error/> : */}
        {data &&
          <>
            <Location
              city={data.city}
              country={data.country}
            />
            <Temperature temperature={data.temperature}
              feelsLike={data.feelsLike}
              description={data.description}
              icon={data.icon}
            />
            <Details
              humidity={data.humidity}
              wind={data.wind}
              pressure={data.pressure}
              clouds={data.clouds}
              sunrise={data.sunrise}
              sunset={data.sunset} />
          </>}
      </Background>
    </>
  );
}

export default App;