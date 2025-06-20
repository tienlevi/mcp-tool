import express from "express";
import ConnectMCPServer from "./server.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
ConnectMCPServer();

app.get("/", (_, res) => {
  res.send("Hello, JavaScript Express!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
