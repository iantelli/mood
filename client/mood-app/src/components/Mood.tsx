import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

export default function Mood() {
    const [moods, setMood] = useState([]);

    useEffect(() => {
        getMoods();
    }, []);

    const getMoods = async () => {
        const response = await axios.get("http://localhost:5000/api/moods");
        setMood(response.data);
    };

    const deleteMood = async (id: number) => {
        await axios.delete(`http://localhost:5000/api/moods/${id}`);
        getMoods();
    };

    const starRating = (rating: number) => {
        let stars = "";
        for (let i = 0; i < 10; i++) {
            if (i < rating) {
                stars += "★";
            } else {
                stars += "☆";
            }
        }
        return stars;
    };

    return (
        <div>
            <Link to="/add" className="links">Add New</Link>
            <div>
                {moods.map((mood: any, index) => (
                    <div key={mood.id}>
                        <h3>{mood.input}</h3>
                        <p>{starRating(mood.rating)}</p>
                        <p>{mood.updatedAt}</p>
                        <Link to={`/edit/${mood.id}`} className="links">Edit</Link>
                        <button onClick={() => deleteMood(mood.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

