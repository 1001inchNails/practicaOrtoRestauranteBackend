import { Router } from "express";
import {
  readAllMenus,
  readMesa,
  readEstadoMesa
} from "../controllers/getController.js";

const router = Router();
router.get('/readallmenus', readAllMenus);
/**
 * Ej:
 * http://localhost:5000/get/readallmenus
 */


router.get('/readmesa', readMesa);
/**
 * Ej:
 * http://localhost:5000/get/readmesa?mesaId=Mesa1
 */

router.get('/readestadomesa', readEstadoMesa);
/**
 * Ej:
 * http://localhost:5000/get/readestadomesa?mesaId=Mesa1
 */
 
export { router };