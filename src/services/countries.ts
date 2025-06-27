import { countryApi } from "../config/axios.js";

export const getCountries = async () => {
  try {
    const response = await countryApi.get("/independent?status=true");

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const searchCountries = async (name: string) => {
  try {
    const response = await countryApi.get(`/name/${name}`);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
