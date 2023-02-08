import { useState } from "react";
import axios from "axios";
import { extractData } from "./extractData";

export const useData = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState();

  const submitRequest = async location => {
    setError(false)
    setLoading(true)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    try {
      const response = await axios(url);
      setTimeout(() => {
        setLoading(false);
        const extractedData = extractData(response.data);
        setData(extractedData);
      }, 2000);
    } catch (error) {
      setLoading(false)
      setError(true)
    }
  }

  return {
    loading,
    error,
    data,
    submitRequest
  }
};