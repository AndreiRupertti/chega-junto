const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const dbController = require('./controllers/db_controller')
const Person = require('./models/Person')
const Oraganization = require('./models/Organization')
const app = express()

mongoose.connect('mongodb://localhost:27017/chega-junto')

app.set('port', (process.env.PORT || 3000))

app.use(bodyParser.json())
app.use(cors())

app.get('/findEvents', (req, res) => {
  Oraganization.find()
    .then(allOrgs => {
      res.send({allOrgs})
    })
    .catch(err => {
      console.log(err)
    })
})
app.get('/findEventById', (req, res) => {
  // console.log(req.body.cardId)
  Oraganization.find({'events._id': req.body.id})
    .then(event => {
      console.log(event)
      res.send({event})
    })
    .catch(err => {
      console.log(err)
    })
})

app.post('/insertItem', (req, res) => {
  const personController = dbController(Person)

  personController.findAll()
    .then(response => {
      console.log(response)
      res.send({response})
    })
    .catch(err => {
      console.log(err)
    })
})

app.listen(app.get('port'), () =>
  console.log(`Node app is running on port ${app.get('port')}`))
