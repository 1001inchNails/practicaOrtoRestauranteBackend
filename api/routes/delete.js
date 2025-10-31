import { Router } from "express";
import {
  deleteMesa,
  deletePedido
} from "../controllers/deleteController.js";

const router = Router();
router.delete('/deletemesa', deleteMesa);
/**
 * Ej:
 * http://localhost:5000/delete/deletemesa?mesaId=Mesa1
 */

router.delete('/deletepedido', deletePedido);
/**
 * Ej:
 * http://localhost:5000/delete/deletepedido?mesaId=Mesa1&idDocu=mongoId
 */
 
export { router };