const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const logger = require('morgan')
const db = require('./db')

const PORT = process.env.PORT || 3001

const app = express()

app.use(logger('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use(express.static(`${__dirname}/client/build`))

app.use('/api', routes)

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
 })
app.listen(PORT, () => {
  console.log(`Express OI OI server listening on port ${PORT}`)
})