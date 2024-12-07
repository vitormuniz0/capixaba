import { Router } from "express"
import { ProductController } from "./controllers/Product";

export const router = Router();
const adminController = new ProductController();

router.post('/admin', adminController.createProduct)