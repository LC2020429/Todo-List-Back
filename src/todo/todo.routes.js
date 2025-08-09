import { Router } from "express";
import {
  getTasks,
  addTask,
  deleteTask,
  editTask,
  findByImportance,
} from "./todo.controller.js";

const router = Router();

router.get("/", getTasks);
router.post("/add", addTask);
router.delete("/delete/:id", deleteTask);
router.put("/edit/:id", editTask);
router.get("/importance/:importance", findByImportance);

export default router;
