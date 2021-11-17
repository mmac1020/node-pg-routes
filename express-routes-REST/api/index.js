const express = require('express');

const router = express.Router()

router.use('/dogs', require('./dogs'));
router.use('/users', require('./users'));

module.exports = router;
