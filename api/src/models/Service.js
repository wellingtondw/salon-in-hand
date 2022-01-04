const mongoose = require('mongoose')
const Schema = mongoose.Schema

const serviceSchema = new Schema({
  salonId: {
    type: mongoose.Types.ObjectId,
    ref: 'Salon'
  },
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  comission: { //% of comission about price
    type: Number,
    required: true
  },
  duration: {
    type: String, // duration in minutes of service
    required: true
  },
  recurrency: {
    type: Number, //recurrency days
    required: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ['A' | 'I', 'E'],
    default: 'A'
  },
}, {timestamps: true})

serviceSchema.index({ geolocation: '2dsphere' })

module.exports = mongoose.Model('Service', serviceSchema)