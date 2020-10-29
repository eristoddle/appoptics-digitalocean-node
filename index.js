require('appoptics-apm')
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/error', function (req, res) {
  throw new Error('BROKEN')
})

app.listen(3000, () => console.log('Example AppOptics App listening on port 3000!'))