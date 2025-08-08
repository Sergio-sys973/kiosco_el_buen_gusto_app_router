
import ProductSearchFormElimina from "@/app/admin/productseliminar/ProductSearchFormElimina"; 
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import ProductsTableEliminar from "@/app/admin/productseliminar/ProductsTableEliminar";


async function getProducts(page: number, pageSize: number) {
    const skip = (page - 1) * pageSize
    const products = await prisma.product.findMany({
        take: pageSize,
        skip,
        include: {
            category: true
        }

    })

    return products
}


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
export type ProductsWithCategory = Awaited<ReturnType<typeof getProducts>>

export default async function SearchPage({
    searchParams,
}: {
    searchParams: Promise<{ search: string }>
}) {
    const { search } = await searchParams;
    const products = await searchProducts(search);
    const url= 'admin/productseliminar'
    return (
        <>
            <div className="bg-indigo-600 p-2  uppercase font-black  text-4xl  text-center ">
                E L I M I N A R
            </div >
            <p className="mt-2 by-5 bg-indigo-600 uppercase text-white  text-center"> Seleccionar Producto </p>
          
            <Heading> {} {search}</Heading>

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