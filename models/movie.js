const mongoose = require('mongoose');
const validator = require('validator');

const cardSchema = new mongoose.Schema(
  {
    country: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
      validate: (value) => {
        if (validator.isURL(value)) {
          return true;
        }
        return false;
      },
    },
    trailerLink: {
      type: String,
      required: true,
      validate: (value) => {
        if (validator.isURL(value)) {
          return true;
        }
        return false;
      },
    },
    thumbnail: {
      type: String,
      required: true,
      validate: (value) => {
        if (validator.isURL(value)) {
          return true;
        }
        return false;
      },
    },
    nameRU: {
      type: String,
      required: true,
    },
    nameEN: {
      type: String,
      required: true,
    },
    // name: {
    //   type: String,
    //   required: true,
    //   minlength: 2,
    //   maxlength: 30,
    // },
    // link: {
    //   type: String,
    //   required: true,
    //   validate: (value) => {
    //     if (validator.isURL(value)) {
    //       return true;
    //     }
    //     return false;
    //   },
    // },
    // likes: {
    //   type: [mongoose.Schema.Types.ObjectId],
    //   ref: 'user',
    //   default: [],
    // },
    // createdAt: {
    //   type: Date,
    //   default: Date.now,
    // },
  },
  {
    versionKey: false,
  },
);

module.exports = mongoose.model('card', cardSchema);
