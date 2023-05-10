const axios = require("axios");
const { Country, Activity } = require("../db");

const URL = "https://restcountries.com/v3/all";

// const getHome = async () => {
//   try {
//     const api = await axios.get(URL); //* hice un destructuring para que me devuelva solo los datos que necesito
//     api = api.data?.map((pais) => {
//       return {
//         id: pais.cca3, //* id de la API de 3 letras EJ: "GIB"
//         name: pais.name.common,
//         flag: pais.flags ? pais.flags[0] : "Sin imagen", //* flagS de la API es un array que contiene 2 imagenes, la primera es la de la bandera y la segunda es la de la bandera grande
//         continent: pais.continents[0], //* Es un array que contiene un continente
//         capital: pais.capital ? pais.capital[0] : "No capital",
//         subregion: pais.subregion,
//         area: pais.area,
//         population: pais.population,
//     };
// });
// // return data;

// let bdd = await Country.findAll();
// if (!bdd.length) {
//     await Country.bulkCreate(api);
// }

// let db = await Country.findAll({
//     include: {
//         model: Activity,
//         attributes: ["name"],
//         through: {
//             attributes: [],
//         },
//     },
// });

// return db;

//   } catch (error) {
//     console.log(`***ERROR EN GETHOME (controllers)*** ${error}`);
// }

// };

const getHome = async () => {
    try {
      let api = await axios.get("https://restcountries.com/v3/all");
      api = api.data?.map((e) => {
        return {
          id: e.cca3,
          name: e.name.common,
          img: e.flags[0],
          continent: e.continents[0],
          capital: e.capital ? e.capital[0] : "No capital",
          subregion: e.subregion,
          area: e.area,
          population: e.population,
        };
      });
      api = api.filter((e) => e.name !== "Moldova");
  
      let bdd = await Country.findAll();
      if (!bdd.length) {
        await Country.bulkCreate(api);
      }
      let db = await Country.findAll({
        include: {
          model: Activity,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      });
  
      db = db.map((e) => {
        return {
          id: e.id,
          name: e.name,
          img: e.flags,
          continent: e.continent,
          capital: e.capital,
          subregion: e.subregion,
          area: e.area,
          population: e.population,
          activity: e.activities?.map((el) => el.name),
        };
      });
      return db;
    } catch (error) {
      console.log(error.message);
    }
  };

  // !----------------- revisar todo hacia abajo ---------

  const getByName = async (name) => {
    let api = await axios.get(`https://restcountries.com/v3/name/${name}`);
    api = api.data[0];
    api = {
      id: api.cca3,
      name: api.name.common,
      img: api.flags[1],
      continent: api.continents[0],
      capital: api.capital,
      subregion: api.subregion,
      area: api.area,
      population: api.population,
    };

    return api;
};

const getById = async (id) => { //! preguntar a GPT el funcionamiento de esta funcion
  let api = await axios.get(`https://restcountries.com/v3/alpha/${id}`);
  api = api.data[0];
  api = {
    id: api.cca3,
    name: api.name.common,
    img: api.flags[1],
    continent: api.continents[0],
    capital: api.capital,
    subregion: api.subregion,
    area: api.area,
    population: api.population,
  };
  return api;
};


module.exports = {
  getHome,
  getByName,
  getById,

};



