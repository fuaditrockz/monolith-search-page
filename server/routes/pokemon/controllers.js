const PokemonModel = require('../../models/Pokemon')
const {
  GET_RESPONSE,
  POST_RESPONSE
} = require('../../helpers/responsers')

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
    return POST_RESPONSE.success(res)
  })
  .catch(err => {
    return POST_RESPONSE.error(err)
  })

  return result
}

exports._getAllPokemon = async () => {
  const allPokemon = await PokemonModel.find({}, (err, res) => {
    return err ? err : res
  })

  if (!allPokemon) {
    return GET_RESPONSE.error(err)
  }

  return GET_RESPONSE.success(
    false,
    'pokemon',
    allPokemon
  )
}