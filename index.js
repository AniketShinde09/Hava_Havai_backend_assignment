import express from "express";
import { getAirportByIataCode } from "./controllers/airportController.js";

const app = express()
const PORT = 3004;


app.get('/airport/:iata_code', getAirportByIataCode);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
