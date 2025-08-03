 /*"use server"*/


/*import SearchDays from '@/components/products/SearchDays';*/

import { prisma } from '@/src/lib/prisma'

/*export const dynamic = 'force-dynamic'*/

// Obtener la fecha actual
const ahora = new Date();
console.log("Fecha actual:", ahora);

// Obtener el año
const año = ahora.getFullYear();
console.log("Año:", año);

// Obtener el mes (enero es 0)
const mes = ahora.getMonth();
console.log("Mes:", mes);

// Obtener el día del mes
const dia = ahora.getDate();
console.log("Día:", dia);

// Formatear la fecha como una cadena
const fechaFormateada = ahora.toLocaleDateString();
console.log("Fecha formateada:", fechaFormateada);

export default async function GET() {
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

    /*<SearchDays />*/

    return (  
        
        <> 
    
           
    <aside className="lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-5">
        <h1 className="text-2xl text-center font-black">Estoy En Pedido por el dia</h1>


        <p className="text-2xl mt-2 text-center">
            procesando {''}

        </p>

            </aside>
            
       </>
    )
}  



