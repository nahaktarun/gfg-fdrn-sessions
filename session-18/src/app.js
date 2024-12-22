import express from "express";
import bookRouter from "./routes/books.js";
import morgan from "morgan";
const app = express();

app.use(morgan("dev"));
app.use(express.json());
// TO use any middle we've to use with .use()
app.use("/api/books", bookRouter);

export default app;

// curl -> terminal tool dev
// postman , isomania, thunderclient
