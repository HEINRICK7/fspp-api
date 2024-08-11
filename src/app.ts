import express from "express";
import cors from 'cors';
import morgan from "morgan";
import { errorHandler } from "./middleware/errorMiddleware";
import authRoutes from "./routes/authRoutes";
import pacienteRoutes from "./routes/pacienteRoutes";

const app = express();

// Configure CORS para permitir localhost e a URL de produção
const corsOptions = {
  origin: function (origin: any, callback: any) {
    const allowedOrigins = ['https://fspp-git-master-heinrick7s-projects.vercel.app', 'http://localhost:3000'];
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Routes
app.use("/api/v1", authRoutes);
app.use('/api/v1', pacienteRoutes);

// Error handling
app.use(errorHandler);

export default app;
