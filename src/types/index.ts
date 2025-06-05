import { OrderProducts, Product } from "@prisma/client"
import { ReactNode } from "react"
 

export type OrderItem = Pick<Product, 'id' | 'name' | 'price'> & {
    quantity: number
    subtotal: number
}


export type OrderWithProducts = {
   /* id: string | number | readonly string[] | undefined */
    id: string | number 
    total: number
    name: ReactNode
    orderProducts: (OrderProducts & {
        product: Product
    })[]
}