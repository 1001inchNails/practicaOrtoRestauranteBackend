import mongoose from "mongoose";

const Mesa3Schema = new mongoose.Schema({
  pedidos: {
            type: Array
          }
});

const Mesa3 = mongoose.model("Mesa3", Mesa3Schema);

export default Mesa3;