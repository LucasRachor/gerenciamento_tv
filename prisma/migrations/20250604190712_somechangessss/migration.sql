/*
  Warnings:

  - Added the required column `usuarioId` to the `clientes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `clientes` ADD COLUMN `pagamento` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `usuarioId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `usuarios` ADD COLUMN `codigoSenha` VARCHAR(191) NOT NULL DEFAULT '',
    ADD COLUMN `status` VARCHAR(191) NOT NULL DEFAULT 'pendente';

-- CreateTable
CREATE TABLE `tvs` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `clientes_tvs` (
    `id` VARCHAR(191) NOT NULL,
    `clienteId` VARCHAR(191) NOT NULL,
    `tvId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `clientes` ADD CONSTRAINT `clientes_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `clientes_tvs` ADD CONSTRAINT `clientes_tvs_clienteId_fkey` FOREIGN KEY (`clienteId`) REFERENCES `clientes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `clientes_tvs` ADD CONSTRAINT `clientes_tvs_tvId_fkey` FOREIGN KEY (`tvId`) REFERENCES `tvs`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
