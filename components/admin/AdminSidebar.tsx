import Logo from "../ui/Logo"

import AdminRoute from "./AdminRoute"

const adminNavigation = [
    { url: '/admin/orders', text: 'Ordenes', blank: false },
    { url: '/orders', text: 'Ordenes Listas', blank: false },
    { url: '/admin/products', text: 'Productos', blank: false },
    { url: '/order/cafe', text: 'Ver Quiosco', blank: true },
    { url: '/admin/resumen', text: 'Total sin Pasar a la Cocina', blank: true },
    { url: '/busqueda', text: 'Ordenes Despachadas ', blank: false },
    { url: '/totalday', text: 'Total Ventas en el Dia ', blank: false },    
    { url: '/admin/productseliminar', text: 'Eliminar Prod Base de Datos', blank: true },  
 
]

export default function AdminSidebar() {

    return (
        <>
            <Logo />
            <div className="space-y-3 ">
                <p className="mt-10 bg-indigo-600 uppercase text-white text-sm text-center">Navegación</p>
                <nav className="flex flex-col">
                    {adminNavigation.map(link => (
                        <AdminRoute
                            key={link.url}
                            link={link}                           
                        
                        />
                    ))}
                </nav>
            </div>
        </>
    )
}