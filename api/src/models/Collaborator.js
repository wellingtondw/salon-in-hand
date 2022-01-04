const mongoose = require('mongoose')
const Schema = mongoose.Schema

const collaboratorSchema = new Schema({
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
  bankAccount: {
    owner: {
      type: String,
      required: true
    },
    doc: {
      type: String,
      required: true
    },
    bank: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    agency: {
      type: String,
      required: true
    },
    number: {
      type: String,
      required: true
    },
    verifyingDigit: {
      type: String,
      required: true
    }
  },
  recipientId: {
    type: String,
    required: true
  }
}, {timestamps: true})


module.exports = mongoose.Model('Collaborator', collaboratorSchema)