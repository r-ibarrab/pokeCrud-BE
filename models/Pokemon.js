const mongoose = require("mongoose")
const {Schema} = mongoose

const PokemonSchema = new Schema({
  name: {
    type:String,
    required:[true,"Pokemon's Name is required"],
  },
  power: {
    type:String,
    required:[true,"Pokemon's Power is required"],
  },
  isMainSeries: {
    type: Boolean,
    default: false
  },

},{
    timestamps: true
})


const Pokemon = mongoose.model('pokemons', PokemonSchema);


module.exports = Pokemon