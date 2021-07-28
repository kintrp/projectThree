const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const animalSchema = new Schema ({
    imageUrl: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    species: {
        type: String,
        requrired: true,
    },
    sex: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,        
    },
    castrated: {
        type: Boolean,
        required: true,        
    },
    owner: {
        type: String,
        required: true,        
    }
})

const Animal = model ('Animal', animalSchema);

module.exports = Animal;