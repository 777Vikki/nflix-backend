const mongoose = require('mongoose');
const { Schema } = mongoose;
const showsListSchema = new Schema({
    title : String, 
    type : String,
    cast :  [String],
    rated : String, 
    directors : [String],
    fullplot : String,
    released: Date
});

module.exports = {
    showsListSchema
};