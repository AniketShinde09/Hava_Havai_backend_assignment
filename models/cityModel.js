import { DataTypes } from "sequelize";

const defineCity = (sequelize) => {
    return sequelize.define('City', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: { type: DataTypes.STRING, allowNull: false },
      alt_name: DataTypes.STRING,
      country_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Countries',
          key: 'id'
        }
      },
      is_active: DataTypes.BOOLEAN,
      lat: DataTypes.FLOAT,
      long: DataTypes.FLOAT,
      createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
      updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
    });
  };

export default defineCity