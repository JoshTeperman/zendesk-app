const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios')

// Middleware

const port = process.env.PORT || 5000
app.use(cors())
app.use(express.json())

// Routes

app.get('/tickets', (req, res) => {

  const zendeskAPI = {
    method: 'get',
    url: 'https://joshteperman.zendesk.com/api/v2/tickets',
    auth: {
      username: 'joshteperman@gmail.com',
      password: 'zendesk'
    }
  }
  axios(zendeskAPI)
    .then((response) => {
      res.send(response.data  )
    })
    .catch((err) => {
      res.status(404).send(err.message)
    })
})

app.listen(port, (req, res) => {
  console.log(`listening on port ${port}`)
})