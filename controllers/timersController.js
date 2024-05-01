const express = require('express');
const router = express.Router();
const Timer = require('../models/timerModel');

router.post("/", async (req, res) => {
    const { hours, minutes, seconds, message, url, superheroUUID } = req.body;
    const triggerTime = new Date(Date.now() + (hours * 3600 + minutes * 60 + seconds) * 1000);

    try {
        const existingTimer = await Timer.findOne({ superheroUUID });

        if (existingTimer && !existingTimer.triggered) {
            return res.status(400).json({ error: "Timer for this superhero is already set" });
        }

        const newTimer = new Timer({ hours, minutes, seconds, message, url, superheroUUID, triggerTime, triggered: false });
        await newTimer.save();

        const timeLeftInSeconds = Math.round((triggerTime - Date.now()) / 1000);
        res.status(201).json({ timerId: newTimer._id, timeLeftInSeconds });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get("/", async (req, res) => {
    try {
        const timers = await Timer.find();
        res.json(timers);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const timer = await Timer.findById(id);
        if (!timer) {
            return res.status(404).json({ error: "Timer not found" });
        }

        const timeLeftInSeconds = Math.max(Math.round((timer.triggerTime - Date.now()) / 1000), 0);
        res.json({ timerId: timer._id, timeLeftInSeconds });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
