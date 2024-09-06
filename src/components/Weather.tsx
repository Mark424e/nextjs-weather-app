"use client";

import { useEffect, useState } from "react";
import { fetchWeatherData } from "@/utils/weatherApi";
import { WeatherData } from "@/types/weather";
import Image from "next/image";

interface WeatherProps {
  city: string;
}

export default function Weather({ city }: WeatherProps) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getWeather = async () => {
      setLoading(true);
      const data = await fetchWeatherData(city);
      if (typeof data !== "string") {
        setWeather(data);
      }
      setLoading(false);
    };

    getWeather();
  }, [city]);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (!weather) {
    return <p>No weather data available.</p>;
  }

  const weatherIcon = `/assets/${weather.weather[0].icon}.png`;
  const roundedTemperature = Math.round(weather.main.temp);
  const cityName = weather.name;
  const countryCode = weather.sys.country;
  const formattedLocation = `${cityName}, ${countryCode}`;

  // Function to get the current date in the format "Friday 6, Sep"
  const getCurrentDate = () => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      day: "numeric",
      month: "short",
    };
    return new Date().toLocaleDateString(undefined, options);
  };

  return (
    <div className="bg-card p-8 rounded-3xl h-fit">
      <div className="flex flex-col justify-between gap-4">
        <div className="border-b border-gray-700/50 pb-4">
          <h2 className="text-xl font-bold mb-4">Now</h2>
          <div className="flex items-center gap-4">
            <p className="text-5xl">{roundedTemperature}°C</p>
            <Image
              src={weatherIcon}
              alt={weather.weather[0].description}
              width={50}
              height={50}
            />
          </div>
          <p>{weather.weather[0].description}</p>
        </div>
        <div className="text-text/30 space-y-3">
          <div className="flex items-center gap-4">
            <Image
              src="/assets/calendar.svg"
              alt="Calendar Icon"
              width={15}
              height={15}
            />
            <p>{getCurrentDate()}</p>
          </div>
          <div className="flex items-center gap-4">
            <Image
              src="/assets/location-dot.svg"
              alt="Location Icon"
              width={15}
              height={15}
            />
          <p>{formattedLocation}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
