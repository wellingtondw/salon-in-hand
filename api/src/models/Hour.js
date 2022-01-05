const mongoose = require('mongoose')
const Schema = mongoose.Schema

const hourSchema = new Schema({
  salonId: {
    type: mongoose.Types.ObjectId,
    ref: 'Salon',
    required: true
  }, 
  specialties: [{
    type: mongoose.Types.ObjectId,
    ref: 'Service',
    required: true
  }],
  collaborators: [{
    type: mongoose.Types.ObjectId,
    ref: 'Collaborator',
    required: true
  }],
  days: {
    type: [Number],
    required: true
  },
  start: {
    type: Date,
    required: true
  },
  end: {
    type: Date,
    required: true
  }
}, {timestamps: true})


module.exports = mongoose.Model('Hour', hourSchema)