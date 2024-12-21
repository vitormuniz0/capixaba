import 'dotenv/config'
import express, { Request, Response } from "express";
import { router } from "./Routes/routes";

const server = express();
server.use(express.json());
server.use(router);


server.get("/", (req: Request, res: Response) => {
  return res.status(200).json({ message: "Api capixaba" });
});


server.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
