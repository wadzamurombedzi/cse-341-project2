const router = require('express').Router();

//router.get('/', (req, res) => {res.send('Medical conditions with remedies.');});

router.use('/medicals', require('./medicals'));

module.exports = router;