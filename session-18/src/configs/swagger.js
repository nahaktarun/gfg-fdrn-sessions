import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Book Management API",
      version: "1.0.0",
      description: "A simple API for managing books",
    },
    servers: [
      {
        url: "http://localhost:3003",
        description: "Development server",
      },
    ],
  },
  // Path to the API docs
  apis: ["./src/routes/*.js"],
};
const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
