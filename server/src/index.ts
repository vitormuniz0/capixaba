import 'dotenv/config'
import express, { Request, Response } from "express";
import { router } from "./routes";
import "reflect-metadata";
import { AppDataSource } from "./database";

const server = express();
server.use(express.json());
server.use(router);

AppDataSource.initialize()
  .then(() => {
    console.log("Data source inicializado!");
  })
  .catch((err) => {
    console.error("Erro durante inicialização do Data source", err);
  });

server.get("/", (req: Request, res: Response) => {
  return res.status(200).json({ message: "Api capixaba" });
});

server.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
