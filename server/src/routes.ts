import { Router } from "express"
import { AdminController } from "./controllers/Admin";

export const router = Router();
const adminController = new AdminController();

router.post('/admin', adminController.createAdmin)