const express = require('express')
const router = express.Router()
const moviesController = require('../controllers/movies') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, moviesController.getMovies)

router.post('/createTodo', moviesController.addMovie)

router.put('/markComplete', moviesController.markWatched)

router.put('/markIncomplete', moviesController.markNotWatched)

router.put('/rateMovie', moviesController.rateMovie)

router.put('/reviewMovie', moviesController.reviewMovie)

router.delete('/deleteTodo', moviesController.deleteMovie)

module.exports = router