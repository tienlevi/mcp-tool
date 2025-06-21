const calculateTool = async ({
  a,
  b,
}: {
  a: number;
  b: number;
}): Promise<any> => {
  try {
    return {
      tools: [
        {
          name: "add_numbers",
          description: "Add two numbers",
          inputSchema: {
            type: "object",
            properties: {
              a: { type: "number", description: "First number" },
              b: { type: "number", description: "Second number" },
            },
            required: ["a", "b"],
          },
        },
      ],
      content: [{ type: "text", text: String(a + b) }],
    };
  } catch (error) {
    return { content: [{ type: "text", text: String(a + b) }] };
  }
};

export default calculateTool;
