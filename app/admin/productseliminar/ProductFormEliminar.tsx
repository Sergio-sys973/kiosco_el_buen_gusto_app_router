"use server"
import { prisma } from "@/src/lib/prisma"
import ImageUploapEliminar from "./ImageUploapElimina"
import { Product } from "@prisma/client"
/*import id from "zod/v4/locales/id.js"*/

type ProductFormProps = {
    product?: Product
}
export default async function ProductForm({ product }: ProductFormProps) {
    return (
        <>
            <div className="space-y-2">
                <label
                    className="text-slate-800"
                    htmlFor="id"
                >Codigo del Producto(id):</label>
                <input
                    
                    name="id"
                    className="block w-full p-3 bg-slate-100"
                    placeholder="Identificacion del Producto"
                    defaultValue={product?.id}
                />
                <input
                    type="hidden"
                    value={product?.id}
                    name="product_id"
                />

            </div>

            <div className="space-y-2">
                <label
                    className="text-slate-800"
                    htmlFor="name"
                >Nombre Producto a Eliminar:  </label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    className="block w-full p-3 bg-slate-100"
                    placeholder="Nombre Producto"
                    defaultValue={product?.name}
                />
            </div>

            <div className="space-y-2">
                <label
                    className="text-slate-800"
                    htmlFor="price"
                >Precio:</label>
                <input
                    id="price"
                    name="price"
                    className="block w-full p-3 bg-slate-100"
                    placeholder="Precio Producto"
                    defaultValue={product?.price}
                />
            </div>
           </>
    )
                
  }

