const mongoose = require('mongoose')
const Schema = mongoose.Schema

const collaboratorServiceSchema = new Schema({
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
  status: {
    type: String,
    required: true,
    enum: ['A' | 'I'],
    default: 'A'
  }
}, {timestamps: true})

module.exports = mongoose.Model('CollaboratorService', collaboratorServiceSchema)