import { useState } from "react";
import axios from "axios";
import { extractData } from "./extractData";

export const useData = () => {
  const [weatherData, setWeatherData] = useState({});

  const submitRequest = async location => {
    setWeatherData({
      status: "loading",
    });
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    try {
      const response = await axios(url);
      setTimeout(() => {
        setWeatherData({
          status: "loaded",
          data: extractData(response.data)
        });
      }, 2000);
    } catch (error) {
      setWeatherData({
        status: "error",
      });
    }
  }

  return {
    weatherData,
    submitRequest
  }
};