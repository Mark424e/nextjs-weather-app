"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

import { useHoverGlow } from "@/hooks/useHoverGlow";

import { WeatherData } from "@/types/weather";

import { fetchWeatherData } from "@/utils/weatherApi";

interface WeatherProps {
  city: string;
}

export default function Weather({ city }: WeatherProps) {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useHoverGlow();

  useEffect(() => {
    const getWeather = async () => {
      const data = await fetchWeatherData(city);
      if (typeof data !== "string") {
        setWeather(data);
      }
    };

    getWeather();
  }, [city]);

  if (!weather) {
    return "";
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
    <CardContainer className="hoverGlow border p-8 rounded-3xl h-fit">
      <CardBody className="flex flex-col justify-between gap-4">
        <div className="border-b pb-4 space-y-4">
          <h2 className="text-xl font-bold">Now</h2>
          <CardItem
            translateZ={100}
            className="grid grid-cols-2 items-center gap-4"
          >
            <p className=" text-5xl md:text-7xl">{roundedTemperature}°C</p>
            <Image
              src={weatherIcon}
              alt={weather.weather[0].description}
              width={60}
              height={60}
            />
          </CardItem>
          <p>{weather.weather[0].description}</p>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <Calendar
              className="max-h-[1rem] max-w-[1rem] min-h-[1rem] min-w-[1rem]"
              size="icon"
            />
            <p>{getCurrentDate()}</p>
          </div>
          <div className="flex items-center gap-4">
            <MapPin
              className="max-h-[1rem] max-w-[1rem] min-h-[1rem] min-w-[1rem]"
              size="icon"
            />
            <p>{formattedLocation}</p>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
}
