import express from "express";
import cors from "cors";
import ENV from "./lib/env";

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

// TODO error handler

export default app;
