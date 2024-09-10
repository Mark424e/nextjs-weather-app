"use client";

import { Wind } from "lucide-react";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

import { useHoverGlow } from "@/hooks/useHoverGlow";

import { AirQualityData } from "@/types/weather";

interface AirQualityProps {
  airQuality: AirQualityData;
}

const AirQuality: React.FC<AirQualityProps> = ({ airQuality }) => {
  useHoverGlow();
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
    <div className="lg:col-span-2">
      <CardContainer>
        <CardBody>
          <CardItem className="hoverGlow p-8 border rounded-3xl" translateZ={50}>
            <div className="mb-8">
              <div className="flex flex-col md:justify-between md:flex-row md:items-center space-y-4 md:space-y-0">
                <p>Air Quality Index</p>
                <div
                  className={`text-gray-950 ${backgroundColorClass} px-3 rounded-full w-fit`}
                >
                  <p>{aqiDescription}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between lg:items-center space-y-4 md:space-y-0 mb-8">
              <div>
                <Wind className="hidden md:block min-h-[3.5rem] min-w-[3.5rem]" />
              </div>
              <div className="flex flex-col lg:items-center">
                <p className="opacity-50">PM2.5</p>
                <p className="text-2xl md:text-4xl">
                  {airQuality.list[0].components.pm2_5}
                </p>
              </div>
              <div className="flex flex-col lg:items-center">
                <p className="opacity-50">SO2</p>
                <p className="text-2xl md:text-4xl">
                  {airQuality.list[0].components.so2}
                </p>
              </div>
              <div className="flex flex-col lg:items-center">
                <p className="opacity-50">NO2</p>
                <p className="text-2xl md:text-4xl">
                  {airQuality.list[0].components.no2}
                </p>
              </div>
              <div className="flex flex-col lg:items-center">
                <p className="opacity-50">O3</p>
                <p className="text-2xl md:text-4xl">
                  {airQuality.list[0].components.o3}
                </p>
              </div>
            </div>
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
  );
};

export default AirQuality;
