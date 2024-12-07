import { Request, Response } from "express";
import { AdminService } from "../services/AdminService";

export class ProductController {
  createProduct = (req: Request, res: Response) => {
    const adminService = new AdminService();
    const { email, password } = req.body;

    try {
      if (!email || !password) {
        return res.status(400).json({ message: "Email e senha obrigatório" });
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Email inválido." });
      }

      adminService.createAdmin(email, password);
      console.log("Usuário Criado");
      return res.status(201).json({ message: "Usuário Criado" });
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      return res.status(500).json({ message: "Erro interno no servidor." });
    }
  };
}
