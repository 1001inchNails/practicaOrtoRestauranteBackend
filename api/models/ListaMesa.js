import mongoose from "mongoose";

const ListaMesaSchema = new mongoose.Schema({
  idMesa: {
            type: String
          },
  ocupada: {
            type: Boolean,
            default: false
          }
});


const ListaMesa = mongoose.model("ListaMesa", ListaMesaSchema);

export default ListaMesa;