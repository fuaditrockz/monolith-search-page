const express = require('express');
const router = express.Router();

const { _addPokemon } = require('./controllers')

router.post('/pokemon', function(req, res, next) {
    const addedPokemon = _addPokemon(req.body)
    console.log('TEST', addedPokemon)
    res.send('SUCCESS')
})

module.exports = router