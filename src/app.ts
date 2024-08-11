import express from "express";
import cors from 'cors';
import morgan from "morgan";
import { errorHandler } from "./middleware/errorMiddleware";
import authRoutes from "./routes/authRoutes";
import pacienteRoutes from "./routes/pacienteRoutes";

const app = express();

app.use(cors({
  origin: 'https://fspp-git-master-heinrick7s-projects.vercel.app', // use your actual domain name (or localhost), using * is not recommended
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
  credentials: true
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Routes
app.use("/api/v1", authRoutes);
app.use('/api/v1', pacienteRoutes);

// Error handling
app.use(errorHandler);

export default app;
