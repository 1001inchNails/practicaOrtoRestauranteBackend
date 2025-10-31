import { Router } from "express";
import {
  cambiarEstadoMesa,
  cambiarEstadoPedido
} from "../controllers/patchController.js";

const router = Router();
router.patch('/cambiarestadomesa', cambiarEstadoMesa);
/**
 * Ej:
 * http://localhost:5000/patch/cambiarestadomesa?mesaId=Mesa1&ocupada=true
 */

router.patch('/cambiarestadopedido', cambiarEstadoPedido);
/**
 * Ej:
 * http://localhost:5000/patch/cambiarestadopedido?iddocu=idMongo&mesaId=Mesa1&&hasidoservido=true
 */
 
 
export { router };