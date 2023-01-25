import { Router } from "express";

import {
  getTask,
  getTasks,
  deleteTask,
  updateTask,
  createTask,
  getTaskByName
} from "../controllers/tasksController.js";


const router = Router();


router.get("/tasks", getTasks);

router.get("/tasks/:id", getTask);

router.get("/tasks/title/:name", getTaskByName);

router.post("/tasks", createTask);

router.put("/tasks/:id", updateTask);

router.delete("/tasks/:id", deleteTask);

export default router;
