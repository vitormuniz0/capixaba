import { Request, Response } from "express";
import ProductsService from "../services/ProductsService";

export class ProductController {
  private service = new ProductsService();

  getAllProducts = async (req: Request, res: Response) => {
    try {
      const products = await this.service.getProducts();
      console.log("Get all Products", products);
      return res.status(200).json(products); 
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao obter os produtos" });
    }
  };
}
