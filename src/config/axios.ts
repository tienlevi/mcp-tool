import axios from "axios";

export const countryApi = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

export const weatherApi = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});
