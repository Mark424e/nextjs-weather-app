"use client";

import { useEffect, useState } from "react";
import Weather from "@/components/Weather";
import WeatherDetails from "@/components/WeatherDetails";
import Header from "@/components/Header";
import { fetchWeatherData, fetchForecastData } from "@/utils/weatherApi"; // Grouped imports
import { fetchAirQualityData } from "@/utils/airQualityApi";
import { WeatherData, AirQualityData, ForecastData } from "@/types/weather";
import Forecast from "@/components/Forecast";
import HourlyForecast from "@/components/HourlyForecast";
import Footer from "@/components/Footer";
import Loading from "./loading";

export default function Home() {
  const [city, setCity] = useState("Copenhagen"); // Start with default city
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [airQuality, setAirQuality] = useState<AirQualityData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [forecast, setForecast] = useState<ForecastData | null>(null);
  const [forecastError, setForecastError] = useState<string | null>(null);

  useEffect(() => {
    const getWeatherAndAirQuality = async () => {
      setLoading(true);
      setError(null);

      await new Promise((resolve) => setTimeout(resolve, 1000))

      const weatherData = await fetchWeatherData(city);
      if (typeof weatherData === "string") {
        setError(weatherData);
        setWeather(null);
        setAirQuality(null);
      } else {
        setWeather(weatherData);

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
        setForecastError(forecastData);
        setForecast(null);
      } else {
        setForecast(forecastData);
        setForecastError(null);
      }
    };

    getWeatherAndAirQuality();
    getForecast();
  }, [city]);

  // Function to handle city change from the SearchBar
  const handleSearch = (newCity: string) => {
    setCity(newCity);
  };

  return (
    <main className="p-10">
      <Header onSearch={handleSearch} />{" "}
      <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 my-10 space-y-8 md:space-y-0">
        {loading ? (
          <Loading />
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <>
            <div className="flex flex-col gap-8">
              {weather && <Weather city={city} />}
              {forecastError ? (
                <p className="text-red-500">{forecastError}</p>
              ) : (
                forecast && <Forecast forecast={forecast} />
              )}
            </div>

            <div className="col-span-3 flex flex-col gap-8">
              {weather && airQuality && (
                <>
                  <WeatherDetails weather={weather} airQuality={airQuality} />
                  <HourlyForecast city={city} />
                </>
              )}
            </div>
          </>
        )}
      </div>
      <Footer />
    </main>
  );
}
