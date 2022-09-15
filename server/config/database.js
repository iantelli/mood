import { Sequelize } from "sequelize";

const db = new Sequelize("railway", "root", "wjG1SrmsAL2A7GFsFLlb", {
    host: "containers-us-west-69.railway.app",
    port: 7078,
    dialect: "mysql",
});

export default db;