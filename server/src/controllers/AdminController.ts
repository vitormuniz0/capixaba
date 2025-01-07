import { NextFunction, Request, Response } from "express";
import AdminService from "../services/AdminService";
import Admin from "../database/models/Admin";
import bcrypt from 'bcrypt';

export class AdminController {

    private service = new AdminService;

    createAdmin = async (req:Request, res:Response) =>{
        try {
            // Recebendo parametros
            const {name , email , password} = req.body;

            // Verificando se enviou todos os campos no corpo
            if (!name || !email || !password ) {
                return res
                .status(400)
                .json({ error: "Todos os campos e a imagem são obrigatórios!" });
            }

            // verificando se o adm existe
            const adminExists = await Admin.findOne({
                where: {email} 
            })

            if (adminExists) {
                return res.status(409).json({ error: "Email já cadastrado!" });
            }

            // Gerando uma hash para a senha
            const salt = await bcrypt.genSalt(12);

            // juntando a Hash com a senha do adm 
            const passwordHash = await bcrypt.hash(password, salt)

            // Criando o adm chamando o service
            const newAdmin = await this.service.newAdmin({ name, email, password:passwordHash });
            return res.status(201).json(newAdmin);

        } catch (error){
            console.error(error);
            return res.status(500).json({ error: "Erro ao criar administrador" });
        }
    }

  
}