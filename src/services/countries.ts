import { countryApi } from "../config/axios.js";
import Country from "../interfaces/country.js";

export const getCountries = async (): Promise<Country[]> => {
  try {
    const response = await countryApi.get("/independent?status=true");
    return response.data as Country[];
  } catch (error) {
    console.error("Failed to fetch countries:", error);
    throw error;
  }
};

export const searchCountries = async (name: string): Promise<Country[]> => {
  try {
    const response = await countryApi.get(`/name/${name.toLowerCase()}`);
    return response.data as Country[];
  } catch (error) {
    console.error(`Failed to search for country "${name}":`, error);
    throw error;
  }
};
