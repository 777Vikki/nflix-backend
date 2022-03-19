const mongoose =require('mongoose');
const showsListSchema = require('../schema/showsListSchema');

const movieList = mongoose.model('movies',showsListSchema);

module.exports={
    movieList
}