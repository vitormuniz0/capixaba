import { Router } from "express"
import { ProductController } from "../controllers/ProductController";
import upload from "../config/multer";


export const router = Router();
const productController = new ProductController();

router.get('/product', productController.getAllProducts);
router.post("/product", upload.single("image"), productController.createProduct);
router.delete('/product/:id', productController.deleteProduct);
router.put("/product/:id", upload.single("image"), productController.updateProduct);

