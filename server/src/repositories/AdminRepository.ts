import { EntityManager } from "typeorm";
import { AppDataSource } from "../database";
import { Admin } from "../entities/Adm";

export class AdminRepository {
    private manager : EntityManager

    constructor(
        manager = AppDataSource.manager
    ){
        this.manager = manager;
    }

    createAdmin = async (admin:Admin) => {
        return this.manager.save(admin)
    }
}