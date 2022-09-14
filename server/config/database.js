import { Sequelize } from "sequelize";

const db = new Sequelize("mood_db", "root", "1108", {
    host: "localhost",
    dialect: "mysql",
});

export default db;