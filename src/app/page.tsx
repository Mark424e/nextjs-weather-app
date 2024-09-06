"use client";

import { useEffect, useState } from 'react';
import Weather from '@/components/Weather';
import WeatherDetails from '@/components/WeatherDetails';
import Header from '@/components/Header';
import { fetchWeatherData } from '@/utils/weatherApi';
import { fetchAirQualityData } from '@/utils/airQualityApi';
import { WeatherData, AirQualityData } from '@/types/weather';

export default function Home() {
  const [city, setCity] = useState('New York');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [airQuality, setAirQuality] = useState<AirQualityData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getWeatherAndAirQuality = async () => {
      setLoading(true);
      setError(null); // Reset error state before fetching data

      const weatherData = await fetchWeatherData(city);
      if (typeof weatherData === 'string') {
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
          if (typeof airQualityData === 'string') {
            setError(airQualityData);
            setAirQuality(null);
          } else {
            setAirQuality(airQualityData);
          }
        } else {
          setError('Unable to fetch air quality data');
        }
      }
      setLoading(false);
    };

    getWeatherAndAirQuality();
  }, [city]);

  const handleSearch = async (newCity: string) => {
    setCity(newCity);
  };

  return (
    <main className="p-10">
      <Header onSearch={handleSearch} />

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <>
            {weather && <Weather city={city} />}
            {weather && airQuality && <WeatherDetails weather={weather} airQuality={airQuality} />}
          </>
        )}
      </div>
    </main>
  );
}
