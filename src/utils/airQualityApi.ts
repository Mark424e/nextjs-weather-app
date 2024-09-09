import axios from 'axios';
import { AirQualityData } from '@/types/weather';

const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchAirQualityData = async (lat: number, lon: number): Promise<AirQualityData | string | null> => {
  try {
    const response = await axios.get(`${BASE_URL}/air_pollution`, {
      params: {
        lat,
        lon,
        appid: API_KEY,
      },
    });
    return response.data as AirQualityData;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error fetching air quality data:', error.response?.data || error.message);
    } else if (error instanceof Error) {
      console.error('Error fetching air quality data:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    return 'An unexpected error occurred. Please try again later.';
  }
};
