import { Model, DataTypes } from "sequelize";
import db from ".";

class Admin extends Model {
  declare id: number;
  declare name: string;
  declare email: string;
  declare password: string;
}

Admin.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, 
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db, 
    modelName: "Admin", 
    tableName: "admins", 
    timestamps: false, 
  }
);

export default Admin;
