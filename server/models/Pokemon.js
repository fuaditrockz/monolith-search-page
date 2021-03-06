const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const Pokemon = mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  category: { type: String, required: true },
  product_number: { type: Number, required: true },
  product_by: { type: String, required: true },
  image_url: { type: String, required: true },
  abilities: [String],
  catch_rate: { type: Number },
  height: { type: Number },
  weight: { type: Number },
  description: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
})

Pokemon.plugin(uniqueValidator)

module.exports = mongoose.model('pokemon', Pokemon)