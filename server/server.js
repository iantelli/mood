import express from "express";
import db from "./config/database.js";
import router from "./routes/index.js";
import cors from "cors";

const app = express();

try {
    db.authenticate();
    console.log("Database connected...");
} catch (error) {
    console.error("Error connecting to the database: ", error);
}

app.use(cors());
app.use(express.json());
app.use('/api/moods', router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));