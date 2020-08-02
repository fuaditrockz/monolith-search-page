const PokemonModel = require('../../models/Pokemon')

exports._addPokemon = data => {
  const totalPokemoninDB = 1
  const addedPokemon = PokemonModel({
    ...data,
    productNumber: totalPokemoninDB + 1
  })

  const result = addedPokemon.save().then(res => {
    console.log(res)
    return {
      error: false,
      message: 'Success created!',
      id: res._id,
      name: res.name
    }
  })
  .catch(err => {
    console.log(err)
    return {
      error: true,
      message: err
    }
  })

  return result
}