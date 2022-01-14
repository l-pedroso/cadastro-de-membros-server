const express = require('express');
const router = express.Router();
const membro = require('../controller/membro.controller')

router.post('/add', membro.add);

module.exports = router;