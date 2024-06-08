/*
  Warnings:

  - You are about to drop the `Accommodation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Accommodation` DROP FOREIGN KEY `Accommodation_trip_id_fkey`;

-- DropTable
DROP TABLE `Accommodation`;

-- CreateTable
CREATE TABLE `accommodations` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `address` VARCHAR(100) NOT NULL,
    `check_in` DATETIME NOT NULL,
    `check_out` DATETIME NOT NULL,
    `nigths` INTEGER NOT NULL,
    `price` DECIMAL(15, 2) NOT NULL,
    `comment` VARCHAR(255) NOT NULL,
    `trip_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `accommodations` ADD CONSTRAINT `accommodations_trip_id_fkey` FOREIGN KEY (`trip_id`) REFERENCES `trips`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
