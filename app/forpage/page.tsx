
import { prisma } from "@/src/lib/prisma";
import GoBackButton from '@/components/ui/GoBackButton';
 
 export default async function ResumenDelDia() {
    const orders = await prisma.order.findMany({
        where: {
            stataus: false
        }
    })

    return (

        <>
         <aside className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1 gap-4   items-start">  
                <h1 className="text-4xl text-center font-bold text-white bg-indigo-600 hover: bg-indigo-800 uppercase" >  Formas de Pagos </h1>
                
                < p className = "text-2xl mt-3 text-center" >
                      Banesco {''}       
                </p>
                
                < p className="text-2xl mt-2 text-center" >
                    Provincial{''}
                </p>

                < p className="text-2xl mt-2 text-center" >
                    Banca Amiga{''}
                </p>

                < p className="text-2xl mt-2 text-center" >
                    Mercantil{''} 
                </p>

                < p className="text-2xl mt-2 text-center" >
                    BNC{''}
                </p>

                < p className="text-2xl mt-2 text-center" >
                    Zelle{''}
                </p>
                
                < p className="text-2xl mt-2 text-center" >
                    Banesco Panama{''}
                </p>

                <p className="lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-1" >
                </p>   

                <p className="w-full inline-flex items-center justify-center px-2 py-3 border border-transparent rounded-md shadow-sm text-base font-bold text-white bg-indigo-600 hover: bg-indigo-800 uppercase"  >
                        Telefono: {'0424.xyz-.39.56'}
                </p>
                
                <p className="mt-2 w-full inline-flex items-center justify-center px-4 py-3 border border-transparent rounded-md shadow-sm text-base font-bold text-white bg-indigo-600 hover: bg-indigo-800 uppercase" >
                        Cedula: {'55.908.736'}                       
                </p>
                
                    <p className="mt-1 w-full inline-flex items-center justify-center px-1 py-1 border border-transparent rounded-md shadow-sm text-base font-bold text-white">
                </p>
                
                    <GoBackButton />
      
        </aside>
     
        </>
      )

}

