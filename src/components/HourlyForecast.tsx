import { useEffect, useState } from "react";
import Image from "next/image";
import { ForecastData } from "@/types/weather";
import { fetchForecastData } from "@/utils/weatherApi";

interface HourlyForecastProps {
  city: string;
}

const HourlyForecast: React.FC<HourlyForecastProps> = ({ city }) => {
  const [forecast, setForecast] = useState<ForecastData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getForecast = async () => {
      setLoading(true);
      setError(null);
      const data = await fetchForecastData(city);
      if (typeof data === "string") {
        setError(data);
        setForecast(null);
      } else {
        setForecast(data);
        setError(null);
      }
      setLoading(false);
    };

    getForecast();
  }, [city]);

  if (loading) {
    return <p>Loading hourly forecast...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!forecast) {
    return <p>No forecast data available.</p>;
  }

  // Convert timezone offset from seconds to milliseconds
  const timezoneOffset = forecast.city.timezone * 1000;

  // Get the current time in UTC and adjust to the city's local time zone
  const now = new Date();
  const utcNow = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
  const localNow = new Date(utcNow.getTime() + timezoneOffset);

  // Round the local time down to the nearest hour
  const roundedLocalNow = new Date(localNow.setMinutes(0, 0, 0));

  // Time range for the next 24 hours
  const localNowTimestamp = roundedLocalNow.getTime();
  const twentyFourHoursInMs = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

  // Filter forecast data for the next 24 hours
  const filteredList = forecast.list.filter((entry) => {
    const entryTime = new Date(entry.dt_txt).getTime();
    const entryLocalTime = new Date(entryTime + timezoneOffset);
    return (
      entryLocalTime.getTime() >= localNowTimestamp &&
      entryLocalTime.getTime() <= localNowTimestamp + twentyFourHoursInMs
    );
  });

  return (
    <div className="border p-8 rounded-3xl">
      <h2 className="text-xl font-bold mb-4">Today at</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-8 gap-4">
          {filteredList.length > 0 ? (
            filteredList.map((entry) => {
              const entryTime = new Date(entry.dt_txt).getTime();
              const entryLocalTime = new Date(
                entryTime + timezoneOffset - 3600000
              );
              const formattedTime = entryLocalTime.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              });
              const weatherIcon = `/assets/${entry.weather[0].icon}.png`;
              const temperature = Math.round(entry.main.temp);

              // Wind data
              const windSpeed = Math.round(entry.wind.speed); // Assuming speed is in m/s
              const windDirection = entry.wind.deg; // Wind direction in degrees

              return (
                <div
                  key={entry.dt}
                  className="border p-4 rounded-xl flex flex-col items-center gap-4"
                >
                  <p>{formattedTime}</p>
                  <Image
                    src={weatherIcon}
                    alt={entry.weather[0].description}
                    width={40}
                    height={40}
                  />
                  <p>{temperature}°C</p>
                </div>
              );
            })
          ) : (
            <p>No hourly data available for the next 24 hours.</p>
          )}
        </div>
        <div className="grid grid-cols-8 gap-4">
          {filteredList.length > 0 ? (
            filteredList.map((entry) => {
              const entryTime = new Date(entry.dt_txt).getTime();
              const entryLocalTime = new Date(
                entryTime + timezoneOffset - 3600000
              );
              const formattedTime = entryLocalTime.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              });
              const weatherIcon = `/assets/${entry.weather[0].icon}.png`;
              const temperature = Math.round(entry.main.temp);

              // Wind data
              const windSpeed = Math.round(entry.wind.speed); // Assuming speed is in m/s
              const windDirection = entry.wind.deg; // Wind direction in degrees

              return (
                <div
                  key={entry.dt}
                  className="border p-4 rounded-xl flex flex-col items-center gap-4"
                >
                  <p>{formattedTime}</p>
                  <Image
                    src="/assets/direction.png"
                    alt="Wind direction"
                    width={40}
                    height={40}
                    style={{ transform: `rotate(${windDirection}deg)` }} // Rotate the wind direction icon
                  />
                  <p>{windSpeed} m/s</p>
                </div>
              );
            })
          ) : (
            <p>No hourly data available for the next 24 hours.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HourlyForecast;
