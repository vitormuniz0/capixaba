import 'dotenv/config'
import express, { Request, Response } from "express";
import { router } from "./Routes/routes";
import path from "path";
import cors from "cors";


const server = express();
server.use(cors({
  origin: 'http://localhost:3000'  
}));
server.use(express.json());
server.use(router);
server.use("/uploads", express.static(path.join(__dirname, "../uploads")));


server.get("/", (req: Request, res: Response) => {
  return res.status(200).json({ message: "Api capixaba" });
});


server.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
