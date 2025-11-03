import { Router } from "express";
import {
  createObjetoMenu,
  mandarPedidoDeMesa
} from "../controllers/postController.js";

const router = Router();
router.post('/createobjetomenu', createObjetoMenu);
/**
 * Ej:
 * http://localhost:5000/post/createobjetomenu
 * 
 * body:
 * 
 * {
  "nombre": "testProducto004",
  "precio": 4.4,
  "descripcion": "Test Producto 004 precio 4.4"
}
 */
router.post('/mandarpedidodemesa', mandarPedidoDeMesa);
/*
ejemplo:
{
  "mesa": "Mesa1",
  "pedidos": [
  {
    "id": 1,
    "nombre": "testProducto001",
    "precio": 1.1,
    "descripcion": "Test Producto 001 precio 1.1"
  },
  {
    "id": 2,
    "nombre": "testProducto002",
    "precio": 2.2,
    "descripcion": "Test Producto 002 precio 2.2"
  },
  {
    "id": 3,
    "nombre": "testProducto003",
    "precio": 3.3,
    "descripcion": "Test Producto 003 precio 3.3"
  }
]
}
*/
export { router };