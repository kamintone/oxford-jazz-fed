const express = require('express')
const Mailchimp = require('mailchimp-api-v3')
const path = require('path')
require('dotenv').config()
const bodyParser = require('body-parser')
const md5 = require('md5')

var mc_api_key = process.env.MAILCHIMP_API_KEY
var list_id = process.env.MAILING_LIST_ID

const app = express()
const mailchimp = new Mailchimp(mc_api_key)
console.log("list id: ", list_id)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.resolve(__dirname, '.', 'build')))
//routes
app.get('/api/memberList', (req, res) => {
  mailchimp.get(`/lists/${list_id}/members?count=100`)
  .then(function(results){
    res.send(results)
  })
  .catch(function(err){
    res.send(err)
  })
})

app.post('/api/addMember', (req, res) => {
  var email=req.body.email
  mailchimp.post(`/lists/${list_id}/members`, {
    email_address: req.body.email,
    status: 'pending', // should be 'pending'
    merge_fields: {
      FNAME: req.body.firstName,
      LNAME: req.body.lastName
    },
  })
  .then(function(results){
    res.send(results)
  })
  .catch(function(err){
    res.send(err)
  })
})

app.patch('/api/getMember', (req, res) => {
  var memhash=md5(req.body.email)
  mailchimp.patch(`/lists/${list_id}/members/${memhash}`)
  .then(function(results){
    res.send(results)
  })
  .catch(function(err){
    res.send(err)
  })
})

//catch all handler
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '.', 'build', 'index.html'))
})

const port = process.env.PORT || 9001
app.listen(port)

console.log("Path: " + path.resolve(__dirname, '.', 'build'))

console.log(`express app listening on port ${port}`)
