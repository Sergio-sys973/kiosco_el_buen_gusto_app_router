
import { User } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProviders from "next-auth/providers/credentials";
import { prisma } from "@/src/lib/prisma";


export const dynamic = "force-dynamic"

const authOptions = {
    providers: [
        CredentialsProviders({
            name: "Credentials", 
            credentials: {
                username: { label: "Username", type: "text", placeholder: " " },
                password: { label: "Password", type: "password" },
            },
            
            async authorize(credentials) {
                const userFound = await prisma.usuarios.findMany({ 
               
                    where: {
                        username: credentials?.username
                        
                    }
                })

                if (!userFound) return null
             
                return {
                    id: credentials?.password.toString(),
                    username: credentials?.username,
                } as User;
            },
        }),
    ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }; 