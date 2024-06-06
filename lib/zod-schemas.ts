import { z } from "zod"
import { checkIfFileIsAnImage } from "./utils/images"

const MAX_FILE_SIZE = 5000000

export const postFieldsSchema = z.object({ 
    title: z.string().min(5, "Le titre doit avoir au moins 2 caractères"),
    content: z.string().min(126, "Le contenu de l'article doit avoir au moins 120 caractères"),
    categories: z.string().array().min(1,"L'article doit avoir au moins 1 catégorie").max(4,"L'article doit avoir au plus 4 catégories"),
    // @ts-ignore
    coverImage: z.any().refine((file:File) => file?.length !== 0, "Vous devez uploader une image")
                .refine((file) => checkIfFileIsAnImage(file), "Seuls les images sont supportés")
                .refine((file) => file.size < MAX_FILE_SIZE, "La taille max de l'image est de 5MB")
})

export const loginCredentialsSchema = z.object({ 
    email: z.string().email("L'adresse email est invalide"), 
    password: z.string().min(6, "Le mot de passe doit avoir au moins 6 caractères") 
 })

export const registerCredentialsSchema = z.object({ 
    name: z.string().min(2, "Le nom doit avoir au moins 2 caractères"),
    username:z.string().min(3, "Le pseudo doit avoir au moins 3 caractères"),
    email: z.string().email("L'adresse email est invalide"), 
    password: z.string().min(6, "Le mot de passe doit avoir au moins 6 caractères") 
 })