const mongoose = require('mongoose')
const Schema = mongoose.Schema

const salonSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name is required.']
  },
  photo: String,
  cover: String,
  email: {
    type: String,
    required: [true, 'email is required.']
  },
  password: {
    type: String,
    default: null
  },
  phone: String,
  address: {
    city: String,
    uf: String,
    cep: String,
    number: String,
    country: String
  },
  geolocation: {
    type: String,
    coordinates: Array,
  }
}, {timestamps: true})

salonSchema.index({ geolocation: '2dsphere' })

module.exports = mongoose.Model('Salon', salonSchema)