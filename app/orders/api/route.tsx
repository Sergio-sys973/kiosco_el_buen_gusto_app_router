import { prisma } from "@/src/lib/prisma";

export const dynamic = 'force-dynamic'

export async function GET() {
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

    const orders = await prisma.order.findMany({
        take: 5,
        where: {
            orderReadyAt: {
                not: null,
                gte: startOfDay,
                lt: endOfDay,
            }
        },
        orderBy: {
            orderReadyAt: 'desc'
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