import express from "express";
import cors from 'cors';
import morgan from "morgan";
import { errorHandler } from "./middleware/errorMiddleware";
import authRoutes from "./routes/authRoutes";
import pacienteRoutes from "./routes/pacienteRoutes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Routes
app.use("/api/v1", authRoutes);
app.use('/api/v1', pacienteRoutes);

// Error handling
app.use(errorHandler);

export default app;
