const express = require('express')
const db = require ('../data/dbConfig')

const router = express.Router()

//GET request
router.get('/', (req, res) => {
    db('cars')
    .then(cars => {
        res.status(200).json(cars)
    })
    .catch(error => {
        res.status(500).json({error: 'could not load the cars data'})
    })
})

//GET by id
router.get('/:id', (req, res) => {
    db('cars')
    .where({id: req.params.id})
    .then(cars => {
        res.status(200).json(cars)
    })
    .catch(error => {
        res.status(500).json({error: 'the cars information could not be retrieved'})
    })
})


//POST request
router.post('/', (req, res) => {
    db('cars')
    .insert(req.body, "id")
    .then(id => {
        res.status(201).json({results: id})
    })
    .catch(error => {
        res.status(500).json({error: 'the car could not be added to the database'})
    })
})


module.exports = router