import mongoose from 'mongoose';

const connectDB = async () => {
  const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/deepvisionlab';
  try {
    await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 5000 ,
    });

    console.log('✅ MongoDB connecté avec succès !');
  } catch (error) {
    console.error('❌ Échec de la connexion à MongoDB:', error);
    process.exit(1);
  }
};

export default connectDB;
