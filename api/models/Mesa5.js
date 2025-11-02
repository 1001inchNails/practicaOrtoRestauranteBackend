import mongoose from "mongoose";

const Mesa5Schema = new mongoose.Schema({
  pedidos: {
    type: Array,
  },
  haSidoServido: {
    type: Boolean,
  },
});

const Mesa5 = mongoose.model("Mesa5", Mesa5Schema);

export default Mesa5;
