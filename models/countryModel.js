import { DataTypes } from "sequelize";

const defineCountry = (sequelize) => {
    return sequelize.define('Country', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: { type: DataTypes.STRING, allowNull: false },
      alt_name: DataTypes.STRING,
      country_code_two: DataTypes.STRING,
      country_code_three: DataTypes.STRING,
      mobile_code: DataTypes.INTEGER,
      country_flag: DataTypes.STRING,
      createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
      updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
    });
  };

export default defineCountry