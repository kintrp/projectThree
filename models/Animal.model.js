const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const animalSchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    species: {
        type: String,
        requrired: true,
    },
    sex: {
        type: Boolean,
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
    }
})

const Animal = model ('Animal', animalSchema);

module.exports = Animal;