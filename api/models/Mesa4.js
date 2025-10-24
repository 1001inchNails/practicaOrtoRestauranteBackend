import mongoose from "mongoose";

const Mesa4Schema = new mongoose.Schema({
  pedidos: {
            type: Array
          }
});

const Mesa4 = mongoose.model("Mesa4", Mesa4Schema);

export default Mesa4;