import { Router } from "express";
import {
  cambiarEstadoMesa
} from "../controllers/patchController.js";

const router = Router();
router.patch('/cambiarestadomesa', cambiarEstadoMesa);
/**
 * Ej:
 * http://localhost:5000/patch/cambiarestadomesamesa?mesaId=Mesa1&ocupada=true
 */
 
 
export { router };