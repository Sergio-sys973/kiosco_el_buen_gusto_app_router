-- CreateTable
CREATE TABLE "Usuarios" (
    "cedula" INTEGER NOT NULL,
    "password" TEXT NOT NULL,
    "username" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_cedula_key" ON "Usuarios"("cedula");

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_password_key" ON "Usuarios"("password");
