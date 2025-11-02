import mongoose from "mongoose";

const Mesa2Schema = new mongoose.Schema({
  pedidos: {
    type: Array,
  },
  haSidoServido: {
    type: Boolean,
  },
});

const Mesa2 = mongoose.model("Mesa2", Mesa2Schema);

export default Mesa2;
