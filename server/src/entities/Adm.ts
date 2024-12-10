import { Column, Entity} from "typeorm";
import {randomUUID} from 'crypto'

@Entity('adms')
export class Admin {
    @PrimaryGenerateColumn({nullable: false})
    id_adm: string

    @Column({nullable: false})
    name: string

    @Column({nullable: false})
    email: string

    @Column({nullable: false})
    password: string

    constructor(
        id_adm:string,
        name:string,
        email: string,
        password:string
    ){
        this.id_adm = randomUUID();
        this.name = name
        this.email = email
        this.password = password
    }
}

function PrimaryGenerateColumn(arg0: { nullable: boolean; }): (target: Admin, propertyKey: "id_adm") => void {
    throw new Error("Function not implemented.");
}
