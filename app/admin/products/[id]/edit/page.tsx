import EditProductForm from "@/components/products/EditProductForm"
import ProductForm from "@/components/products/ProductForm"
import GoBackButton from "@/components/ui/GoBackButton"
import Heading from "@/components/ui/Heading"
import { prisma } from "@/src/lib/prisma"
import { notFound } from "next/navigation"

async function getProductById(id: number) {
    const product = await prisma.product.findUnique({
        where: {
            id
        }
    })

    if (!product) {
        /*redirect('/404')*/
        notFound()
    }

    return product
}

export default async function EditProductsPage({ params }: { params: Promise<{ id: string }> }) {
    /*console.log(params.id) */
   /* const product = await getProductById(+params.id) */
    const product = await getProductById(+(await params).id)  

   /* console.log(product) */
    
  return (
      <>
          <Heading>Editar Producto: {product.name} </Heading>
          
            <GoBackButton />

          <EditProductForm>
              <ProductForm
                    product={product}
              />              
          </EditProductForm>
 
      </>
  )
 }
