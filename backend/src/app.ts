import express from "express";
import cors from "cors";
import ENV from "./lib/env";
import errorMiddleware from "./middlewares/error.middleware";

const app = express();

// Cors config
app.use(
  cors({
    origin: ENV.CLIENT_URL,
    credentials: true,
  }),
);

// Global Middlewares

// TODO Routers

// Error Handler
app.use(errorMiddleware);

export default app;
