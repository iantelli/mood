import Mood from "../models/moodModel.js";

export const viewMoods = async (req, res) => {
    try {
        const moods = await Mood.findAll();
        res.status(200).json(moods);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getMoodById = async (req, res) => {
    try {
        const mood = await Mood.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(mood[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const createMood = async (req, res) => {
    const mood = req.body;
    const newMood = new Mood(mood);
    try {
        await newMood.save();
        res.status(201).json(newMood);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateMood = async (req, res) => {
    try {
        await Mood.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ message: "Mood updated successfully" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deleteMood = async (req, res) => {
    try {
        await Mood.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ message: "Mood deleted successfully" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}