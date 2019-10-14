const express = require('express')
const Mailchimp = require('mailchimp-api-v3')
const path = require('path')
require('dotenv').config()
const bodyParser = require('body-parser')
const md5 = require('md5')

const mc_api_key = process.env.MAILCHIMP_API_KEY
const list_id = process.env.MAILING_LIST_ID

const app = express()
const mailchimp = new Mailchimp(mc_api_key)
const url = mailchimp.__base_url

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.resolve(__dirname, '.', 'build')))
//routes
app.get('/api/memberList', (_req, res) => {
  console.log("url: ", url)
  // console.log("api-key: ", mc_api_key)
  console.log("list id: ", list_id)
  console.log("mailchimp", mailchimp)
  mailchimp.get(`/lists/${list_id}/members?count=100`)
  .then(function(results){
    res.send(results)
  })
  .catch(function(err){
    res.send(err)
  })
})

app.post('/api/addMember', (_req, res) => {
  var email=_req.body.email
  mailchimp.post(`/lists/${list_id}/members`, {
    email_address: _req.body.email,
    status: 'pending', // should be 'pending'
    merge_fields: {
      FNAME: _req.body.firstName,
      LNAME: _req.body.lastName
    },
  })
  .then(function(results){
    res.send(results)
  })
  .catch(function(err){
    res.send(err)
  })
})

app.patch('/api/getMember', (_req, res) => {
  var memhash=md5(_req.body.email)
  mailchimp.patch(`/lists/${list_id}/members/${memhash}`)
  .then(function(results){
    res.send(results)
  })
  .catch(function(err){
    res.send(err)
  })
})

//catch all handler
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '.', 'build', 'index.html'))
})

const port = process.env.PORT || 9001
app.listen(port)

console.log("Path: " + path.resolve(__dirname, '.', 'build'))

console.log(`express app listening on port ${port}`)
