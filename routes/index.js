const express = require('express');
const router = express.Router();
const membro = require('./membro');

router.use('/membro',membro);
router.use((err,req,res,next)=>{
    res.status(500).json({ERROR:err.message, STACK:err.stack});
})

module.exports = router;
