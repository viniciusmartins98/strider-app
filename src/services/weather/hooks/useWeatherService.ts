import { useCallback, useEffect, useMemo, useState } from "react";
import IWeather from "../interfaces/weather.interface";
import WeatherService from "..";

export default function useWeatherService() {
    const sWeather = useMemo(() => new WeatherService(), []);
    const [weatherForecasts, setWeatherForecasts] = useState<IWeather[]>();

    const fetchWeatherForecasts = useCallback(function () {
        sWeather.listAsync().then((data) => {
            setWeatherForecasts(data);
        });
    }, [sWeather])

    useEffect(() => {
        fetchWeatherForecasts();
    }, [fetchWeatherForecasts, sWeather]);

    return {
        weatherForecasts,
        fetchWeatherForecasts
    };
}