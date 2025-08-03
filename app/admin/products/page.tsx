import {redirect} from 'next/navigation'
import ProductsPagination from "@/components/products/ProductsPagination";
import { prisma } from "@/src/lib/prisma";
import Link from 'next/link';
import ProductSearchForm from '@/components/products/ProductSearchForm';
import ProductsTable from '@/components/products/ProductsTable';

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

export type ProductsWithCategory = Awaited<ReturnType<typeof getProducts >>

export default async function ProductsPage({ searchParams }: { searchParams: Promise<{ page: string }> }) {
  const { page: pageParam } = await searchParams
  const page = + pageParam || 1

  const pageSize = 10  
  if (page < 0) redirect('/admin/products')
  const productsData =  getProducts(page, pageSize)
  const totalProductsData = productCount()
  const[products, totalProducts] = await Promise.all([productsData, totalProductsData])
  
  const totalPages = Math.ceil(totalProducts / pageSize)

  if (page > totalPages) redirect('/admin/products')
    
  return (  
    <>
      <div className="bg-indigo-600 p-2  uppercase font-black  text-4xl  text-center ">
        Administrar Productos
     </div >
      
      <div>
        <p className="mt-1 by-2  uppercase text-white  text-center">   {''}  </p>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between gap-5">
         <Link
              href={'/admin/products/new'}
              className='bg-amber-400 w-full lg:w-auto text-xl px-10 py-3 text-center font-bold cursor-pointer'
                >Crear Producto</Link>
                
                <ProductSearchForm />
        
          </div>
                <ProductsTable
                  products ={products}
                />
                < ProductsPagination
                  page={page}
                  totalPages = {totalPages}
                />

    </>
  )
}
  
 
    
 