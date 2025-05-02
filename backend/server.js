import express from "express";
import  dotenv from "dotenv";

dotenv.config();

import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from "./db/connectMongoDB.js";


const app = express();
const PORT = process.env.PORT ||  8001;

console.log(process.env.MONGO_URI)

app.use("/api/auth", authRoutes);

app.listen(8001,() => {
    console.log(`Server is running on port ${PORT}`);
    connectMongoDB();
});