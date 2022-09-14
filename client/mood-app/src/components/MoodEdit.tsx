import { useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

const editMood = () => {
    const [input, setInput] = useState("");
    const [rating, setRating] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    const updateMood = async (e: any) => {
        e.preventDefault();
        await axios.put(`http://localhost:5000/api/moods/${id}`, {
            input: input,
            rating: rating,
            updatedAt: new Date().toISOString()
        });
        navigate("/");
    };

    useEffect(() => {
        getMoodById();
    }, []);

    const getMoodById = async () => {
        const response = await axios.get(`http://localhost:5000/api/moods/${id}`);
        setInput(response.data.input);
        setRating(response.data.rating);
    };

    return (
        <>
            <div>
                <h1>Edit Mood</h1>
                <form onSubmit={updateMood}>
                    <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                    <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} />
                    <button type="submit">Submit</button>
                </form>
                <button onClick={() => navigate("/")}>Cancel</button>
            </div>
        </>
    )
}


export default editMood;