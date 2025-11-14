import { z } from "zod"



const bookCreateSchema = z.object({
  title: z.string().min(4),
  author: z.string().min(4),
  available: z.boolean().default(true).optional(),
  genre: z.string().min(4).optional(),
  publishedYear: z.number().min(0).positive().optional(),
})

export const bookSchemaValidator = bookCreateSchema

export const updateSchemaValidator = bookSchemaValidator.partial()