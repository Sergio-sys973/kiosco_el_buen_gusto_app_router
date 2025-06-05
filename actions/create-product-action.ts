"use server"

import { prisma } from "@/src/lib/prisma"
import { ProductSchema } from "@/src/schema"


export async function createProduct(data: unknown) {
    const result = ProductSchema.safeParse(data)
    
    if(!result.success) {
        return {
            errors: result.error.issues
        }
    }

    /* si pasa la validacion creamos el producto*/

    await prisma.product.create({
        data: result.data
    })
}