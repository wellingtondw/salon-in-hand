const mongoose = require('mongoose')
const Schema = mongoose.Schema

const salonCollaboratorSchema = new Schema({
  salonId: {
    type: mongoose.Types.ObjectId,
    ref: 'Salon',
    required: true
  }, 
  collaboratorId: {
    type: mongoose.Types.ObjectId,
    ref: 'Collaborator',
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ['A' | 'I'],
    default: 'A'
  }
}, {timestamps: true})


module.exports = mongoose.Model('SalonCollaborator', salonCollaboratorSchema)