
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

const FormLoginAdmin = () => {
    const router = useRouter();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

         
    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();

             /* Rutina provisional  */

        if (username === "") {   
            if (password === "") {
                router.push('/admin/orders') 
                
                {
                    router.push('/admin/orders')  
                }
             }

        } else {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Todos los Campos o Claves son Obligatorios",
                showConfirmButton: false,
                timer: 2000,
            });
        }
     };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mt-4">
                    <label htmlFor="username" className="block font-medium text-gray-700">
                        Usuario
                    </label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-3"
                    />
                </div>
                <div className="mt-4">
                    <label htmlFor="password" className="block font-medium text-gray-700">
                        Contraseña
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-3"

                    />

                </div>
                <div className="mt-6">
                    <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center px-4 py-3 border border-transparent rounded-md shadow-sm text-base 
                  font-bold text-white bg-indigo-600 hover:bg-indigo-800 uppercase"
                    >
                        Iniciar sesión
                    </button>
                </div>
            </form>
            
        </>
        
    );
    
};

export default FormLoginAdmin;
