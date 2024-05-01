const express = require('express');
const router = express.Router();
const Superhero = require('../models/superheroModel');

router.post("/", (req, res) => {
    const { name, alias, powers, details } = req.body;
    const newSuperhero = new Superhero({ name, alias, powers, details });
    newSuperhero.save()
        .then(superhero => res.status(201).json(superhero))
        .catch(err => res.status(400).json({ error: err.message }));
});

router.get("/", (req, res) => {
    Superhero.find()
        .then(superheroes => {
            if (!superheroes) {
                res.status(404).json({ error: "Superheroes were not found" });
            } else {
                res.json(superheroes);
            }
        })
        .catch(err => res.status(400).json({ error: err.message }));
});


router.get("/:id", (req, res) => {
    const { id } = req.params;
    Superhero.findById(id)
        .then(superhero => {
            if (!superhero) {
                res.status(404).json({ error: "Superhero not found" });
            } else {
                res.json(superhero);
            }
        })
        .catch(err => res.status(400).json({ error: err.message }));
});

module.exports = router;
