
import app from '.';
import config from './config/config';
import { connectDB } from './db/connect';

async function startServer() {
  try {
    await connectDB();

    app.listen(config.port, () => {
      console.log(`🚀 My server running on port ${config.port}`);
    });
  } catch (err) {
    console.error('❌ Failed to start server:', err);
    process.exit(1);
  }
}

startServer();

process.on('unhandledRejection', (reason) => {
  console.error('Unhandled Rejection:', reason);
  process.exit(1);
});

process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  process.exit(1);
});
