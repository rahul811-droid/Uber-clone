import express from 'express';
import connectDB from './config/db.js';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/user.route.js';
import captainRoutes from './routes/captain.route.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
connectDB();


app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/captain',captainRoutes);

export default app;