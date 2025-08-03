import ProductCard from "@/components/products/ProductCard"
import Heading from "@/components/ui/Heading"
import { prisma } from "@/src/lib/prisma"

async function getProducts(category: string) {
  const products = await prisma.product.findMany({
    where: {
      category: {
        slug: category
      }
    }
  })
  return products
}
export default async function OrderPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  const products = await getProducts(category)
  
  return (
    <>      
      
      <div className="bg-indigo-600 p-2  uppercase text-center font-black  text-2xl ">
        Elige y Personaliza tu Pedido a Continuacion
      </div >

      <div>
        <p className="mt-4 by-3  uppercase text-white  text-center">   {''}  </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 items-start">
       
        {products.map(product => (

              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
        
      </div>
    
      
    </>
  )  
 
}
