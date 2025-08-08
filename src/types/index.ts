import { OrderProducts, Product } from "@prisma/client"
import { ReactNode } from "react"
 

export type OrderItem = Pick<Product, 'id' | 'name' | 'price'> & {
    quantity: number
    subtotal: number
}


interface OrderProduct {
    id: number;
    orderId: number;
    productId: number;
    quantity: number;
    product: Product;
}

export type OrderWithProducts = {
  /*  [x: string]: any 
    reduce(arg0: (total: any, id: any) => any, arg1: number): unknown */
   /* id: string | number | readonly string[] | undefined */
    id: string | number 
    total: number
    name: ReactNode
    orderProducts: (OrderProducts & {
        product: Product
    })[]
}
/****************************************** */


/***************************************** */

export type OrdersItem = {
      orders: {
        name: string;
        id: number;
        total: number;
        date: Date;
        stataus: boolean;
        orderReadyAt: Date | null;
    }[]
}