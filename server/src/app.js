const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

app.use(bodyParser.json())
app.use(morgan('combined'))
app.use(cors())

app.post('/insertItem', (req, res) => {
  res.send({
    messege: `Ola, ${req.body.name}`
  })
  console.log('Ola')
})

app.listen(3000)
