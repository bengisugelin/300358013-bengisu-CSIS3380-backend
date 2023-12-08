import mongoose from 'mongoose';
const { Schema } = mongoose;


// create Schema Object (bookSchema)
const BookListSchema = new mongoose.Schema({
    title: { 
      type: String, 
      required: true 
    },
    author: { 
      type: String, 
      required: true 
    },
    description: { 
        type: String, 
        required: true 
      },
    pages: { 
      type: Number,
       required: true 
      }
  });


  export default mongoose.model("300358013-bengisu", BookListSchema);
