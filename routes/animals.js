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
    const {name, species, sex, age, weight, description, city, castrated, imageUrl} = req.body;
    Animal.create ({
        imageUrl,
        name, 
        species,
        sex,
        age,
        weight,
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

router.delete('/:id', (req, res, next) => {
    console.log(req.params.id)
    Animal.findByIdAndDelete(req.params.id)
    .then (()=> {
    console.log('delete', req.params.id)
        res.status(200).json({message:' animal deleted'});
    })
    .catch(err => {
        next(err);
    })
});

// Route: FileUpload

router.post('/upload', fileUploader.single('imageUrl'), (req, res, next) => {
    // console.log('file is: ', req.file)
   
    if (!req.file) {
      next(new Error('No file uploaded!'));
      return;
    }
   
    res.json({ secure_url: req.file.path });
  });

module.exports = router;



