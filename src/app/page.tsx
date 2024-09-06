"use client";

import { useEffect, useState } from "react";
import Weather from "@/components/Weather";
import WeatherDetails from "@/components/WeatherDetails";
import Header from "@/components/Header";
import { fetchWeatherData } from "@/utils/weatherApi";
import { fetchAirQualityData } from "@/utils/airQualityApi";
import { WeatherData, AirQualityData, ForecastData } from "@/types/weather";
import { fetchForecastData } from "@/utils/weatherApi";
import Forecast from "@/components/Forecast";

export default function Home() {
  const [city, setCity] = useState("New York");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [airQuality, setAirQuality] = useState<AirQualityData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [forecast, setForecast] = useState<ForecastData | null>(null);
  const [forecastError, setForecastError] = useState<string | null>(null); // New error state for forecast

  useEffect(() => {
    const getWeatherAndAirQuality = async () => {
      setLoading(true);
      setError(null); // Reset error state before fetching data

      const weatherData = await fetchWeatherData(city);
      if (typeof weatherData === "string") {
        setError(weatherData);
        setWeather(null);
        setAirQuality(null);
      } else {
        setWeather(weatherData);

        // Fetch air quality data based on weather coordinates
        const lat = weatherData?.coord?.lat;
        const lon = weatherData?.coord?.lon;
        if (lat !== undefined && lon !== undefined) {
          const airQualityData = await fetchAirQualityData(lat, lon);
          if (typeof airQualityData === "string") {
            setError(airQualityData);
            setAirQuality(null);
          } else {
            setAirQuality(airQualityData);
          }
        } else {
          setError("Unable to fetch air quality data");
        }
      }
      setLoading(false);
    };

    const getForecast = async () => {
      const forecastData = await fetchForecastData(city);

      if (typeof forecastData === "string") {
        setForecastError(forecastData); // Set forecast error message
        setForecast(null); // Clear forecast data in case of error
      } else {
        setForecast(forecastData); // Set forecast data
        setForecastError(null); // Clear forecast error
      }
    };

    getWeatherAndAirQuality();
    getForecast();
  }, [city]);

  const handleSearch = async (newCity: string) => {
    setCity(newCity);
  };

  return (
    <main className="p-10">
      <Header onSearch={handleSearch} />

      <div className="mt-6 grid grid-cols-4 gap-6">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <>
            <div className="flex flex-col gap-6">
              {weather && <Weather city={city} />}

              {forecastError ? (
                <p className="text-red-500">{forecastError}</p>
              ) : (
                forecast && <Forecast forecast={forecast} />
              )}
            </div>
            {weather && airQuality && (
              <WeatherDetails weather={weather} airQuality={airQuality} />
            )}
          </>
        )}
      </div>
    </main>
  );
}
