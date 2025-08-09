
import { z } from "zod";
import { categories } from "./data/categories";
import { products } from "./data/products";
import { PrismaClient } from "@prisma/client";
import { usuarios } from "./data/usuarios";

const prisma = new PrismaClient()

async function main() {
    try {
            /* await prisma.category.createMany({
                    data: categories
                })

                await prisma.product.createMany({
                    data: products
                })
            } catch (error) {
                console.log(error)
            } */

       await prisma.usuarios.createMany({        
            data: usuarios
        })
    } catch (error) {
        console.log(error)
        }   
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })

/*    validando con zod  */

export const ProductSchema = z.object({
    name: z.string()
        .trim()
        .min(1, { message: 'El Nombre del Producto no puede ir vacio' }),
    price: z.string()
        .trim()
        .transform((value) => parseFloat(value))
        .refine((value) => value > 0, { message: 'Precio debe ser mayor a cero' })
        .or(z.number().min(1, { message: 'La Categoría es Obligatoria' })),
    categoryId: z.string()
        .trim()
        .transform((value) => parseInt(value))
        .refine((value) => value > 0, { message: 'La Categoría es Obligatoria' })
        .or(z.number().min(1, { message: 'La Categoría es Obligatoria' })),
})