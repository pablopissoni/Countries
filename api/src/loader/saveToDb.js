const axios = require("axios");
const { Country } = require("../db");
// const URL = require("./dataBase"); //? Parte como parche de la URL local

// const URL = "https://restcountries.com/v3/all"; //? URL original que esta caida
const URL = "https://rest-countries.up.railway.app/v3/all";

const getCountriesToDb = async () => {
  try {
    const getCountries = await axios.get(URL);                 //? Parte del URL original que se crasheo
    const countriesInfo = getCountries.data.map((country) => { //? Parte del URL original que se crasheo
    // const countriesInfo = URL.map((country) => {                  //? Parte como parche de la URL local ^^
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
