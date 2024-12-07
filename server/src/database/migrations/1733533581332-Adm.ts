import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Adm1733533581332 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'adms',
                columns:[
                    {
                        name: 'id_adm',
                        type : 'string',
                        isPrimary: true
                    },
                    {
                        name: 'name',
                        type: 'string',
                        isNullable: false
                    },
                    {
                        name: 'email',
                        type: 'string',
                        isNullable: false,
                        isUnique:  true
                    },
                    {
                        name: 'password',
                        type: 'string',
                        isNullable: false
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('adms')
    }

}

// npx typeorm migration:create src/database/migrations/Adm como criar migration