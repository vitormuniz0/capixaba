import { Request, Response } from "express";
import ProductsService from "../services/ProductsService";
import Products from "../database/models/Products";

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
      const { id_adm, name, img, description, price } = req.body;

      if (!id_adm || !name || !img || !description || !price) {
        return res
          .status(400)
          .json({ error: "Todos os Campos são Obrigatórios!" });
      }

      const newProduct = await this.service.newProducts({
        id_adm,
        name,
        img,
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
    try {
      const { id } = req.params;

      if (!id || isNaN(Number(id))) {
        return res.status(400).json({ error: "ID inválido ou não fornecido" });
      }

      const updatedData = req.body;
      const updatedProduct = await this.service.updateProducts(
        Number(id),
        updatedData
      );

      return res.status(200).json(updatedProduct);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao atualizar o produto" });
    }
  };
}
