import { ModelStatic } from "sequelize";
import Admin from "../database/models/Admin";

class AdminService {
    private model: ModelStatic<Admin> = Admin;
    async get(){
        const admins = await this.model.findAll()
    }
}

export default AdminService;