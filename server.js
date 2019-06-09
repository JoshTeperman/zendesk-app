const express = require('express');
const app = express();
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

// Middleware

const port = process.env.PORT || 5000
app.use(cors())
app.use(express.json())
app.use(express.text())

const AUTH = {
  username: process.env.USERNAME,
  password: process.env.PASSWORD
}

// Routes

app.get('/tickets', (req, res) => {
  const url = 'https://joshteperman.zendesk.com/api/v2/tickets?per_page=25'
  const zendeskAPI = {
    method: 'get',
    url: url,
    auth: AUTH
  }
  axios(zendeskAPI)
    .then((response) => {
      res.send(response.data)
    })
    .catch((err) => {
      let stack = err.stack
      res.status(err.response.status).send({
        msg: 'sending special message',
        stack: stack
      })
    })
})

app.post('/tickets/page', (req, res) => {
  const url = req.body
  const zendeskAPI = {
    method: 'get',
    url: url,
    auth: AUTH
  }
  axios(zendeskAPI)
    .then((response) => {
      res.send(response.data)
    })
    .catch((err) => {
      let stack = err.stack
      res.status(err.response.status).send({
        msg: 'sending special message',
        stack: stack
      })
    })
})

app.listen(port, (req, res) => {
  console.log(`listening on port ${port}`)
})


