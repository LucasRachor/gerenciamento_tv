/*
  Warnings:

  - A unique constraint covering the columns `[clienteId,tvId]` on the table `clientes_tvs` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `clientes_tvs_clienteId_tvId_key` ON `clientes_tvs`(`clienteId`, `tvId`);
