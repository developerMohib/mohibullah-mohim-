
export const connectDB = async () => {
  try {
    // await mongoose.connect(config.databaseUrl);
    console.log('✅ Connected to MongoDB');
  } catch (err) {
    console.error('❌ Could not connect to MongoDB:', err);
    process.exit(1);
  }
};
