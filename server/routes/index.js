import express from "express";
import {
    viewMoods,
    createMood,
    updateMood,
    deleteMood,
} from "../controllers/moods.js";

const router = express.Router();

router.get('/', viewMoods);
router.post('/', createMood);
router.patch('/:id', updateMood);
router.delete('/:id', deleteMood);

export default router;