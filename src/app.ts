import express from "express";
import cors from 'cors';
import morgan from "morgan";
import { errorHandler } from "./middleware/errorMiddleware";
import authRoutes from "./routes/authRoutes";
import pacienteRoutes from "./routes/pacienteRoutes";

const app = express();

const corsOptions = {
  origin: "https://fspp-git-master-heinrick7s-projects.vercel.app", // Certifique-se de que este é exatamente o domínio de onde as requisições estão sendo feitas
  methods: ['GET', 'POST', 'OPTIONS'], // Incluir OPTIONS é crucial para respostas de preflight
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204 // Alguns navegadores (e.g., Chrome) requerem status 204 para preflight
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Routes
app.use("/api/v1", authRoutes);
app.use('/api/v1', pacienteRoutes);
app.options('*', cors(corsOptions), (req, res) => {
  console.log('Received OPTIONS request:', req.headers);
  res.sendStatus(204);
});
// Error handling
app.use(errorHandler);

export default app;
