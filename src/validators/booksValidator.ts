import { z } from "zod"



const bookCreateSchema = z.object({
  title: z.string().min(4),
  author: z.string().min(4),
  available: z.boolean().default(true),
  genre: z.string().min(4),
  publishedYear: z.number().min(0).positive(),
})

export const bookSchemaValidator = bookCreateSchema

export const updateSchemaValidator = bookSchemaValidator.partial()