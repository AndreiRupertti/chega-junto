const mongoose = require('mongoose')
const Schema = mongoose.Schema

const organizationSchema = new Schema({
  name: String,
  description: String,
  events: {
    organization: String,
    date: Date,
    schedule: String,
  },
})

module.exports = mongoose.model('Organization', organizationSchema, 'orgs')
