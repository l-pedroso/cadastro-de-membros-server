const express = require('express');
const router = express.Router();
const membro = require('../controller/membro.controller')

router.post('/add', membro.add);
router.get('/listUsers/:congregacao', membro.listUsersByCongregacao);
router.post('/update/:cpf', membro.update);


module.exports = router;