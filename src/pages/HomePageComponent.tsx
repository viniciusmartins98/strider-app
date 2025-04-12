import { useAuthContext } from "../contexts/authContext";
import useWeatherService from "../services/weather/hooks/useWeatherService";

export default function HomePageComponent() {
  const authContext = useAuthContext();
  const { weatherForecasts, fetchWeatherForecasts } = useWeatherService();

  function logout() {
    authContext.logout();
  }

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
      <button onClick={fetchWeatherForecasts}>REFRESH</button>
      <br />
      <br />
      <button onClick={logout}>LOGOUT</button>
    </>
  )
}
