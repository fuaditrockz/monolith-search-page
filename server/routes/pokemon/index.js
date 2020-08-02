const express = require('express');
const Promise = require('bluebird')
const router = express.Router();

const { _addPokemon, _getAllPokemon } = require('./controllers')

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

module.exports = router