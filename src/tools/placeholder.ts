import { getPlaceholderById } from "../services/placeholder.js";

const placeholderTool = async ({ id }: { id: number }): Promise<any> => {
  const data = await getPlaceholderById(id);
  try {
    return {
      content: [{ type: "text", text: JSON.stringify(data) }],
    };
  } catch (error) {
    return { content: [{ type: "text", text: "Failed" }] };
  }
};

export default placeholderTool;
