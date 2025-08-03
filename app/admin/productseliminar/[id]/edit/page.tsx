
import GoBackButton from "@/components/ui/GoBackButton"
import { prisma } from "@/src/lib/prisma"
import { notFound } from "next/navigation" 
import ProductFormEliminar from "@/app/admin/productseliminar/ProductFormEliminar"
import EditProductFormEliminaa from "../../EditProductFormEliminaa"

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

    const product = await getProductById(+(await params).id)  
    
    return (
      
      <>
          <div className="bg-indigo-600 p-2  uppercase font-black  text-4xl  text-center ">
              E L I M I N A R  
          </div >
            <p className="mt-2 by-5 bg-indigo-600 uppercase text-white  text-center"> Ud. esta Seguro de -- Eliminar ---- este Producto {' ==> '} {product.name} </p>
            <div>
                <p className="mt-1 by-2  uppercase text-white  text-center">   {''}  </p>  
            </div>
            
            
          <GoBackButton />
          <EditProductFormEliminaa>  
              <ProductFormEliminar
                  product={product}
              />   
           </EditProductFormEliminaa> 
      </>
  )
 }


 
  