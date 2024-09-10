"use client";

import AirQuality from "@/components/AirQuality";
import SunriseSunset from "@/components/SunriseSunset";
import Humidity from "@/components/Humidity";
import Pressure from "@/components/Pressure";
import Visibility from "@/components/Visibility";
import FeelsLike from "@/components/FeelsLike";

import { WeatherData, AirQualityData } from "@/types/weather";

interface WeatherDetailsProps {
  weather: WeatherData;
  airQuality: AirQualityData;
}

const WeatherDetails: React.FC<WeatherDetailsProps> = ({
  weather,
  airQuality,
}) => {
  return (
    <div className="lg:col-span-3 border p-8 rounded-3xl h-fit">
      <h2 className="text-xl font-bold mb-4">Today&apos;s Highlights</h2>
      <div className="flex flex-col lg:grid lg:grid-cols-4 gap-8">
        <AirQuality airQuality={airQuality} />
        <SunriseSunset weather={weather} />
        <Humidity weather={weather} />
        <Pressure weather={weather} />
        <Visibility weather={weather} />
        <FeelsLike weather={weather} />
      </div>
    </div>
  );
};

export default WeatherDetails;
