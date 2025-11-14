import { Router } from "express"
import bookController from "../controllers/bookController"

const bookRouter = Router()



bookRouter.get("/", bookController.getAllBooks)

bookRouter.get("/:id", bookController.getBookById)

bookRouter.post("/", bookController.addBook)

bookRouter.delete("/:id", bookController.deleteBook)

bookRouter.patch("/:id", bookController.updateBook)




export default bookRouter