import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import server from "../config/server.js";

export const getMCP = async (req: any, res: any) => {
  try {
    const transport = new StreamableHTTPServerTransport({
      sessionIdGenerator: () => "123e4567-e89b-12d3-a456-426614174000",
    });

    await server.connect(transport);
    await transport.handleRequest(req, res, req.body);
  } catch (error) {
    console.error("Error handling MCP request:", error);
    if (!res.headersSent) {
      res.status(500).json({
        jsonrpc: "2.0",
        error: {
          code: -32603,
          message: "Internal server error",
        },
        id: null,
      });
    }
  }
};
