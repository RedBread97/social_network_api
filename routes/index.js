const router = require('express').router();
constapiRoutes = require('./api');

router.use('./api', apiRoutes);

module.exports = router;