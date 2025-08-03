
import { redirect } from 'next/navigation'
import ProductsPaginationEliminar from "@/components/products/ProductsPaginationEliminar";
import ProductSearchFormElimina from "@/app/admin/productseliminar/ProductSearchFormElimina"; 
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import ProductsTableEliminar from "@/app/admin/productseliminar/ProductsTableEliminar";

async function productCount() {
    return await prisma.product.count()
}


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

export type ProductsWithCategory = Awaited<ReturnType<typeof getProducts>>


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

   export default async function ProductsPage({ searchParams }: { searchParams: Promise<{ page: string }> }) {
     const { page: pageParam } = await searchParams
     const page = + pageParam || 1
   
     const pageSize = 10  
     if (page < 0) redirect('/admin/productseliminar')
     const productsData =  getProducts(page, pageSize)
     const totalProductsData = productCount()
     const[products, totalProducts] = await Promise.all([productsData, totalProductsData])
     
     const totalPages = Math.ceil(totalProducts / pageSize)
   
     if (page > totalPages) redirect('/admin/productseliminar')
       
        return (
        <>
            <div className="bg-indigo-600 p-2  uppercase font-black  text-4xl  text-center ">
                E L I M I N A R
            </div >
            <p className="mt-2 by-5 bg-indigo-600 uppercase text-white  text-center"> Seleccionar un  Producto </p>
          
            <Heading> {}  </Heading>

                <div className="flex flex-col lg:flex-row lg:justify-end gap-5">
                    <ProductSearchFormElimina />
                </div>
                 
                {products.length ? (
                    <ProductsTableEliminar
                    products={products}
                    />

                ) : <p className="text-center text-lg">No Hay Resultados</p>}
              
                < ProductsPaginationEliminar
                    page={page}
                    totalPages = {totalPages}
                />
            
            </>
        )
    }