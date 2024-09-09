"use client";

import { WeatherData } from "@/types/weather";
import { Thermometer } from "lucide-react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

interface FeelsLikeProps {
  weather: WeatherData;
}

const FeelsLike: React.FC<FeelsLikeProps> = ({ weather }) => {
  return (
    <CardContainer>
      <CardBody>
        <CardItem className="p-8 border rounded-3xl" translateZ={50}>
          <div className="mb-8">
            <div className="flex justify-between items-center">
              <p className="text-text/30">Feels Like</p>
            </div>
          </div>
          <div className="flex justify-between items-center mb-8">
            <div>
              <Thermometer
                className="min-h-[2.5rem] min-w-[2.5rem] md:min-h-[3.5rem]"
                size="icon"
              />
            </div>
            <div>
              <p className="text-2xl">
                <span className="text-2xl md:text-4xl">
                  {Math.round(weather.main.feels_like)}
                </span>
                °C
              </p>
            </div>
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default FeelsLike;
