const router = require('express').Router();

router.get('/', (req, res) => {res.send('Medical conditions with remedies.');});

module.exports = router;