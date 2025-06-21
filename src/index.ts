import express, { Request, Response } from "express";
import ConnectMCPServer from "./config/server.js";

const app = express();
const port: number = Number(process.env.PORT) || 3000;

app.use(express.json());
ConnectMCPServer();

app.get("/", (_: Request, res: Response): void => {
  res.send("Hello, TypeScript Express!");
});

app.listen(port, (): void => {
  console.log(`Server running on port ${port}`);
});
