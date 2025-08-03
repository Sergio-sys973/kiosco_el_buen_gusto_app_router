"use client"
import React from 'react';
import useSWR from "swr";
import Logo from "@/components/ui/Logo";
import GoBackButton from '@/components/ui/GoBackButton';
import LatestOrderItem from '@/components/order/LatestOrderItem';
import LatestBusquedaDay from '@/components/order/LatestBusquedaDay';
import { OrderWithProducts } from '@/src/types';

export default function OrdersPage() {
    const url = '/busqueda/api'
    const fetcher = (url: string | URL | Request) => fetch(url).then(res => res.json()).then(data => data)
    const { data, isLoading } = useSWR<OrderWithProducts[]>(url, fetcher, {
        refreshInterval: 60000,
        revalidateOnFocus: false,
    })

    if (isLoading) return <p>Cargando...</p>
    if (data) return (
        <>
            <div className="bg-indigo-600 p-2  uppercase  font-black text-4xl  text-center ">
              Ordenes  //  Despachadas
            </div>

            <div>
                <p className="mt-1 by-2  uppercase text-white  text-center">   {''}  </p>
            </div>


            <GoBackButton />
            <Logo />

            {data.length > 0 ? (
                <div className=" grid grid-cols-2 gap-5 max-w-5xl mx-auto mt-10">
                    {data.map(order => (

                        <LatestBusquedaDay 
                            key={order.id}
                            order={order}
                        />
                    ))}
                   
                </div>
            ) : (
                <p className="text-center my-10">No Hay Ordenes Listas Estamos Abriendo el Negocio</p>
            )}

        </>
        // const TotalGeneral = TotalGeneral + totalGen
    
     
    )
}

 
