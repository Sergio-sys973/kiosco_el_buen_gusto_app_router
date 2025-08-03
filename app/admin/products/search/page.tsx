import ProductSearchFormEliminar from "@/components/products/ProductSearchFormElimina";
import ProductTable from "@/components/products/ProductsTable";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";

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

export default async function SearchPage({
    searchParams,
}: {
    searchParams: Promise<{ search: string }>
}) {
    const { search } = await searchParams;
    const products = await searchProducts(search);

    return (
        <>
            <Heading>Resultados de búsqueda {'=>'} {search}</Heading>

                <div className="flex flex-col lg:flex-row lg:justify-end gap-5">
                    <ProductSearchFormEliminar />
                </div>

                {products.length ? (
                    <ProductTable
                         products={products}
                    />

                    ): <p className="text-center text-lg">No Hay Resultados</p>}
            
            </>
        )
    }