export const extractData = data => ({
  city: data.name,
  country: data.sys.country,
  temperature: `${Math.round(data.main.temp)} °C`,
  feelsLike: ` ${Math.round(data.main.feels_like)}°C`,
  description: data.weather[0].description,
  icon: `icons/${data.weather[0].icon}.png`,
  wind: `${data.wind.speed} m/s`,
  humidity: `${data.main.humidity} %`,
  pressure: `${data.main.pressure} hPa`,
  clouds: `${data.clouds.all} %`,
  sunset: new Date(1000 * data.sys.sunset).toLocaleTimeString(),
  sunrise: new Date(1000 * data.sys.sunrise).toLocaleTimeString(),
})