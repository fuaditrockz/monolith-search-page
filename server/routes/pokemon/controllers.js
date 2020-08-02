const PokemonModel = require('../../models/Pokemon')

exports._addPokemon = async data => {
  const totalPokemoninDB = await PokemonModel.countDocuments({}, (err, res) => {
    return res
  })

  console.log(totalPokemoninDB)

  const addedPokemon = await PokemonModel({
    ...data,
    product_number: totalPokemoninDB + 1
  })

  const result = await addedPokemon.save().then(res => {
    console.log(res)
    return {
      error: false,
      message: 'Success created!',
      id: res._id,
      name: res.name,
      product_number: res.product_number
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