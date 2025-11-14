import express from "express"
import cors from "cors"
import { connectDB } from "./config/mongodb"
import morgan from "morgan"
import dotenv from "dotenv"

dotenv.config()

declare global {
  namespace Express {
    interface Request {
      user?: any
    }
  }
}

const PORT = process.env.PORT

const app = express()

//middlewares
app.use(cors())
app.use(express.json())

app.use(morgan("dev"))

app.get("/", (__, res) => {
  res.json({ status: true })
})


app.use((__, res) => {
  res.status(404).json({ error: "El recurso no se encuentra" })
})

app.listen(PORT, () => {
  connectDB()
  console.log(`✅ Servidor en escucha en el puerto http://localhost:${PORT}`)
})
