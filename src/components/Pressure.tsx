"use client";

import { WeatherData } from "@/types/weather";
import { Waves } from "lucide-react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

interface PressureProps {
  weather: WeatherData;
}

const Pressure: React.FC<PressureProps> = ({ weather }) => {
  return (
    <CardContainer>
      <CardBody>
        <CardItem className="p-8 border rounded-3xl" translateZ={50}>
          <div className="mb-8">
            <div className="flex justify-between items-center">
              <p className="text-text/30">Pressure</p>
            </div>
          </div>
          <div className="flex justify-between items-center mb-8">
            <div>
              <Waves className="min-h-[3.5rem] min-w-[3.5rem]" size="icon" />
            </div>
            <div>
              <p className="text-2xl">
                <span className="text-4xl">{weather.main.pressure}</span>hPa
              </p>
            </div>
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default Pressure;
