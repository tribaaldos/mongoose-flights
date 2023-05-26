const express = require('express');
const router = express.Router();
// You Do - Require the yet to be created reviews controller 
const destinationsCtrl = require('../controllers/destinations');

router.post('/flights/:id/destinations', destinationsCtrl.create)
// You Do - Define the Route below


module.exports = router;