const express = require('express')
const router = express.Router()

const apiMoviesController = require('../../controllers/api/apiMoviesController')

router.get('/api/movies', apiMoviesController.getAll)

router.get('/api/movies/:id', apiMoviesController.getOne)

router.post('/api/movies/add', apiMoviesController.add)

router.put('/api/movies/update/:id', apiMoviesController.update)

router.delete('/api/movies/delete/:id', apiMoviesController.delete)

module.exports = router
