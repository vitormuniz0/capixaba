import { NextFunction, Request, Response } from "express";
import AdminService from "../services/AdminService";
import Admin from "../database/models/Admin";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export class AdminController {
  private service = new AdminService();

  getAdmin = async (req: Request, res: Response) => {
    const id = req.params.id;

    // Validando o formato do ID 
    if (isNaN(Number(id))) {
      return res.status(400).json({ error: "ID inválido" });
    }

    // verificando se o adm existe
    const adminExists = await Admin.findOne({
      where: { id },
      attributes: { exclude: ["password"] },
    });

    if (!adminExists) {
      return res.status(409).json({ error: "Usuário não existe" });
    }

    res.status(200).json({ adminExists });
  };

  checkToken = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers["authorization"];

    // separando o token
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({ error: "Acesso negado" });
    }

    try {
      const secret = process.env.SECRET;

      if (!secret) {
        return res
          .status(500)
          .json({ error: "Chave secreta não configurada!" });
      }

      // verificando se o token está certo
      jwt.verify(token, secret);

      next();
    } catch (error) {
      res.status(400).json({ error: "Token invalido" });
    }
  };

  createAdmin = async (req: Request, res: Response) => {
    try {
      // Recebendo parametros
      const { name, email, password } = req.body;

      // Verificando se enviou todos os campos no corpo
      if (!name || !email || !password) {
        return res
          .status(400)
          .json({ error: "Todos os campos e a imagem são obrigatórios!" });
      }

      // verificando se o adm existe
      const adminExists = await Admin.findOne({
        where: { email },
      });

      if (adminExists) {
        return res.status(409).json({ error: "Email já cadastrado!" });
      }

      // Gerando uma hash para a senha
      const salt = await bcrypt.genSalt(12);

      // juntando a Hash com a senha do adm
      const passwordHash = await bcrypt.hash(password, salt);

      // Criando o adm chamando o service
      const newAdmin = await this.service.newAdmin({
        name,
        email,
        password: passwordHash,
      });
      return res.status(201).json(newAdmin);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao criar administrador" });
    }
  };

  authAdmin = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      // Verificando se enviou todos os campos no corpo
      if (!email || !password) {
        return res
          .status(400)
          .json({ error: "Todos os campos e a imagem são obrigatórios!" });
      }

      // verificando se o adm existe
      const admin = await Admin.findOne({
        where: { email },
      });

      if (!admin) {
        return res.status(404).json({ error: "Usuário não existe!" });
      }

      // verificando se a senha esta correta
      const checkPassword = await bcrypt.compare(password, admin.password);

      if (!checkPassword) {
        return res.status(409).json({ error: "Senha invalida!" });
      }

      const secret = process.env.SECRET;

      if (!secret) {
        return res
          .status(500)
          .json({ error: "Chave secreta não configurada!" });
      }

      const token = jwt.sign({ id: admin.id }, secret, {
        expiresIn: "1D",
      });

      res
        .status(200)
        .json({ msg: "Autenticação realizada com sucesso!", token });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao criar administrador" });
    }
  };
}
