import AddProductForm from "@/components/products/AddProductForm";
import ProductForm from "@/components/products/ProductForm";
import Heading from "@/components/ui/Heading";


export default function CreateProductPage() {
    return (
        <>
            <div className="bg-indigo-600 p-2  uppercase text-center font-black  text-4xl ">
                Nuevo Producto esto NO lo estoy utilizando es de AddProductForm  y ProductForm
            </div >
        
            <AddProductForm> 

                <ProductForm />
                
            </AddProductForm>
        </>
    )
}

/*  <Heading>Nuevo Producto</Heading>  */
