import axios, { AxiosError } from 'axios';
import { WeatherData } from '@/types/weather';
import { ForecastData } from '@/types/weather';

const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeatherData = async (city: string): Promise<WeatherData | string | null> => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
      },
    });
    return response.data as WeatherData;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Handle Axios-specific errors
      if (error.response) {
        if (error.response.status === 404) {
          return 'City not found';
        } else if (error.response.status === 401) {
          return 'Invalid API key';
        }
      }
      console.error('Error fetching weather data:', error.message);
    } else if (error instanceof Error) {
      console.error('Error fetching weather data:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    return 'An unexpected error occurred. Please try again later.';
  }
};

export const fetchForecastData = async (city: string): Promise<ForecastData | string | null> => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
      },
    });
    return response.data as ForecastData;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error fetching forecast data:', error.message);
    } else if (error instanceof Error) {
      console.error('Error fetching forecast data:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    return 'An unexpected error occurred. Please try again later.';
  }
};
