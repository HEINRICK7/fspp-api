import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { errorHandler } from './middleware/errorMiddleware';
import authRoutes from './routes/authRoutes';
import pacienteRoutes from './routes/pacienteRoutes';

const app = express();

const corsOptions = {
  origin: ['http://localhost:3000', 'https://fspp.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/api/v1', authRoutes);
app.use('/api/v1', pacienteRoutes);

app.use(errorHandler);

export default app;
