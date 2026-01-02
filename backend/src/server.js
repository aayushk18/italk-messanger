import express from 'express';
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import cookieParser from "cookie-parser";
import { connectDB } from './lib/db.js';
import cors from 'cors';




dotenv.config()
const app = express();

const port = process.env.PORT;

app.use(express.json({ limit: '10mb' }));
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use("/api/auth", authRoutes);
app.use("/api/auth/message", messageRoutes);

app.listen(port, () => {
    console.log('server is running on PORT:' + port)
    connectDB()
});

// app.post(3000, (req, res) => {
//     res.send("server Started")
// })

