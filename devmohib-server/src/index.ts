import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import { errorHandler } from './middlewares/globalErrorHander';
import { routes } from './routes/routes';

const app: Application = express();

app.use(helmet());
app.use(cors({ origin: process.env.ALLOWED_ORIGIN || '*' }));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', routes);

app.get('/', (req: Request, res: Response) => {
  res.send('🚀 personal web server is running');
});
app.get('/health', (req: Request, res: Response) => {
  res.send('🚀 Server is healthy');
});

// Catch-all route for unknown routes (must be defined last)
app.all(/.*/, (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.method} ${req.originalUrl} not found`,
    data: null,
  });
});

app.use(errorHandler);
export default app;
