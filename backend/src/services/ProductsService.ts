import { ModelStatic } from "sequelize";
import Products from "../database/models/Products";

class ProductsService {
  private model: ModelStatic<Products> = Products;

  async getProducts() {
    const products = await this.model.findAll();
    return products.map((product) => product.get()); 
  }
  async newProducts(data: {id_adm: number; name: string; img: string; description:string; type:string; price: number}) {
    const product = await this.model.create(data);
    return product.get(); 
  }
  async deleteProducts(id: number) {
    const product = await Products.findByPk(id);
    if (!product) {
      throw new Error ("Produto não encontrado" );
    }
    await product.destroy();
  }
  async updateProducts(id: number, updateData: { [key: string]: any }) {
    const product = await this.model.findByPk(id);
    if (!product) {
      throw new Error("Produto não encontrado");
    }
    await product.update(updateData);
    return product.get();
  }
}


export default ProductsService;