import mongoose from "mongoose";
//1. create a sch
//2. model of the schema
const noteSchema = new mongoose.Schema(
  {
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
},
{timestamps: true} // this will add createdAt and updatedAt fields automatically
);

const Note = mongoose.model("Note", noteSchema);
export default Note;
