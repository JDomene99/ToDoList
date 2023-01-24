import taskRoutes from "./routes/tasks.routes.js";
import express from "express";

const app = express();

app.use(taskRoutes)



export default app;