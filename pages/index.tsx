import { useState } from "react";
import { CityWeather } from "../components/city-weather-refactor";

export default function IndexPage() {
  const [city, setCity] = useState<string | null>(null);
  return (
    <div className="py-2 bg-[#e3e8ef] h-full">
      <form
        className="flex items-center justify-center"
        onSubmit={(e) => {
          e.preventDefault();
          const formdata = new FormData(e.currentTarget);
          setCity(formdata.get("city").toString());
        }}
      >
        <span>Weather Search:</span>{" "}
        <input
          data-testid="weather-input"
          className="ml-2 border px-2 py-1 bg-[#fff]"
          type="text"
          name="city"
        />
        <button
          className="text-sm text-white uppercase rounded-lg p-2 bg-[#4683c8]"
          type="submit"
        >
          Submit
        </button>
      </form>

      {city && (
        <div className="mt-4">
          <CityWeather city={city} />
        </div>
      )}
    </div>
  );
}
