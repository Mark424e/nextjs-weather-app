"use client";

import Image from "next/image";
import { WeatherData } from "@/types/weather";

interface HumidityProps {
  weather: WeatherData;
}

const Humidity: React.FC<HumidityProps> = ({ weather }) => {
  return (
    <div className="p-8 bg-accent rounded-3xl">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <p className="text-text/30">Humidity</p>
        </div>
      </div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <Image
            className="w-[50px] h-[50px]"
            src="/assets/droplet.svg"
            alt="Droplet Icon"
            width={50}
            height={50}
          />
        </div>
        <div>
          <p className="text-4xl">{weather.main.humidity}%</p>
        </div>
      </div>
    </div>
  );
};

export default Humidity;
