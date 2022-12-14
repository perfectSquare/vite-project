import express from 'express'
import places from './places.js'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/places', (req, res) => {
  res.json(places)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})