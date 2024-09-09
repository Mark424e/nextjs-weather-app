"use client";

import { WeatherData } from "@/types/weather";
import { Eye } from "lucide-react";

interface VisibilityProps {
  weather: WeatherData;
}

const Visibility: React.FC<VisibilityProps> = ({ weather }) => {
  return (
    <div className="p-8 border rounded-3xl">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <p className="text-text/30">Visibility</p>
        </div>
      </div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <Eye className="min-h-[3.5rem] min-w-[3.5rem]" size="icon" />
        </div>
        <div>
          <p className="text-2xl">
            <span className="text-4xl">{weather.visibility / 1000}</span>km
          </p>
        </div>
      </div>
    </div>
  );
};

export default Visibility;
