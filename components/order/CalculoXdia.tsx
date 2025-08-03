"use server"

import { prisma } from "@/src/lib/prisma";
import { formatCurrency } from "@/src/utils";
/*import CalculoXdia from '@/components/order/CalculoXdia';*/
import ValidaFecha from "./ValidaFecha";

 async function GET() {
  const now = new Date();
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  console.log("Fecha de hoy: ", startOfDay)

  console.log("Fecha Final: ", endOfDay)

  // Obtener la fecha actual
  const ahora = new Date();
  console.log("Fecha actual:", ahora);

  // Obtener el año
  const año = ahora.getFullYear();
  console.log("Año:", año);

  // Obtener el mes (enero es 0)
  const mes = (ahora.getMonth() + 1);
  console.log("Mes:", mes);

  // Obtener el día del mes
  const dia = ahora.getDate();
  console.log("Día:", dia);

  // Formatear la fecha como una cadena
  const fechaFormateada = ahora.toLocaleDateString();
  console.log("Fecha formateada:", fechaFormateada);
 
/* Rutina manda a llamar el prog para hacer el calculo Total */

 /*export async function ResumenDelDia() { */
   /*async function ResumenDelDia() { */
  
    <ValidaFecha />

         return( 
        
        <>
            <aside className = "lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-10" >
              <h1 className="text-4xl text-center font-black">Total Vendido</h1>

                <p className="text-2xl mt-20 text-center py-10">
                    en el dia <span className="font-bold text-4xl text-center font-black">  {fechaFormateada} </span>
                </p>

                <p>
                    <span className="font-bold text-4xl text-center font-black">  {'formatCurrency(  total())'} </span>
                </p>
            </aside >
        </> 
 
      )
 
   }
   
 
   
      
    
 