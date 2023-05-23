const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countryRouters = require('./countryRoutes');
const activityRoutes = require('./activityRoutes');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', countryRouters);
router.use('/activity', activityRoutes);

module.exports = router;
