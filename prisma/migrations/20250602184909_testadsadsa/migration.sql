/*
  Warnings:

  - A unique constraint covering the columns `[nomeDeUsuario]` on the table `usuarios` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `usuarios_nomeDeUsuario_key` ON `usuarios`(`nomeDeUsuario`);
