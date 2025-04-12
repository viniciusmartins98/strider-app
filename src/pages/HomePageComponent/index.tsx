import { Button } from "react-bootstrap";
import { useAuthContext } from "../../contexts/authContext";
import useWeatherService from "../../services/weather/hooks/useWeatherService";
import './styles.scss';

export default function HomePageComponent() {
  const authContext = useAuthContext();
  const { weatherForecasts, fetchWeatherForecasts } = useWeatherService();

  function logout() {
    authContext.logout();
  }

  return (
    <div className="page-content">
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
      <div className="button-container">
        <Button variant="primary" onClick={fetchWeatherForecasts}>Refresh</Button>
        <Button variant="secondary" onClick={logout}>Logout</Button>
      </div>
    </div>
  )
}
