"use client";

import { Moon, Sun } from "lucide-react";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

import { useHoverGlow } from "@/hooks/useHoverGlow";

import { WeatherData } from "@/types/weather";

interface SunriseSunsetProps {
  weather: WeatherData;
}

const SunriseSunset: React.FC<SunriseSunsetProps> = ({ weather }) => {
  useHoverGlow();
  const convertToLocalTime = (timestamp: number, timezoneOffset: number) => {
    const date = new Date((timestamp + timezoneOffset) * 1000);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const timezoneOffset = weather.timezone;

  return (
    <div className="lg:col-span-2">
      <CardContainer>
        <CardBody>
          <CardItem className="hoverGlow p-8 border rounded-3xl" translateZ={50}>
            <div className="mb-8">
              <div>
                <p>Sunrise & Sunset</p>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 mb-8 space-y-4 md:space-y-0">
              <div className="flex items-center md:items-end justify-between lg:justify-start gap-8">
                <div>
                  <Sun className="min-h-[2.5rem] min-w-[2.5rem] md:min-h-[3.5rem] md:min-w-[3.5rem]"/>
                </div>
                <div>
                  <p className="opacity-50">Sunrise:</p>
                  <p className="text-2xl md:text-4xl">
                    {convertToLocalTime(weather.sys.sunrise, timezoneOffset)}
                  </p>
                </div>
              </div>
              <div className="flex items-center md:items-end justify-between lg:justify-start gap-8">
                <Moon className="min-h-[2.5rem] min-w-[2.5rem] md:min-h-[3.5rem] md:min-w-[3.5rem]"/>
                <div>
                  <p className="opacity-50">Sunset:</p>
                  <p className="text-2xl md:text-4xl">
                    {convertToLocalTime(weather.sys.sunset, timezoneOffset)}
                  </p>
                </div>
              </div>
            </div>
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
  );
};

export default SunriseSunset;
