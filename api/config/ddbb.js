import 'dotenv/config';
import mongoose from "mongoose";

const mongoURI = process.env.MONGO_URI;
const ddbbName = process.env.DDBB_NAME;

// conexion mongoose a bbdd
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      dbName: ddbbName
    });
    console.log('MongoDB conectez saksesfuli');
  } catch (err) {
    console.error('MongoDB coneksion error:', err);
    process.exit(1);
  }
};

export default connectDB;