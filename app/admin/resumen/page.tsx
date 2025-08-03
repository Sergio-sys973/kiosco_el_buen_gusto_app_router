"use server"
 
import { prisma } from "@/src/lib/prisma";
import { formatCurrency } from "@/src/utils";
 
 export default async function ResumenDelDia() {
    const orders = await prisma.order.findMany({
        where: {
            stataus: false
        }
    })
    const total = () => orders.reduce((total, id) => total + (id.total ), 0)  
      
    return (
        
        <>
            <div className="bg-indigo-600 p-2  uppercase font-black  text-4xl  text-center ">
                Por Preparar
            </div >
            <aside>
  
                <p className="text-2xl mt-20 text-center py-10 
                     bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
                     >
                     <span className="font-bold text-4xl text-center font-black">  {formatCurrency(total())} </span>
                
                </p>    

                
            </aside>
            
        </>

        )
     
}

