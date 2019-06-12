const express = require('express');
const app = express();
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

// Middleware

app.use(cors())
app.use(express.json())
app.use(express.text())

const port = process.env.PORT || 5000

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
      if (err.response === undefined) {
        res.sendStatus(500)
      } else if (err.response.status) {
        res.sendStatus(err.response.status)
      }
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
      if (err.response === undefined) {
        res.sendStatus(500)
      } else if (err.response.status) {
        res.sendStatus(err.response.status)
      }
    })
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})


