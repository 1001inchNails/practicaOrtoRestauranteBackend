import { Router } from "express";
import {
  deleteMesa
} from "../controllers/deleteController.js";

const router = Router();
router.delete('/deletemesa', deleteMesa);
/**
 * Ej:
 * http://localhost:5000/delete/deletemesa?mesaId=Mesa1
 */
 
export { router };