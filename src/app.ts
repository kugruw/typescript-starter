import express from "express";
import bodyParser from "body-parser";

const { urlencoded, json } = bodyParser;

export function startServer() {
  const port = process.env["PORT"] ?? 8080;
  const app = express();
  app.use(urlencoded({ extended: true })).use(json());
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}
