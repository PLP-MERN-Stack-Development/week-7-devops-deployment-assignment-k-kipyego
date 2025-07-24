import mongoose from 'mongoose';
import winston from 'winston';

const connectDB = async (): Promise<void> => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mern-demo';
    
    await mongoose.connect(mongoURI);
    
    winston.info('MongoDB Connected Successfully');
  } catch (error) {
    winston.error('MongoDB Connection Error:', error);
    // Exit process with failure
    process.exit(1);
  }
};

export default connectDB; 