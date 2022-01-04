const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))

app.listen('8000', () => {
  console.log('Running on por 8000')
})