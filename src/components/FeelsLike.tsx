"use client";

import Image from "next/image";
import { WeatherData } from "@/types/weather";

interface FeelsLikeProps {
  weather: WeatherData;
}

const FeelsLike: React.FC<FeelsLikeProps> = ({ weather }) => {
  return (
    <div className="p-8 bg-accent rounded-3xl">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <p className="text-text/30">Feels Like</p>
        </div>
      </div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <Image
            className="w-[50px] h-[50px]"
            src="/assets/temperature.svg"
            alt="Feels Like Icon"
            width={50}
            height={50}
          />
        </div>
        <div>
          <p className="text-4xl">{Math.round(weather.main.feels_like)}°C</p>
        </div>
      </div>
    </div>
  );
};

export default FeelsLike;
