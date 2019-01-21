const express = require('express')
const Mailchimp = require('mailchimp-api-v3')
const path = require('path')
require('dotenv').config()
const md5 = require('md5')

// require('./client/src/TestList')

var mc_api_key = process.env.MAILCHIMP_API_KEY
var list_id = process.env.MAILING_LIST_ID

const app = express()
const mailchimp = new Mailchimp(mc_api_key)

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

app.get('/api/getMember', (req, res) => {
  let memhash = md5('davidday@waitrose.com')
  mailchimp.get(`/lists/${list_id}/members/${memhash}`)
  .then(function(results){
    res.send(results)
  })
  .catch(function(err){
    res.send(err)
  })
})

// app.post('/api/memberList', (req, res) => {
//   mailchimp.post(`/lists/${list_id}/members`)
//   .then(function(results){
//     res.send(results)
//   })
//   .catch(function(err){
//     res.send(err)
//   })
// })

//catch all handler
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '.', 'build', 'index.html'))
})

const port = process.env.PORT || 9001
app.listen(port)

console.log(`express app listening on port ${port}`)
