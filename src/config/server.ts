import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

const server = new McpServer(
  {
    name: "Demo",
    version: "1.0.0",
  },
  {
    capabilities: {
      prompts: {},
    },
  }
);

export default server;
