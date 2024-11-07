"use client";

import { Droplets } from "lucide-react";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

import { useHoverGlow } from "@/hooks/useHoverGlow";

import { WeatherData } from "@/types/weather";

interface HumidityProps {
  weather: WeatherData;
}

const Humidity: React.FC<HumidityProps> = ({ weather }) => {
  useHoverGlow();
  return (
    <CardContainer>
      <CardBody>
        <CardItem className="hoverGlow p-8 border bg-card dark:bg-none rounded-3xl" translateZ={50}>
          <div className="mb-8">
            <div className="flex justify-between items-center">
              <p className="text-text/30">Humidity</p>
            </div>
          </div>
          <div className="flex justify-between items-center mb-8">
            <div>
              <Droplets className="min-h-[2.5rem] min-w-[2.5rem] md:min-h-[3.5rem]" size="icon" />
            </div>
            <div>
              <p className="text-2xl">
                <span className="text-2xl md:text-4xl">{weather.main.humidity}</span>%
              </p>
            </div>
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default Humidity;
