import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import server from "../config/server.js";
import { Request, Response } from "express";
import { searchCountries } from "../services/countries.js";

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

export const searchCountry = async (req: Request, res: Response) => {
  try {
    const { name } = req.params;
    const countries = await searchCountries(name);

    if (!countries || countries.length === 0) {
      return res.status(404).json({
        success: false,
        message: `No country found with name "${name}"`,
      });
    }

    return res.status(200).json({
      success: true,
      data: countries,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to search for country",
      error: error instanceof Error ? error.message : String(error),
    });
  }
};
