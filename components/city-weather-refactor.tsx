import { FC, ReactElement, useState, useEffect } from "react";
import { KtoF } from "../utils/common";
const API_KEY = "e621423f966ad2cc1781e92261f72a2e";
interface CityWeatherInterface {
  city?: string;
}

export const CityWeather: FC<CityWeatherInterface> = ({
  city
}): ReactElement => {
  const [weatherResult, setWeatherResult] = useState([]);

  useEffect(() => {
    async function getWeather() {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      const result = await res?.json();
      console.log(result);
      setWeatherResult(result);
    }
    getWeather();
  }, [city]);
  console.log(weatherResult);
  return (
    <div>
      <h1>{city}</h1>
      <div>
        Temperature: {KtoF(weatherResult?.main?.temp).toFixed(0)} &#8457;
      </div>
      <div>Descripiton: {weatherResult?.weather[0]?.description}</div>
    </div>
  );
};
