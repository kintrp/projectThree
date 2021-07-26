const router = require("express").Router();
const Animal = require('../models/Animal.model');
const fileUploader = require('../config/cloudinary.config');

// Route: list ALL animals, independently from user

router.get('/list', (req, res, next) => {
    Animal.find() 
    .then(animals => {
        res.status(200).json(animals);
    })
    .catch(err => {
        next(err)
    }) 
})

// Route: display animal details

router.get('/:id', (req, res, next) => {
    console.log('Test', req.user)
    Animal.findById(req.params.id)
    .then(animal => {
        if (!animal) {
            res.status(404).json(animal);
        } else {
            res.status(200).json(animal);
        }
    })
    .catch(err => {
        next(err)
    })
})

// Route: Add ONE animal

router.post('/add', (req, res, next) => {
    console.log(req.body)
    const {name, species, sex, description, city, castrated} = req.body;
    Animal.create ({
        name, 
        species,
        sex,
        description, 
        city,
        castrated,
        owner: req.user._id,
    })
    .then(animal => {
        console.log(animal)
        res.status(201).json(animal);
    })
    .catch(err => {
        console.log(err)
    })
})

// Route: delete ONE animal

router.delete('/:id', (res, req, next) => {
    Animal.findByIdAndDelete(req.params.id)
    .then (()=> {
    console.log('delete', req.params.id)
        res.status(200).json({message:'project deleted'});
    })
    .catch(err => {
        next(err);
    })
});

module.exports = router;