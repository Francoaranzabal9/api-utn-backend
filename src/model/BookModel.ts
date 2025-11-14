import { Model, model, Schema } from "mongoose";
import { IBook } from "../interfaces/IBooks";




const bookSchema = new Schema<IBook>({
  title: { type: String, required: [true, 'El título del libro es obligatorio.'], unique: true, trim: true },
  author: { type: String, required: [true, 'El autor del libro es obligatorio.'], trim: true },
  publishedYear: { type: Number },
  genre: { type: String, trim: true },
  available: { type: Boolean, default: true }
}, {
  timestamps: true,
  versionKey: false
})

const Book: Model<IBook> = model("book", bookSchema)

export default Book