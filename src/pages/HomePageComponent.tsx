import { useEffect, useMemo, useState } from "react";
import IWeather from "../services/weather/interfaces/weather";
import WeatherService from "../services/weather";

export default function HomePageComponent() {
  const sWeather = useMemo(() => new WeatherService(), []);

  const [weatherForecasts, setWeatherForecasts] = useState<IWeather[]>();

  useEffect(() => {
    sWeather.listAsync().then((data) => {
      setWeatherForecasts(data);
    });
  }, [sWeather]);

  return (
    <>
      <h1>Weather Forecast</h1>
      {weatherForecasts?.map((weather, index) => (
        <div className="forecast-item" key={index}>
          <strong>Date: </strong>
          <span>{weather.date.toString()}</span>
          <br />
          <strong>Temperature (C): </strong>
          <span>{weather.temperatureC}</span>
          <br />
          <strong>Temperature (F): </strong>
          <span>{weather.temperatureF}</span>
          <br />
          <strong>Summary: </strong>
          <span>{weather.summary}</span>
          <br />
          <br />
        </div>
      ))}
    </>
  );
}
