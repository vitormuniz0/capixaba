import { ModelStatic } from "sequelize";
import Admin from "../database/models/Admin";

class AdminService {
    private model: ModelStatic<Admin> = Admin;
    
    async newAdmin(data: {name: string, email:string, password: string}) {
        const admin = await this.model.create(data);
        return admin.get()
    }

}

export default AdminService;