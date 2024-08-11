import express from "express";
import cors from "cors";
import morgan from "morgan";
import { errorHandler } from "./middleware/errorMiddleware";
import authRoutes from "./routes/authRoutes";
import pacienteRoutes from "./routes/pacienteRoutes";

const app = express();

// Configuração do CORS
const corsOptions = {
  origin: "https://fspp-git-master-heinrick7s-projects.vercel.app", // Permite requisições somente deste origin
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Métodos permitidos
  allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept", // Cabeçalhos permitidos
  credentials: true // Permite cookies e dados de autenticação
};

app.use(cors(corsOptions)); // Aplica as configurações CORS
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev")); // Logging

// Rotas
app.use("/api/v1", authRoutes);
app.use("/api/v1", pacienteRoutes);

// Tratamento de Erros
app.use(errorHandler);

export default app;
