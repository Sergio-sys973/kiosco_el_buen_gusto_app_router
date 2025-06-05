
/*import { redirect } from "next/navigation";

export default function Home() {
  redirect('/order/cafe')
  
} */

/*import { useState, useEffect } from 'react' */
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import FormLoginAdmin from "@/components/ui/FormLoginAdmin";

const adminNavigation = [
  { url: "/order/cafes", text: "Ingrese como Cliente", blank: true },
];

export default function Home() {

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <Link href="/">
          <Logo />
        </Link>

        <div className="flex flex-col mx-auto p-10 w-full md:w-1/3">
          {adminNavigation.map((link) => (
            <Link
              href={link.url}
              key={link.url}
              className="font-bold bg-amber-400 p-3 rounded-lg text-center uppercase hover:bg-amber-500"
            >
              {link.text}
            </Link>
          ))}

          <div className="mt-20">
            <p className="text-2xl text-center font-semibold">
              Ingrese como Administrador
            </p>
            <FormLoginAdmin />
          </div>
        </div>
      </div>
    </>
  );
} 
