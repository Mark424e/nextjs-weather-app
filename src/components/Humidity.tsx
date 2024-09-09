"use client";

import { WeatherData } from "@/types/weather";
import { Droplets } from "lucide-react";

interface HumidityProps {
  weather: WeatherData;
}

const Humidity: React.FC<HumidityProps> = ({ weather }) => {
  return (
    <div className="p-8 border rounded-3xl">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <p className="text-text/30">Humidity</p>
        </div>
      </div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <Droplets className="min-h-[3.5rem] min-w-[3.5rem]" size="icon" />
        </div>
        <div>
          <p className="text-2xl">
            <span className="text-4xl">{weather.main.humidity}</span>%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Humidity;
