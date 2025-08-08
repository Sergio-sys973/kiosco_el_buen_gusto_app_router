

"use client"

import React from 'react';
import useSWR from "swr";
import Logo from "@/components/ui/Logo";
import GoBackButton from '@/components/ui/GoBackButton';
import { OrderWithProducts } from '@/src/types';
import BusquedaVentasdelDia from '@/components/order/BusquedaVentasdelDia';
import { formatCurrency } from "@/src/utils";

let date = new Date();
let formattedDate = date.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric"
});
console.log(formattedDate);  // "16 de octubre de 2024"

/*type LatestOrderItemProps = {
    order: OrderWithProducts[];
 }*/

export default function LatestOrderItem( ) {


    const url = '/totalday/api'
    const fetcher = (url: string | URL | Request) => fetch(url).then(res => res.json()).then(data => data)
    const { data, isLoading } = useSWR<OrderWithProducts[]>(url, fetcher, {
        refreshInterval: 60000,
        revalidateOnFocus: false,
    }) 
      
    if (isLoading) return <p>Cargando...</p>
    
    console.log('data', data)

    const total = () => (data ?? []).reduce((total, id) => total + (id.total), 0);

    if (data) return (
            
        <>
            <div className="bg-indigo-600 p-2  uppercase  font-black text-4xl  text-center ">
                Ventas    Dia ... {formattedDate}
            </div>

            <div>
                <p className="mt-1 by-2  uppercase text-white  text-center">   {''}  </p>
            </div>
           <GoBackButton />
            <Logo />

            <div>
                <p className="bg-indigo-600 mt-20 p-2  uppercase  font-black text-4xl  text-center ">   {' Resumen ==> '} {formatCurrency(total())} </p>
                
                { }
            </div>

            {data.length > 0 ? (
              
                <div className=" grid grid-cols-2 gap-5 max-w-5xl mx-auto mt-10">
                    {data.map(order => (

                        <BusquedaVentasdelDia
                            key={order.id}
                            order={order}
                        />
                    ))}

                </div>
            ) : (
                <p className="text-center my-10"> NO se ha Despachado Ninguna Orden</p>
            )}

        </>
       
    )

}


