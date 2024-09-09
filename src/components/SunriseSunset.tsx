"use client";

import Image from "next/image";
import { WeatherData } from "@/types/weather";
import { Moon, Sun } from "lucide-react";

interface SunriseSunsetProps {
  weather: WeatherData;
}

const SunriseSunset: React.FC<SunriseSunsetProps> = ({ weather }) => {
  // Convert Unix timestamp to local time based on timezone offset
  const convertToLocalTime = (timestamp: number, timezoneOffset: number) => {
    const date = new Date((timestamp + timezoneOffset) * 1000);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  // Timezone offset in seconds from UTC
  const timezoneOffset = weather.timezone;

  return (
    <div className="lg:col-span-2 p-8 border rounded-3xl">
      <div className="mb-8">
        <div>
          <p className="text-text/30">Sunrise & Sunset</p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 mb-8">
        <div className="flex items-end justify-between lg:justify-start gap-8">
          <div>
            <Sun className="min-h-[3.5rem] min-w-[3.5rem]" />
          </div>
          <div>
            <p className="text-text/30">Sunrise:</p>
            <p className="text-4xl">
              {convertToLocalTime(weather.sys.sunrise, timezoneOffset)}
            </p>
          </div>
        </div>
        <div className="flex items-end justify-between lg:justify-start gap-8">
          <Moon className="min-h-[3.5rem] min-w-[3.5rem]" />
          <div>
            <p className="text-text/30">Sunset:</p>
            <p className="text-4xl">
              {convertToLocalTime(weather.sys.sunset, timezoneOffset)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SunriseSunset;
