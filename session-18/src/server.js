import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./configs/database.js";
dotenv.config();
const PORT = process.env.PORT;

// 1. connect with database then start the server
// 2. connect with server then start the database
connectDB().then(() =>
  app.listen(PORT, () => {
    console.log(`Listening to the port ${PORT}...`);
  })
);
