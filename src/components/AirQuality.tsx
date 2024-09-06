"use client";

import Image from "next/image";
import { AirQualityData } from "@/types/weather";

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
    <div className="col-span-2 p-8 bg-accent rounded-3xl">
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
      <div className="flex justify-between items-center mb-8">
        <div>
          <Image
            className="w-[50px] h-[50px]"
            src="/assets/wind.svg"
            alt="Wind Icon"
            width={50}
            height={50}
          />
        </div>
        <div className="flex flex-col items-center">
          <p className="text-text/30">PM2.5</p>
          <p className="text-4xl">{airQuality.list[0].components.pm2_5}</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-text/30">SO2</p>
          <p className="text-4xl">{airQuality.list[0].components.so2}</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-text/30">NO2</p>
          <p className="text-4xl">{airQuality.list[0].components.no2}</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-text/30">O3</p>
          <p className="text-4xl">{airQuality.list[0].components.o3}</p>
        </div>
      </div>
    </div>
  );
};

export default AirQuality;
