import { Model, DataTypes } from "sequelize";
import db from ".";

class Products extends Model {
  declare id: number;
  declare id_adm: number;
  declare name: string;
  declare img: string;
  declare description: string;
  declare price: number;
}

Products.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    id_adm: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "admins", 
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    }
  },
  {
    sequelize: db, 
    modelName: "Products", 
    tableName: "products", 
    timestamps: false,
  }
);

export default Products;
