const mongoose = require('mongoose')
const URI = 'mongodb://localhost:27017/salon-in-hand'

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Mongodb is connected')).catch((err) => console.log(err))