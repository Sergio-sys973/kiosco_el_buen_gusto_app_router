import { prisma } from "@/src/lib/prisma"


export async function GET() { 

    const orders = await prisma.order.findMany({
      where: {
        stataus: false
      },
      include: {
        orderProducts: {
          include: {
            product: true
          }
        }  
      }
    })
 
  return Response.json(orders)
   
}
