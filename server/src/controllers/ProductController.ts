import { Request, Response } from "express";
import ProductsService from "../services/ProductsService";
import Admin from "../database/models/Admin";
import path from "path";
import fs from "fs";
import Products from "../database/models/Products";
import upload from "../config/multer";

export class ProductController {
  private service = new ProductsService();

  getAllProducts = async (req: Request, res: Response) => {
    try {
      const products = await this.service.getProducts();
      console.log("Buscar todos os Produtos", products);
      return res.status(200).json(products);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao obter os produtos" });
    }
  };

  createProduct = async (req: Request, res: Response) => {
    try {
      const { id_adm, name, description, price } = req.body;

      if (!id_adm || !name || !description || !price || !req.file) {
        return res
          .status(400)
          .json({ error: "Todos os campos e a imagem são obrigatórios!" });
      }

      const adminExists = await Admin.findByPk(id_adm);
      if (!adminExists) {
        return res.status(404).json({ error: "Administrador não encontrado!" });
      }

      const uploadPath = path.join(__dirname, "../../uploads");
      const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
      const filename = `${uniqueSuffix}-${req.file.originalname}`;
      const filePath = path.join(uploadPath, filename);

      fs.writeFileSync(filePath, req.file.buffer);

      const newProduct = await this.service.newProducts({
        id_adm,
        name,
        img: `/uploads/${filename}`,
        description,
        price,
      });
      console.log("Produto Criado", newProduct);
      return res.status(201).json(newProduct);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao criar o produto" });
    }
  };

  deleteProduct = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      if (!id || isNaN(Number(id))) {
        return res.status(400).json({ error: "ID inválido ou não fornecido" });
      }

      await this.service.deleteProducts(Number(id));

      return res.status(200).json({ message: "Produto deletado com sucesso" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erro ao deletar produto" });
    }
  };

  updateProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { id_adm, name, description, price } = req.body;

    if (!id || isNaN(Number(id))) {
      return res.status(400).json({ error: "ID inválido ou não fornecido" });
    }

    if (!id_adm || !name || !description || !price) {
      return res
        .status(400)
        .json({ error: "Todos os campos são obrigatórios!" });
    }

    try {
      // Verifica se o administrador existe
      const adminExists = await Admin.findByPk(id_adm);
      if (!adminExists) {
        return res.status(404).json({ error: "Administrador não encontrado!" });
      }

      // Verifica se o produto existe
      const product = await Products.findByPk(Number(id));
      if (!product) {
        return res.status(404).json({ error: "Produto não encontrado!" });
      }

      // Processamento do arquivo de imagem (se houver)
      upload.single("image")(req, res, async (err) => {
        if (err) {
          return res.status(400).json({ error: err.message });
        }

        let imgPath = product.img; // Mantém a imagem atual se não houver um novo arquivo

        if (req.file) {
          // Se houver um novo arquivo, processamos o upload da imagem
          const uploadPath = path.join(__dirname, "../../uploads");
          const uniqueSuffix = `${Date.now()}-${Math.round(
            Math.random() * 1e9
          )}`;
          const filename = `${uniqueSuffix}-${req.file.originalname}`;
          const filePath = path.join(uploadPath, filename);

          fs.writeFileSync(filePath, req.file.buffer);

          imgPath = `/uploads/${filename}`; // Atualiza o caminho da imagem
        }

        // Atualiza o produto com os novos dados
        try {
          const updatedProduct = await Products.update(
            {
              id_adm,
              name,
              description,
              price,
              img: imgPath, // Atualiza a imagem (ou mantém a atual)
            },
            { where: { id: Number(id) } }
          );

          return res.status(200).json(updatedProduct);
        } catch (updateError) {
          console.error(updateError);
          return res.status(500).json({ error: "Erro ao atualizar o produto" });
        }
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro inesperado" });
    }
  };
}
