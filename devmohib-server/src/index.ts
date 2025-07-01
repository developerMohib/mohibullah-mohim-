import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { errorHandler } from './middlewares/globalErrorHander';
const app: Application = express();

app.use(cors());
app.use(express.json());

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
