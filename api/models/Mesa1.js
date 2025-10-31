import mongoose from "mongoose";

const Mesa1Schema = new mongoose.Schema({
  pedidos: {
    type: Array,
  },
  haSidoServido: {
    type: Boolean,
  },
});

const Mesa1 = mongoose.model("Mesa1", Mesa1Schema);

export default Mesa1;
