import express from "express";
import cors from "cors";
import morgan from "morgan";
import { errorHandler } from "./middleware/errorMiddleware";
import authRoutes from "./routes/authRoutes";
import pacienteRoutes from "./routes/pacienteRoutes";

const app = express();

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Origin",
    "https://fspp-git-master-heinrick7s-projects.vercel.app"
  ); // Update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Routes
app.use("/api/v1", authRoutes);
app.use("/api/v1", pacienteRoutes);

// Error handling
app.use(errorHandler);

export default app;
