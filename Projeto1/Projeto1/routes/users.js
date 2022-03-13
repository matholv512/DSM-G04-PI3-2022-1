const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    return res.send({Message: `Get metod functioning!` })
});

router.post('/', (req, res) => {
    return res.send({Message: `Post metod functioning!` })
});

router.post('/create', (req, res) => {
    let obj = req.query;
    return res.send({Message: `User created successful!!! ${obj.nome}` })
});

module.exports = router;

