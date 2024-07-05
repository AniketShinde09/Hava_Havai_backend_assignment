import { Sequelize } from "sequelize";
import defineAirport from './airportModel.js';
import defineCity from './cityModel.js';
import defineCountry from './countryModel.js';


const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
  });
  
  const Airport = defineAirport(sequelize);
  const City = defineCity(sequelize);
  const Country = defineCountry(sequelize);
  
  City.belongsTo(Country, { foreignKey: 'country_id' });
  Airport.belongsTo(City, { foreignKey: 'city_id' });
  Airport.belongsTo(Country, { foreignKey: 'country_id' });
  
  await sequelize.sync();
  
  export { sequelize, Airport, City, Country };