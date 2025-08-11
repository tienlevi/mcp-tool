import { searchLocation } from "../services/weathers.js";

const weatherTool = async ({ query }: { query: string }): Promise<any> => {
  try {
    const data = await searchLocation(query);

    // Validate data
    if (
      !data ||
      !data.name ||
      !data.main ||
      typeof data.main.temp !== "number"
    ) {
      return {
        content: [
          {
            type: "text",
            text: `Invalid or incomplete weather data for query: ${query}`,
          },
        ],
      };
    }

    return {
      content: [
        {
          type: "text",
          text: `Temperature in ${data.name}: ${data.main.temp - 272.15}°C`,
        },
      ],
    };
  } catch (error) {
    console.error("Weather tool error:", error);
    return {
      content: [
        {
          type: "text",
          text: `Failed to fetch weather data. Error: ${
            error instanceof Error ? error.message : "Unknown error"
          }`,
        },
      ],
    };
  }
};

export default weatherTool;
