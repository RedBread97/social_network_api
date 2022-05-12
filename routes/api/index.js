const router = require('express').Router();
const userRoutes = require('./users');
const thoughtRoutes = require('./thoughts');
// const { append } = require('express/lib/response')

router.use('/user', userRoutes);
router.use('thoughtRoutes', thoughtRoutes);



module.exports = router;