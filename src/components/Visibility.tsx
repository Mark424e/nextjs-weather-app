"use client";

import { Eye } from "lucide-react";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

import { useHoverGlow } from "@/hooks/useHoverGlow";

import { WeatherData } from "@/types/weather";

interface VisibilityProps {
  weather: WeatherData;
}

const Visibility: React.FC<VisibilityProps> = ({ weather }) => {
  useHoverGlow();
  return (
    <CardContainer>
      <CardBody>
        <CardItem className="hoverGlow p-8 border bg-card dark:bg-none rounded-3xl" translateZ={50}>
          <div className="mb-8">
            <div className="flex justify-between items-center">
              <p className="text-text/30">Visibility</p>
            </div>
          </div>
          <div className="flex justify-between items-center mb-8">
            <div>
              <Eye className="min-h-[2.5rem] min-w-[2.5rem] md:min-h-[3.5rem]" size="icon" />
            </div>
            <div>
              <p className="text-2xl">
                <span className="text-2xl md:text-4xl">{weather.visibility / 1000}</span>km
              </p>
            </div>
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default Visibility;
