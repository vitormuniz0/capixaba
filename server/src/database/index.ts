import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./src/database/db.sqlite",
    migrations: [
        "./src/database/migrations/*.ts"
    ],
})

AppDataSource.initialize()
  .then(() => {
    console.log("Data source inicializado!");
  })
  .catch((err) => {
    console.error("Erro durante inicialização do Data source", err);
  });

