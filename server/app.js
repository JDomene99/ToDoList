import taskRoutes from "./routes/tasks.routes.js";
import express from "express";
import cors from 'cors'

const app = express();
app.use(cors());
//para que express este preparado para recibir desde un POST
app.use(express.json());
//rutas de task
app.use(taskRoutes)



export default app;