import { useState, useEffect } from "react";
import axios from "axios";

const useFetchWeather = () => {
    const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    setCity(res.data.city);
  };

  const request = async (url) => {
    const response = await fetch(url);
    return response.ok ? response.json() : Promise.reject({ error: 500 });
  };

  const getWeather = async() => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a595039c3c07edcd680fc76cf99cdbbd`;
      const response = await request(url);
      setWeather(Math.floor(JSON.stringify(response.main.temp)));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
    getWeather();
  });
  
  return weather;
};

export default useFetchWeather;