-- CreateTable
CREATE TABLE `usuarios` (
    `id` VARCHAR(191) NOT NULL,
    `nomeDeUsuario` VARCHAR(191) NOT NULL,
    `nomeCompleto` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `role` ENUM('user', 'admin') NOT NULL DEFAULT 'user',
    `criadoEm` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `atualizadoEm` DATETIME(3) NULL,

    UNIQUE INDEX `usuarios_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `clientes` (
    `id` VARCHAR(191) NOT NULL,
    `nomeCompleto` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `genero` VARCHAR(191) NOT NULL,
    `enderecoId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `clientes_email_key`(`email`),
    UNIQUE INDEX `clientes_telefone_key`(`telefone`),
    UNIQUE INDEX `clientes_enderecoId_key`(`enderecoId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `enderecos` (
    `id` VARCHAR(191) NOT NULL,
    `cep` VARCHAR(191) NOT NULL,
    `rua` VARCHAR(191) NOT NULL,
    `bairro` VARCHAR(191) NOT NULL,
    `cidade` VARCHAR(191) NOT NULL,
    `estado` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `clientes` ADD CONSTRAINT `clientes_enderecoId_fkey` FOREIGN KEY (`enderecoId`) REFERENCES `enderecos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
