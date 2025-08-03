"use server"

import { prisma } from "@/src/lib/prisma"

import { ProductSchema } from "@/src/schema"
import { IdentificationIcon } from "@heroicons/react/24/outline"
import { Product } from "@prisma/client"
import { revalidatePath } from "next/cache"
import { notFound } from "next/navigation"
import { id } from "zod/v4/locales"

 
export async function eliminaProduct(data: unknown, id: number) {

      
    const formData = new FormData();
    
          formData.append('id', id.toString()); // Asegúrate de  

    await prisma.orderProducts.deleteMany({
        where: { productId: id },
    });
    const deleteproducto = await prisma.product.delete({
        where: {
            id: id,
        },
    })
    
    revalidatePath('/admin/products')      
    
 
}
                    
