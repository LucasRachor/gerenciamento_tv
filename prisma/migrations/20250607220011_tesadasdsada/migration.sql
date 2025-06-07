/*
  Warnings:

  - A unique constraint covering the columns `[nome]` on the table `tvs` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `tvs_nome_key` ON `tvs`(`nome`);
