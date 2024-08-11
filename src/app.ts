import express from "express";
import { errorHandler } from "./middleware/errorMiddleware";
import authRoutes from "./routes/authRoutes";
import pacienteRoutes from "./routes/pacienteRoutes";

const app = express();
const cors = require("cors");
const morgan = require("morgan");
// Configure CORS para permitir localhost e a URL de produção
app.use(cors({
  origin: 'https://fspp-git-master-heinrick7s-projects.vercel.app' // Apenas aceita requisições deste domínio
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
// Responder a todas as requisições OPTIONS com CORS
app.use("/api/v1", authRoutes);
app.use('/api/v1', pacienteRoutes);
app.use(errorHandler);

export default app;
