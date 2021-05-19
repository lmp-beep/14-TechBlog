const router = require('express').Router();

const apiRoutes = require('./api/');
const homepageRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');

router.use('/api', apiRoutes);
router.use('/', homepageRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;
