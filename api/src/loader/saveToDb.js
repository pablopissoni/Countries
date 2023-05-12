const axios = require("axios");
const { Country } = require("../db");

const URL = "https://restcountries.com/v3/all"; //? podria si bien ubicarlo en el archivo ".env"

const getCountriesToDb = async () => {
  try {
    const getCountries = await axios.get(URL);
    const countriesInfo = getCountries.data.map((country) => {
      //* en "coutriesUnfo" se terminan guardando todos los paises
      return {
        id: country.cca3,
        name: country.name.common,
        img: country.flags[0],
        continent: country.continents[0],
        capital: country.capital ? country.capital[0] : "No capital",
        subregion: country.subregion,
        area: country.area,
        population: country.population,
      };
    });

    let bdd = await Country.findAll(); //! REPASAR
    if (bdd.length === 0) {
      await Country.bulkCreate(countriesInfo);
    }

    console.log("Los paises se han guardado en la base de datos correctamente");

  } catch (error) {
    console.log("Al intentar cargar la Base de Datos se obtubo un error: ", error);
  }
};

module.exports = getCountriesToDb;
