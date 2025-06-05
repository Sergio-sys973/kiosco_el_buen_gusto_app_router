"use server"

import { prisma } from "@/src/lib/prisma"
import { ProductSchema } from "@/src/schema"
import { revalidatePath } from "next/cache"

export async function updateProduct(data: unknown, id: number) {
       /* console.log(data)*/
       /* console.log(id)*/
    
        const result = ProductSchema.safeParse(data)
   
    /* Validacion del Servidor */
        if(!result.success) {
            return {
                errors: result.error.issues
            }
        }
    
    /* Fin de la Validacion  Servidor*/

    /* si pasa la validacion Actualizamos el producto*/
    
    await prisma.product.update({
        where: {
              id  
            },
            data: result.data
    })
    revalidatePath('/admin/products')
}