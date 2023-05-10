const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countryRouters = require('./countryRoutes');
// const activityRouters = require('./activityRoutes');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', countryRouters);
// router.use('/activities', activityRouters);

module.exports = router;
