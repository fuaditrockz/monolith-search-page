const express = require('express');
const Promise = require('bluebird')
const router = express.Router();

const { _addPokemon } = require('./controllers')

router.post('/pokemon', function(req, res, next) {
  Promise.try(() => {
    const payload = _addPokemon(req.body)
    return payload
  })
  .then(response => {
    console.log('test', response)
    res.send(response)
  })
  .catch(err => {
    console.log(err)
    res.send(err)
  })
})

module.exports = router