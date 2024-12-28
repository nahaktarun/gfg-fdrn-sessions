import express from "express";
import bookRouter from "./routes/books.js";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./configs/swagger.js";
const app = express();

app.use(morgan("dev"));
app.use(express.json());
// swagger doc
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// TO use any middle we've to use with .use()
app.use("/api/books", bookRouter);

export default app;

// curl -> terminal tool dev
// postman , isomania, thunderclient
