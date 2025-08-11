import { searchCountries } from "../services/countries.js";

const countryTool = async ({ name }: { name: string }): Promise<any> => {
  const response = await searchCountries(name);

  try {
    return {
      tools: [
        {
          name: "Find Country",
          description: "Add two numbers",
          inputSchema: {
            type: "object",
            properties: {
              name: { type: "text", description: "Name Country" },
            },
            required: ["name"],
          },
        },
      ],
      content: [{ type: "text", text: JSON.stringify(response) }],
    };
  } catch (error) {
    return { content: [{ type: "text", text: "Failed" }] };
  }
};

export default countryTool;
