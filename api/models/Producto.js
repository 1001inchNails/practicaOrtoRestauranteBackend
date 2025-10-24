import mongoose from "mongoose";

const ProductoSchema = new mongoose.Schema({
  id: {
            type: Number
          },
  nombre: {
            type: String
          },
  precio: {
            type: Number
          },
  descripcion: {
            type: String
          }
});


const Producto = mongoose.model("Producto", ProductoSchema);

export default Producto;