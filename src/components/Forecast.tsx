"use client";

import { ForecastData } from "@/types/weather";
import Image from "next/image";

interface ForecastProps {
  forecast: ForecastData;
}

const Forecast: React.FC<ForecastProps> = ({ forecast }) => {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);

    const dayOptions: Intl.DateTimeFormatOptions = { weekday: "long" };
    const dateOptions: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "short",
    };

    const day = date.toLocaleDateString(undefined, dayOptions); // Day of the week (e.g., "Thursday")
    const formattedDate = date.toLocaleDateString(undefined, dateOptions); // Date (e.g., "2 Mar")

    return { day, formattedDate };
  };

  const dailyForecasts = forecast.list.filter((item) =>
    item.dt_txt.includes("12:00:00")
  );

  return (
    <div className="border p-8 rounded-3xl">
      {" "}
      <h2 className="text-xl font-bold mb-4">5-Day Forecast</h2>
      <div className="space-y-4">
        {dailyForecasts.map((item, index) => {
          const { day, formattedDate } = formatDate(item.dt_txt);

          return (
            <div
              key={index}
              className="grid grid-cols-2 justify-between items-center"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={`/assets/${item.weather[0].icon}.png`}
                  alt={item.weather[0].description}
                  width={50}
                  height={50}
                />
                <p className="text-2xl">{Math.round(item.main.temp)}°C</p>
              </div>
              <div className="flex justify-between text-text/30">
                <p>{formattedDate}</p>
                <p>{day}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Forecast;
