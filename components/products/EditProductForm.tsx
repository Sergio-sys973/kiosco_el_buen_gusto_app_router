 "use client"
import { ProductSchema } from '@/src/schema'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { useParams } from 'next/navigation'
import { updateProduct } from '@/actions/update-product-action'

export default function EditProductForm({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    const params = useParams()
    const id = +params.id!
    
  const handleSubmit = async (formData: FormData) => {
    const data = {
      name: formData.get('name'),
      price: formData.get('price'),
      categoryId: formData.get('categoryId'),
      image: formData.get('image')
    }
    
    /*console.log('Desde handleSubmit')*/
    /*  console.log(data) */
      
    const result = ProductSchema.safeParse(data)
      if(!result.success) {
          result.error.issues.forEach(issue => {
              toast.error(issue.message)
          })
          return
        }

      /* Ponemos antes de la accion un return para q no se ejecute la sgte accion */

      /* return*/
    /*console.log(result.data) */
    
      const response = await updateProduct(result.data, id)
      
      /* Aqui Tenemos la respuesta de la validacion del servidor */
      if (response?.errors) {
            response.errors.forEach((issue)=> {
              toast.error(issue.message)
        })
        return
      }

    toast.success('Producto Actualizado Correctamente')
    router.push('/admin/products')
  }

  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md max-w-3xl mx-auto">
      
      <form
        className="space-y-5"
        action={handleSubmit}

      >
        {children}

        <input
          type="submit"
          className="bg-indigo-600 hover:bg-800 text-white w-full mt-5 p-3 uppercase font-bolt cursor-pointer"
          value='Guardar Cambios'          
        />         
      </form>
    </div>     
 
  )
}
