"use client";

import { WeatherData } from "@/types/weather";
import { Thermometer } from "lucide-react";

interface FeelsLikeProps {
  weather: WeatherData;
}

const FeelsLike: React.FC<FeelsLikeProps> = ({ weather }) => {
  return (
    <div className="p-8 border rounded-3xl">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <p className="text-text/30">Feels Like</p>
        </div>
      </div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <Thermometer className="min-h-[3.5rem] min-w-[3.5rem]" size="icon" />
        </div>
        <div>
          <p className="text-2xl">
            <span className="text-4xl">
              {Math.round(weather.main.feels_like)}
            </span>
            °C
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeelsLike;
