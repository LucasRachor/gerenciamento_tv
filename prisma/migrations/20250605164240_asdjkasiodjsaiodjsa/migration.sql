/*
  Warnings:

  - You are about to drop the column `pagamento` on the `clientes` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `usuarios` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `clientes` DROP COLUMN `pagamento`;

-- AlterTable
ALTER TABLE `usuarios` DROP COLUMN `status`,
    ADD COLUMN `pagamento` BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE `pagamentos` (
    `id` VARCHAR(191) NOT NULL,
    `dataPagamento` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `validoAte` DATETIME(3) NOT NULL,
    `valor` DOUBLE NOT NULL,
    `clienteId` VARCHAR(191) NOT NULL,
    `tvId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `pagamentos` ADD CONSTRAINT `pagamentos_clienteId_fkey` FOREIGN KEY (`clienteId`) REFERENCES `clientes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pagamentos` ADD CONSTRAINT `pagamentos_tvId_fkey` FOREIGN KEY (`tvId`) REFERENCES `tvs`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
