import express, { Request, Response } from "express";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import server from "./config/server.js";
import calculateTool from "./tools/calculate.js";
import { calculateValidate } from "./validations/index.js";
import { z } from "zod";
import placeholderTool from "./tools/placeholder.js";
import countryTool from "./tools/country.js";

const app = express();
const port: number = 8000;

app.use(express.json());

server.tool("Calculate", calculateValidate, calculateTool);
server.tool("Placeholder", { id: z.number() }, placeholderTool);
server.tool("Country", { name: z.string() }, countryTool);

const transport = new StdioServerTransport();

await server.connect(transport);

app.get("/", async (_: Request, res: Response) => {});

app.listen(port, (): void => {
  console.log(`Server running on port ${port}`);
});
