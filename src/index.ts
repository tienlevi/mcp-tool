import express, { Request, Response } from "express";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import server from "./config/server";
import calculateTool from "./tools/calculate";
import { calculateValidate } from "./validations";

const app = express();
const port: number = Number(process.env.PORT) || 3000;

app.use(express.json());
const transport = new StdioServerTransport();
console.log("Running");

await server.connect(transport);

server.tool("Calculate", calculateValidate, calculateTool);

app.get("/", (_: Request, res: Response): void => {
  res.send("Hello, TypeScript Express!");
});

app.listen(port, (): void => {
  console.log(`Server running on port ${port}`);
});
