import { Router } from "express"
import { ProductController } from "../controllers/ProductController";

export const router = Router();
const productController = new ProductController();

router.get('/product', productController.getAllProducts)