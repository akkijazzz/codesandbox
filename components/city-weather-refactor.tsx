import { FC, ReactElement, useState, useEffect } from "react";
import { KtoF } from "../utils/common";
const API_KEY = "e621423f966ad2cc1781e92261f72a2e";
interface CityWeatherInterface {
  city?: string;
}

export const CityWeather: FC<CityWeatherInterface> = ({
  city,
}): ReactElement => {
  const [weatherResult, setWeatherResult] = useState([]);
  const [temprature, setTemp] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    async function getWeather() {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      const result = await res?.json();
      console.log(result, "jhasdsad");
      setTemp(KtoF(result?.main?.temp).toFixed(0));
      setDescription(result?.weather[0]?.description);
      setWeatherResult(result);
    }
    getWeather();
  }, [city]);
  console.log(weatherResult);
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="border bg-[#fff] shadow-md rounded-md p-8 text-center">
        <h1 className="uppercase pb-2">{city}</h1>
        <div className="flex justify-center items-center">
          <img
            className="w-20 h-16"
            src="data:image/png;base64,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"
          />
        </div>
        <div className="pt-3"> {description}</div>
        <div>
          <span className="text-xs">Temperature:</span>{" "}
          <span className="text-2xl">{temprature} &#8457;</span>
        </div>
      </div>
    </div>
  );
};
