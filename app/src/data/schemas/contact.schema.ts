import * as mongoose from "mongoose"

export const ContactSchema = new mongoose.Schema({
    full_name: { type: String, required: true },
    email: { type: String, required: true },
    phone_num: { type: String },
    contact_details: { type: String }
  });

  export const CONTACT = mongoose.model('contact', ContactSchema);