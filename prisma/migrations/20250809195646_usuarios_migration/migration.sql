-- CreateTable
CREATE TABLE "public"."Usuarios" (
    "cedula" INTEGER NOT NULL,
    "password" TEXT NOT NULL,
    "username" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_cedula_key" ON "public"."Usuarios"("cedula");

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_password_key" ON "public"."Usuarios"("password");
