const mongoose = require('mongoose')
const uniqueValidator = require('mongooose-unique-validator')

const Pokemon = mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  category: { type: String, required: true },
  productNumber: { type: Number, required: true },
  productBy: { type: String, required: true },
  imageUrl: { type: String, required: true },
  abilities: [String],
  catch_rate: { type: Number },
  height: { type: Number },
  weight: { type: Number },
  description: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
})

Pokemon.plugins(uniqueValidator)

module.exports = mongoose.model('pokemon', Pokemon)