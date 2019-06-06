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

// Routes

app.get('/tickets', (req, res) => {
  let url = 'https://joshteperman.zendesk.com/api/v2/tickets?per_page=25'
  const zendeskAPI = {
    method: 'get',
    url: url,
    auth: {
      username: 'joshteperman@gmail.com',
      password: 'zendesk'
    }
  }
  axios(zendeskAPI)
    .then((response) => {
      res.send(response.data)
    })
    .catch((err) => {
      res.status(404).send(err.message)
    })
})

app.post('/tickets/page', (req, res) => {
  let url = req.body
  // console.log(req.body)

  const zendeskAPI = {
    method: 'get',
    url: url,
    auth: {
      username: process.env.USERNAME,
      password: process.env.PASSWORD
    }
  }
  axios(zendeskAPI)
    .then((response) => {
      res.send(response.data)
    })
    .catch((err) => {
      res.status(404).send(err.message)
    })
})

app.listen(port, (req, res) => {
  console.log(`listening on port ${port}`)
})

