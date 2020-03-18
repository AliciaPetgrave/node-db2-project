const express = require('express')
const carsRouter = require('../cars/carsRouter')

const server = express()

server.use(express.json())
server.use('/api/cars', carsRouter)

server.use(function(req, res, next) {
    res.status(404).json({message: "page not found"})
  })

module.exports = server