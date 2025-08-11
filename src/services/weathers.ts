import { weatherApi } from "../config/axios.js";
import { apiKeyWeather } from "../constants/index.js";

export const searchLocation = async (query: string) => {
  try {
    const response = await weatherApi.get(
      `/weather?q=${query}&appid=${apiKeyWeather}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const currentLocation = async (lat: number, lon: number) => {
  try {
    const response = await weatherApi.get(
      `/weather?lat=${lat}&lon=${lon}&appid=${apiKeyWeather}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const forecastNextDay = async (query: string) => {
  try {
    const response = await weatherApi.get(
      `/forecast?q=${query}&appid=${apiKeyWeather}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const forecastCurrentLocation = async (lat: number, lon: number) => {
  try {
    const response = await weatherApi.get(
      `/forecast?lat=${lat}&lon=${lon}&appid=${apiKeyWeather}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
