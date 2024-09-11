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

const weatherBackgrounds: Record<string, string> = {
  "clear sky": "bg-sunny",
  "few clouds": "bg-cloudy",
  "scattered clouds": "bg-cloudy",
  "overcast clouds": "bg-cloudy",
  "broken clouds": "bg-cloudy",
  "shower rain": "bg-rainy",
  "light rain": "bg-rainy",
  rain: "bg-rainy",
  thunderstorm: "bg-stormy",
  snow: "bg-snowy",
  mist: "bg-misty",
  // Add more mappings as needed
};

export default function Weather({ city }: WeatherProps) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [bgClass, setBgClass] = useState<string>("");

  useHoverGlow();

  useEffect(() => {
    const getWeather = async () => {
      const data = await fetchWeatherData(city);
      if (typeof data === "string") {
        console.error(data);
        setWeather(null);
        setBgClass("bg-default");
      } else {
        setWeather(data);
        const description = data.weather[0].description.toLowerCase();
        setBgClass(weatherBackgrounds[description] || "bg-default");
      }
    };

    getWeather();
  }, [city]);

  if (!weather) {
    return null;
  }

  const weatherIcon = `/assets/${weather.weather[0].icon}.png`;
  const roundedTemperature = Math.round(weather.main.temp);
  const cityName = weather.name;
  const countryCode = weather.sys.country;
  const formattedLocation = `${cityName}, ${countryCode}`;

  const getCurrentDate = () => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      day: "numeric",
      month: "short",
    };
    return new Date().toLocaleDateString(undefined, options);
  };

  return (
    <CardContainer
      className={`hoverGlow border p-8 rounded-3xl h-fit lg:h-full xl:h-fit text-white ${bgClass}`}
    >
      <CardBody className="flex flex-col justify-between gap-4 h-full">
        <div className="border-b pb-4 space-y-4 lg:space-y-10 xl:space-y-4">
          <h2 className="text-xl font-bold">Now</h2>
          <CardItem translateZ={100} className="flex items-center gap-8">
            <p className="font-semibold text-5xl md:text-7xl lg:text-8xl xl:text-7xl">
              {roundedTemperature}°C
            </p>
            <Image
              className="lg:min-w-24 xl:min-w-[60px]"
              src={weatherIcon}
              alt={weather.weather[0].description}
              width={60}
              height={60}
            />
          </CardItem>
          <p className="capitalize">{weather.weather[0].description}</p>
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
