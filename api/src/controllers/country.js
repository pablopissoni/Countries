const { Sequelize } = require("sequelize");
const { Country, Activity } = require("../db");
const { Op } = Sequelize;

//Op (Operadores) es un objeto dentro de Sequelize que proporciona operadores que se utilizan en consultas avanzadas.
// Estos operadores se utilizan para realizar comparaciones y operaciones lógicas en las consultas,
//  como igualdad, desigualdad, mayor que, menor que, etc.

const getCountries = async (req, res) => {
    const { name } = req.query;
  try {

    if (name) {
      const allCountries = await Country.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
        include: Activity,
      });
      return res.status(200).json(allCountries);
      
    } else {
      const allCountries = await Country.findAll({include: Activity,});
      return res.status(200).json(allCountries);
    }
    
  } catch (error) {
    res.status(404).send(error)
    console.log(error);
  }


} 

const getCountryById = async (req, res) => {
try {
       const {id} = req.params;
       const foundCountry = await Country.findByPk(id, {
           include: Activity
       })
       return res.status(200).json(foundCountry)
   } catch (error) {
       console.log("error ",error);
   }
}

module.exports = {
    getCountries,
    getCountryById
}