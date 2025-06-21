import express, { Request, Response } from "express";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import server from "./config/server.js";
import calculateTool from "./tools/calculate.js";
import { calculateValidate } from "./validations/index.js";
import { z } from "zod";
import weatherTool from "./tools/weather.js";
import { searchLocation } from "./services/weathers.js";
import placeholderTool from "./tools/placeholder.js";

const app = express();
const port: number = 8000;

app.use(express.json());

server.tool("Calculate", calculateValidate, calculateTool);
server.tool("Weather", { query: z.string() }, weatherTool);
server.tool("Placeholder", { id: z.number() }, placeholderTool);

const transport = new StdioServerTransport();

await server.connect(transport);

app.get("/", async (_: Request, res: Response) => {
  const data = await searchLocation("Manchester");

  return res.json(data);
});

app.listen(port, (): void => {
  console.log(`Server running on port ${port}`);
});
