import { useState } from "react";
import axios from "axios";
import { extractData } from "./extractData";

export const useData = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState();

  const submitRequest = (location) => {

    setLoading(true)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
     axios.get(url).then((response) => {
      const extractedData = extractData(response.data)
      setData(extractedData)
      setLoading(false)
      if (!data || data.length === 0) {
        setLoading(false)
        setError("Something went wrong")
      }
    })
  };

  return {
    loading,
    error,
    data,
    submitRequest
  }
};