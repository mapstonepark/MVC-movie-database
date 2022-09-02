const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  poster: {
    type: String,
  },
  releaseDate: {
    type: String,
  },
  overview: {
    type: String,
  },
  recommend: {
    type: Boolean,
  },
  rating: {
    type: Number
  },
  review: {
    type: String
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Movie', MovieSchema)