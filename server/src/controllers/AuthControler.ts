import { Request, Response } from "express";
import { AdminService } from "../services/AdminService";

export class AuthController {
  authAdmin = (req: Request, res: Response) => {
    const adminService = new AdminService();

    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ message: "Email e senha obrigatório" });
      }
    } catch (error) {}
  };
}
