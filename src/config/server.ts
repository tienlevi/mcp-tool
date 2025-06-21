import {
  McpServer,
  ResourceTemplate,
} from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

// Create an MCP server
const server = new McpServer({
  name: "Demo",
  version: "1.0.0",
});

// Add an addition tool
const ConnectMCPServer = async (): Promise<void> => {
  server.tool(
    "Calculate",
    { a: z.number(), b: z.number() },
    async ({ a, b }: { a: number; b: number }) => ({
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
    })
  );

  // Add a dynamic greeting resource
  server.resource(
    "greeting",
    new ResourceTemplate("greeting://{name}", { list: undefined }),
    async (uri, variables) => ({
      contents: [
        {
          uri: uri.href,
          text: `Hello, ${variables.name}!`,
        },
      ],
    })
  );

  // Start receiving messages on stdin and sending messages on stdout
  const transport = new StdioServerTransport();
  console.log("Running");

  await server.connect(transport);
};

export default ConnectMCPServer;
