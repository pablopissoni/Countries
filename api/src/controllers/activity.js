const { Country, Activity } = require("../db");

//* por si le pinta funcionar en algun momento, pero no se como hacerlo
const postActivity = async (req, res) => {

    const { name, difficulty, duration, season, countriesID } = req.body;
    try {
        const createActivity = await Activity.create({
            name: name,
            difficulty: difficulty,
            duration: duration,
            season: season,
            countriesID: countriesID
        });
        const checkCountry = await Country.findAll({
            where: {
                id :countriesID
                
            }
        });
        const addActivity = await createActivity.setCountries(checkCountry);
        
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