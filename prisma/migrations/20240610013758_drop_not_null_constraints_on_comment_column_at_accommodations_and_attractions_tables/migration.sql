/*
  Warnings:

  - You are about to alter the column `check_in` on the `accommodations` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `check_out` on the `accommodations` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `accommodations` MODIFY `check_in` DATETIME NOT NULL,
    MODIFY `check_out` DATETIME NOT NULL,
    MODIFY `comment` VARCHAR(255) NULL;

-- AlterTable
ALTER TABLE `attractions` MODIFY `comment` VARCHAR(191) NULL;
