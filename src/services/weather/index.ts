import config from "../../config";
import IWeather from "./interfaces/weather.interface";
import axios from 'axios';

class WeatherService {
    private _baseUrl = config.apiBaseUrl.endsWith('/') ? config.apiBaseUrl : `${config.apiBaseUrl}/`;

    async listAsync(): Promise<IWeather[]> {
        const response = await axios.get<IWeather[]>(`${this._baseUrl}weatherForecast`);
        return response.data;
    }
}

export default WeatherService;