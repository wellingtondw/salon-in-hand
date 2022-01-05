const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schedulingSchema = new Schema({
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
  collaboratorId: {
    type: mongoose.Types.ObjectId,
    ref: 'Collaborator',
    required: true
  }, 
  serviceId: {
    type: mongoose.Types.ObjectId,
    ref: 'Service',
    required: true
  }, 
  schedulingDate: {
    type: Date,
    required: true
  },
  commission: {
    type: Number,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  transactionId: {
    type: String,
    required: true
  }
}, {timestamps: true})

module.exports = mongoose.Model('Scheduling', schedulingSchema)