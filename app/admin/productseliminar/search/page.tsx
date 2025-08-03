import ProductSearchFormElimina from "@/components/products/ProductSearchFormElimina";

import { prisma } from "@/src/lib/prisma";
import ProductsTableEliminar from "../ProductsTableEliminar";

async function searchProducts(searchTerm: string) {
    const products = await prisma.product.findMany({
        where: {
            name: {
                contains: searchTerm,
                mode: 'insensitive'
            }
        },
        include: {
            category: true
        }
    })
    return products
}

export default async function SearchPage({
    searchParams,
}: {
    searchParams: Promise<{ search: string }>
}) {
    const { search } = await searchParams;
    const products = await searchProducts(search);

    return (
        <>
            
            <div className="bg-indigo-600 p-2  uppercase font-black  text-4xl  text-center ">
                BUSQUEDA Y RESULTADOS
            </div >

           
            <div>
                <p className="mt-1 by-2  uppercase text-white  text-center">   {''}  </p>
            </div>

        
            <div>
                <p className="mt-10 by-2  uppercase text-white  text-center">   {''}  </p>
            </div>
            
   
               <div className="flex flex-col lg:flex-row lg:justify-end gap-5">
                    <ProductSearchFormElimina />
                </div>

                {products.length ? (
                    <ProductsTableEliminar
                    products={products}
                    />

                    ): <p className="text-center text-lg">No Hay Resultados</p>}
            
            </>
        )
}
    

