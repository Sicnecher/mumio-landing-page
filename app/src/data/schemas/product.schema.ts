import * as mongoose from "mongoose"

export const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    img: { type: Buffer, required: true },
    video: { type: Buffer, required: true },
    explain: {type: Array, required: true },
    slogen: { type: String, rquired: true },
    data_table: { type: String, required: true }
  });

  export const PRODUCT = mongoose.model('product', ProductSchema);