/*
  Warnings:

  - You are about to drop the column `status` on the `clientes` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `clientes` DROP COLUMN `status`,
    ADD COLUMN `statusPagamento` BOOLEAN NOT NULL DEFAULT false;
