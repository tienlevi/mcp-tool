import { searchCountries } from "../services/countries.js";

const countryTool = async ({ name }: { name: string }): Promise<any> => {
  const response = await searchCountries(name);
  const data = response.find((country: any) => country.name === name);

  try {
    return {
      content: [{ type: "text", text: JSON.stringify(data.name) }],
    };
  } catch (error) {
    return { content: [{ type: "text", text: "Failed" }] };
  }
};

export default countryTool;
