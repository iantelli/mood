import express from "express";
import {
    viewMoods,
    getMoodById,
    createMood,
    updateMood,
    deleteMood,
} from "../controllers/moods.js";

const router = express.Router();

router.get('/', viewMoods);
router.get('/:id', getMoodById);
router.post('/', createMood);
router.patch('/:id', updateMood);
router.delete('/:id', deleteMood);

export default router;