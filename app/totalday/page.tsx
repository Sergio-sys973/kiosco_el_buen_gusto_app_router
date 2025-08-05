

"use client"
import { useMemo } from "react"
import React from 'react';
import useSWR from "swr";
import Logo from "@/components/ui/Logo";
import GoBackButton from '@/components/ui/GoBackButton';
//import LatestOrderItem from '@/components/order/LatestOrderItem';
//import LatestBusquedaDay from '@/components/order/LatestBusquedaDay';
import { OrderWithProducts } from '@/src/types';
import BusquedaVentasdelDia from '@/components/order/BusquedaVentasdelDia';
import { formatCurrency } from "@/src/utils";
import { id } from "zod/v4/locales";

let totalgen = 0

/*let date = new Date();
date.setFullYear(2025);
date.setMonth(11);  // Diciembre
date.setDate(25);   // 25 de diciembre
console.log(date);  // Imprime "Thu Dec 25 2025 ..."  */

let date = new Date();
let formattedDate = date.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric"
});
console.log(formattedDate);  // "16 de octubre de 2024"


type LatestOrderItemProps = {
    order: OrderWithProducts[] | undefined
}

export default function LatestOrderItem({ order }: LatestOrderItemProps) {


//export default function OrdersPage() {
    const url = '/totalday/api'
    const fetcher = (url: string | URL | Request) => fetch(url).then(res => res.json()).then(data => data)
    const { data, isLoading } = useSWR<OrderWithProducts[]>(url, fetcher, {
        refreshInterval: 60000,
        revalidateOnFocus: false,
    }) 

   
    
    if (isLoading) return <p>Cargando...</p>
    
    console.log('data', data)

    const total = () => (data ?? []).reduce((total, id) => total + (id.total), 0);


 /*    const total = () => {
            if (!data) {
                return 0; // O un valor por defecto si `data` es undefined
            }
             return data.reduce((total, id) => total + (id.total), 0);
}; */

 
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
                <p className="text-center my-10">No Hay Ordenes Listas Estamos Abriendo el Negocio</p>
            )}

        </>
       
    )
}


function moment() {
    throw new Error("Function not implemented.");
}


/*const total = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])    */

/* 
                <p className="mt-1 by-2  uppercase text-black  text-center"  */



/*********************************************************** */

/*if (data) {
    // Aquí puedes usar "data" porque sabemos que no es undefined.
} else {
    // Manejo de casos donde "data" es undefined.
} */


//const finalData = data || [];

//const orders = data as OrderWithProducts[];


/* const total = () => {
    if (!data) {
        return 0; // O un valor por defecto si `data` es undefined
    }
    return data.reduce((total, id) => total + (id.total), 0);
};*/

//const total = () => (data ?? []).reduce((total, id) => total + (id.total), 0);

//const total = () => (data ?? []).reduce((total, order) => total + (order.total || 0), 0);


/*if (isLoading) {
    return <div>Cargando...</div>; // Muestra un mensaje de carga
} */

/*if (!data || data.length === 0) {
    return <div>No hay datos disponibles</div>; // Manejo de no datos
}*/


//<div>Total: {total()}</div>


/*const total = () => {
    if (!data || data.length === 0) return 0; // Manejo de datos indefinidos
    return (data ?? []).reduce((total, order) => total + (order.total || 0), 0);
};

return (
    <div>Total: {formatCurrency(total())}</div> // Correcto, aquí estamos llamando a total()
);*/


/*********************************************************** */
