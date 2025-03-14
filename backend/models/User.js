const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    watchedMovies: [
        {
            movieId: String,
            title: String,
        }
    ]
});

module.exports = mongoose.model('User', UserSchema);
