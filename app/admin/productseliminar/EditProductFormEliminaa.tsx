
 "use client"
import { toast, ToastContentProps } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { useParams } from 'next/navigation'
import { eliminaProduct } from '@/actions/elimina-product-action'

 
export default  function EditProductFormEliminar({ children }: { children: React.ReactNode }) { 

/*export default function EditProductFormEliminar()  {*/
    const router = useRouter()
    const params = useParams()
    const id = +params.id!
    
  /*const handledeleteProduct = () => {*/
    const handledeleteProduct = async (formData: FormData) => {
      const data = {
        name: formData.get('name'),
        price: formData.get('price'),
        categoryId: formData.get('categoryId'),
        image: formData.get('image')
      }
      
      const response = await eliminaProduct(data, id) 
     
      toast.success('Producto Eliminado Correctamente')
      router.push('/admin/products')
     
    }
  
  return (
      <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md max-w-3xl mx-auto">
        
          <form
            className="space-y-5"
            action={handledeleteProduct}
           
      >
        
        <input
          type="hidden"
          value={params.id}
          name="product_id"
        />
            {children} 
     
            <input
              type="submit"
              className="bg-indigo-600 hover:bg-800 text-white w-full mt-5 p-3 uppercase font-bolt cursor-pointer"
              value='==> Eliminar el  Producto <=='          
            />   
        
          </form>
      </div>     
 
  )
 }
 
  






