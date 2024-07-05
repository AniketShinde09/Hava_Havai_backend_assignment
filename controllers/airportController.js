import { Airport, City, Country } from '../models/index.js';

export const getAirportByIataCode = async (req, res) => {
  try {
    const airport = await Airport.findOne({
      where: { iata_code: req.params.iata_code },
      include: [
        {
          model: City,
          include: [Country]
        },
        {
          model: Country
        }
      ]
    });

    if (!airport) {
      return res.status(404).json({ message: 'Airport not found' });
    }

    const response = {
      airport: {
        id: airport.id,
        icao_code: airport.icao_code,
        iata_code: airport.iata_code,
        name: airport.name,
        type: airport.type,
        latitude_deg: airport.latitude_deg,
        longitude_deg: airport.longitude_deg,
        elevation_ft: airport.elevation_ft,
        website_url: airport.website_url,
        wikipedia_link: airport.wikipedia_link,
        address: {
          city: airport.City ? {
            id: airport.City.id,
            name: airport.City.name,
            country_id: airport.City.country_id,
            is_active: airport.City.is_active,
            lat: airport.City.lat,
            long: airport.City.long,
            alt_name: airport.City.alt_name,
            createdAt: airport.City.createdAt,
            updatedAt: airport.City.updatedAt
          } : null,
          country: airport.City && airport.City.Country ? {
            id: airport.City.Country.id,
            name: airport.City.Country.name,
            alt_name: airport.City.Country.alt_name,
            country_code_two: airport.City.Country.country_code_two,
            country_code_three: airport.City.Country.country_code_three,
            mobile_code: airport.City.Country.mobile_code,
            country_flag: airport.City.Country.country_flag,
            createdAt: airport.City.Country.createdAt,
            updatedAt: airport.City.Country.updatedAt
          } : null
        }
      }
    };

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
