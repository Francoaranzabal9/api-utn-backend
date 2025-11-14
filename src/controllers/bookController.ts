import { Request, Response } from "express"
import book from "../model/BookModel"
import { Types } from "mongoose"
import { bookSchemaValidator, updateSchemaValidator } from "../validators/booksValidator"


class bookController {
  static getAllBooks = async (req: Request, res: Response) => {
    try {
      const bookList = await book.find()
      return res.json({ success: true, data: bookList })
    } catch (e) {
      const error = e as Error
      return res.status(500).json({ success: false, error: error.message })
    }

  }

  static getBookById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      if (!Types.ObjectId.isValid(id)) return res.status(400).json({ success: false, error: "ID invalido" })

      const findedBook = await book.findById(id)

      if (!findedBook) {
        return res.status(404).json({ success: false, message: "No se pudo encontrar el libro" })
      }

      return res.status(200).json({ success: true, data: findedBook })
    } catch (e) {
      return res.status(400).json({ success: false, error: "error al obtener el libro o el ID ingresado es invalido" })
    }
  }

  static addBook = async (req: Request, res: Response) => {
    try {
      const validation = bookSchemaValidator.safeParse(req.body)

      if (!validation.success) {
        return res.status(400).json({ success: false, error: validation.error })
      }

      const existingBook = await book.findOne({ title: validation.data.title })
      if (existingBook) {
        return res.status(400).json({ success: false, message: "El libro ya existe" })
      }

      const newBook = new book(validation.data)

      await newBook.save()
      return res.status(201).json({ success: true, data: newBook })
    } catch (e) {
      return res.status(500).json({ success: false, error: "Error al crear el libro" })
    }
  }

  static updateBook = async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      const body = req.body

      if (!Types.ObjectId.isValid(id)) return res.status(400).json({ success: false, error: "ID invalido" })

      const validation = updateSchemaValidator.safeParse(body)

      if (!validation.success) {
        return res.status(400).json({ success: false, error: validation.error })
      }

      const updatedBook = await book.findByIdAndUpdate(id, validation.data, { new: true })

      if (!updatedBook) {
        return res.status(404).json({ success: false, message: "Libro no encontrado" })
      }

      return res.json({ success: true, data: updatedBook })
    } catch (e) {
      return res.status(400).json({ success: false, error: "Error al actualizar el libro o el ID es inválido" })
    }
  }

  static deleteBook = async (req: Request, res: Response) => {
    try {
      const { id } = req.params

      if (!Types.ObjectId.isValid(id)) return res.status(400).json({ success: false, error: "ID invalido" })

      const deletedBook = await book.findByIdAndDelete(id)

      if (!deletedBook) {
        return res.status(404).json({ success: false, message: "Libro no encontrado" })
      }

      return res.json({ success: true, data: deletedBook })
    } catch (e) {
      return res.status(400).json({ success: false, error: "Error al borrar el libro o el ID es inválido" })
    }
  }

}

export default bookController