import { DataTypes } from "sequelize";

const defineAirport = (sequelize) => {
    return sequelize.define('Airport', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      icao_code: DataTypes.STRING,
      iata_code: { type: DataTypes.STRING, allowNull: false, unique: true },
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      latitude_deg: DataTypes.FLOAT,
      longitude_deg: DataTypes.FLOAT,
      elevation_ft: DataTypes.INTEGER,
      city_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Cities',
          key: 'id'
        }
      },
      country_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Countries',
          key: 'id'
        }
      },
      website_url: DataTypes.STRING,
      wikipedia_link: DataTypes.STRING,
      createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
      updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
    });
  };

  export default defineAirport