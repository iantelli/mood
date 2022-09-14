import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Mood = db.define("mood", {
    input: {
        type: DataTypes.STRING,
    },
    rating: {
        type: DataTypes.INTEGER,
    },
}, {
    freezeTableName: true,
});

export default Mood;