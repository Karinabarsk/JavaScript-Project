const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('get data')
})

app.delete('/', (req, res) => {
  res.send('DELETE request to homepage')
})

app.post('/', (req, res) => {
  res.send('POST request to homepage')
})

app.put('/', (req, res) => {
  res.send('PUT request to homepage')
})


app.listen(port, () => {
  console.log('Hello World!')
})

