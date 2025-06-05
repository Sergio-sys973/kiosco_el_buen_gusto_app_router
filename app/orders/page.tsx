"use client"
import React from 'react';
import useSWR from "swr";
import Logo from "@/components/ui/Logo";
import { OrderWithProducts } from "@/src/types";
import LatestOrderItem from "@/components/order/LatestOrderItem";
import GoBackButton from '@/components/ui/GoBackButton';

export default function OrdersPage() {
    const url = '/orders/api'
    const fetcher = (url: string | URL | Request) => fetch(url).then(res => res.json()).then(data => data)
    const { data, isLoading } = useSWR<OrderWithProducts[]>(url, fetcher, {
        refreshInterval: 60000,
        revalidateOnFocus: false,
    })

    if(isLoading) return <p>Cargando...</p>
    if(data) return (    
         <>
        <h1 className ="text-center mt-20 text-6xl font-black"> Ordenes Listas</h1>
        <GoBackButton />
            <Logo />

            {data.length > 0 ? (            
                <div className=" grid grid-cols-2 gap-5 max-w-5xl mx-auto mt-10">
                    {data.map(order => (
                        
                        <LatestOrderItem
                            key={order.id}
                            order={order}
                        />
                    ))}  

                </div>
            ) : (
                    <p className="text-center my-10">No Hay Ordenes Listas</p>
                )}
            
        </>
    ) }