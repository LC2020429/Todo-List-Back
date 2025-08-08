"use strict";

import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import express from "express";
import { connectionDB } from "./mongo.js";
import todoRoutes from "../src/todo/todo.routes.js";


const allowedOrigins = [
  "http://localhost:5173",
];


const corsOptions = {
  origin: allowedOrigins,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  preflightContinue: false,
  optionsSuccessStatus: 204
};

const middlewares = (app) => {
  app.use(cors(corsOptions));
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use(helmet());
  app.use(morgan("dev"));
};

const routes = (app) => {
  app.use("/api/to-do", todoRoutes);
};

const connectionMongo = async () => {
  try {
    await connectionDB();
  } catch (error) {
    console.log(`Data Base connection failed: ${error}`);
  }
};

export const initServer = async () => {
  const app = express();
  const timeInit = Date.now();
  try {
    middlewares(app);
    await connectionMongo();
    routes(app);
    app.listen(process.env.PORT);
    const elapsedTime = Date.now() - timeInit;
    console.log(`Server running on port ${process.env.PORT} (${elapsedTime}ms)`);
  } catch (error) {
    console.log(`Server failed to start: ${error}`);
  }
};