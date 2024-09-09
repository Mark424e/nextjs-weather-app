"use client";

import Image from "next/image";
import { AirQualityData } from "@/types/weather";
import { Wind } from "lucide-react";

interface AirQualityProps {
  airQuality: AirQualityData;
}

const AirQuality: React.FC<AirQualityProps> = ({ airQuality }) => {
  const aqiDescription = ["Good", "Fair", "Moderate", "Poor", "Very Poor"][
    airQuality.list[0].main.aqi - 1
  ];

  const getBackgroundColorClass = (description: string) => {
    switch (description) {
      case "Good":
        return "bg-green-600";
      case "Fair":
        return "bg-green-600";
      case "Moderate":
        return "bg-yellow-600";
      case "Poor":
        return "bg-red-600";
      case "Very Poor":
        return "bg-red-600";
      default:
        return "bg-gray-600";
    }
  };

  const backgroundColorClass = getBackgroundColorClass(aqiDescription);

  return (
    <div className="lg:col-span-2 p-8 border rounded-3xl">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <p className="text-text/30">Air Quality Index</p>
          <div
            className={`text-gray-950 ${backgroundColorClass} px-3 rounded-full`}
          >
            <p>{aqiDescription}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between lg:items-center mb-8">
        <div>
          <Wind className="min-h-[3.5rem] min-w-[3.5rem]" size="icon" />
        </div>
        <div className="flex flex-col lg:items-center">
          <p className="text-text/30">PM2.5</p>
          <p className="text-4xl">{airQuality.list[0].components.pm2_5}</p>
        </div>
        <div className="flex flex-col lg:items-center">
          <p className="text-text/30">SO2</p>
          <p className="text-4xl">{airQuality.list[0].components.so2}</p>
        </div>
        <div className="flex flex-col lg:items-center">
          <p className="text-text/30">NO2</p>
          <p className="text-4xl">{airQuality.list[0].components.no2}</p>
        </div>
        <div className="flex flex-col lg:items-center">
          <p className="text-text/30">O3</p>
          <p className="text-4xl">{airQuality.list[0].components.o3}</p>
        </div>
      </div>
    </div>
  );
};

export default AirQuality;
