import { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const createMood = () => {
    const [input, setInput] = useState("");
    const [rating, setRating] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const newMood = {
            input,
            rating,
        };
        await axios.post("/api/moods", newMood);
        navigate("/");
    };

    return (
        <>
            <div>
                <h1>Add New Mood</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter Mood" value={input} onChange={(e) => setInput(e.target.value)} />
                    <input type="number" placeholder="0-10" value={rating} onChange={(e) => setRating(e.target.value)} />
                    <button type="submit">Submit</button>
                </form>
                <button onClick={() => navigate("/")}>Cancel</button>
            </div>
        </>
    )
}

export default createMood;