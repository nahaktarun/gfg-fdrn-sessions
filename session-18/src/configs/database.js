import mongoose from "mongoose";

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, clientOptions);
    console.log("Mongodb Connected", conn.connection.host);
  } catch (error) {
    console.log("Connection to database error", error);
    process.exit(1);
  }
};

export default connectDB;
