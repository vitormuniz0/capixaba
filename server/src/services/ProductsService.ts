import { ModelStatic } from "sequelize";
import Products from "../database/models/Products";

class ProductsService {
  private model: ModelStatic<Products> = Products;

  async getProducts() {
    const products = await this.model.findAll();
    return products.map((product) => product.get()); 
  }
}

export default ProductsService;