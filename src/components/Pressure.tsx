"use client";

import Image from "next/image";
import { WeatherData } from "@/types/weather";

interface PressureProps {
  weather: WeatherData;
}

const Pressure: React.FC<PressureProps> = ({ weather }) => {
  return (
    <div className="p-8 bg-accent rounded-3xl">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <p className="text-text/30">Pressure</p>
        </div>
      </div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <Image
            className="min-w-[50px] h-[50px]"
            src="/assets/pressure.svg"
            alt="Pressure Icon"
            width={50}
            height={50}
          />
        </div>
        <div>
          <p className="text-2xl">
            <span className="text-4xl">{weather.main.pressure}</span>hPa
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pressure;
