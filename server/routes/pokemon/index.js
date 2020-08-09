const express = require('express');
const Promise = require('bluebird')
const router = express.Router();

const { _addPokemon, _getAllPokemon, _getPokemonbyName } = require('./controllers')

router.post('/pokemon', (req, res, next) => {
  Promise.try(() => {
    const payload = _addPokemon(req.body)
    return payload
  })
  .then(response => {
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
})

router.get('/pokemon', (req, res, next) => {
  Promise.try(() => {
    const payload = _getAllPokemon()
    return payload
  })
  .then(response => {
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
})

router.get('/pokemon/name=:name', (req, res, next) => {
  Promise.try(() => {
    const payload = _getPokemonbyName(req.params.name)
    return payload
  })
  .then(response => {
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
})

module.exports = router