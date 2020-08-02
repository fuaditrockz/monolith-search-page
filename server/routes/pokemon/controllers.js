const PokemonModel = require('../../models/Pokemon')

exports._addPokemon = data => {
  const totalPokemoninDB = 1
  const addedPokemon = PokemonModel({
    ...data,
    productNumber: totalPokemoninDB + 1
  })

  const result = addedPokemon.save().then(res => {
    console.log(res)
    return res
  })
  .catch(err => {
    console.log(err)
    return err
  })

  return result
}