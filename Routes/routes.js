const { Router } = require('express');
const express = require('express');
const router = express.Router();
const { APIHandler } = require('../Controllers/functions.js');

router.get('/', APIHandler);

module.exports = router;