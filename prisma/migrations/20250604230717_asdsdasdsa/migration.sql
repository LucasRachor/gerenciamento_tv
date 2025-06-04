/*
  Warnings:

  - You are about to drop the column `enderecoId` on the `clientes` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[clienteId]` on the table `enderecos` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `clientes` DROP FOREIGN KEY `clientes_enderecoId_fkey`;

-- DropIndex
DROP INDEX `clientes_enderecoId_key` ON `clientes`;

-- AlterTable
ALTER TABLE `clientes` DROP COLUMN `enderecoId`;

-- AlterTable
ALTER TABLE `enderecos` ADD COLUMN `clienteId` VARCHAR(191) NOT NULL DEFAULT '';

-- CreateIndex
CREATE UNIQUE INDEX `enderecos_clienteId_key` ON `enderecos`(`clienteId`);

-- AddForeignKey
ALTER TABLE `enderecos` ADD CONSTRAINT `enderecos_clienteId_fkey` FOREIGN KEY (`clienteId`) REFERENCES `clientes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
