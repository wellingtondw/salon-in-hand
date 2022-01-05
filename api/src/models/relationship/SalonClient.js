const mongoose = require('mongoose')
const Schema = mongoose.Schema

const salonClientSchema = new Schema({
  salonId: {
    type: mongoose.Types.ObjectId,
    ref: 'Salon',
    required: true
  }, 
  clientId: {
    type: mongoose.Types.ObjectId,
    ref: 'Client',
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ['A' | 'I'],
    default: 'A'
  }
}, {timestamps: true})

module.exports = mongoose.Model('SalonClient', salonClientSchema)