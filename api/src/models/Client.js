const mongoose = require('mongoose')
const Schema = mongoose.Schema

const clientSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  bithDate: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ['M' | 'F'],
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ['A' | 'I'],
    default: 'A'
  },
  document: {
    type: {
      type: String,
      enum: ['individual' | 'corporation'],
      required: true
    },
    number: {
      type: Number,
      required: true
    }
  },
  address: {
    city: String,
    uf: String,
    cep: String,
    number: String,
    country: String
  }
}, {timestamps: true})


module.exports = mongoose.Model('Client', clientSchema)