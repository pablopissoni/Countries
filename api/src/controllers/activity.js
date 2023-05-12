const { Country, Activity } = require("../db"); //! si falla revisar la extexion del archivo

//* por si le pinta funcionar en algun momento, pero no se como hacerlo
const postActivity = async (req, res) => {

    const { name, difficulty, duration, season, countryID } = req.body;
    try {
    
        const createActivity = await Activity.create({
            // id: id, // deberia haber un id autogenerado o puesto por nosotros pero no se como hacerlo, por ahora lo dejo asi
            name: name,
            difficulty: difficulty,
            duration: duration,
            season: season
        });
        const checkCountry = await Country.findAll({
            where: {
                id: countryID
                // id: countryID
            }
        });
        const addActivity = await createActivity.addCountries(checkCountry);
        
        console.log("se posteo correctamente")
        return res.json(addActivity);
        // return addActivity;
        
    } catch (error) {
        console.log(error)
        return res.status(404).send({ error: 'Error en la petición de postActivity de controlers' });   
    }
}

const getActivity = async (req, res) => {
    try {
        const activities = await Activity.findAll();
        return res.status(200).json(activities);
        
    } catch (error) {
        return res.status(404).json({ error: 'Error en la petición de getActivities de controlers' });
    }
}


module.exports = { postActivity,  getActivity }