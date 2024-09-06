"use client";

import Image from "next/image";
import { WeatherData } from "@/types/weather";

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
    <div className="lg:col-span-2 p-8 bg-accent rounded-3xl">
      <div className="mb-8">
        <div>
          <p className="text-text/30">Sunrise & Sunset</p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 mb-8">
        <div className="flex items-end justify-between lg:justify-start gap-8">
          <div>
            <Image
              className="min-w-[50px] h-[50px]"
              src="/assets/sun.svg"
              alt="Sun Icon"
              width={50}
              height={50}
            />
          </div>
          <div>
            <p className="text-text/30">Sunrise:</p>
            <p className="text-4xl">
              {convertToLocalTime(weather.sys.sunrise, timezoneOffset)}
            </p>
          </div>
        </div>
        <div className="flex items-end justify-between lg:justify-start gap-8">
          <Image
            className="min-w-[50px] h-[50px]"
            src="/assets/moon.svg"
            alt="Moon Icon"
            width={50}
            height={50}
          />
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
