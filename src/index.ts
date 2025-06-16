import express from "express";
import ConnectMCPServer from "./server";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
ConnectMCPServer();

app.get("/", (_, res) => {
  res.send("Hello, TypeScript Express!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
