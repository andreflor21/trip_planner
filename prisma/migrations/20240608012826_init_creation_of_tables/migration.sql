-- CreateTable
CREATE TABLE `trips` (
    `id` VARCHAR(255) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `start_date` DATETIME(3) NOT NULL,
    `end_date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `age` INTEGER NULL,
    `birthdate` DATETIME(3) NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `attractions` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `period` VARCHAR(1) NOT NULL,
    `price` DECIMAL(65, 30) NOT NULL,
    `comment` VARCHAR(191) NOT NULL,
    `trip_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tags` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `attraction_tags` (
    `id` VARCHAR(191) NOT NULL,
    `attractionId` VARCHAR(191) NULL,
    `tagId` VARCHAR(191) NULL,

    INDEX `attraction_tags_attractionId_tagId_idx`(`attractionId`, `tagId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Accommodation` (
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

-- CreateTable
CREATE TABLE `_TripToUser` (
    `A` VARCHAR(255) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_TripToUser_AB_unique`(`A`, `B`),
    INDEX `_TripToUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `attractions` ADD CONSTRAINT `attractions_trip_id_fkey` FOREIGN KEY (`trip_id`) REFERENCES `trips`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `attraction_tags` ADD CONSTRAINT `attraction_tags_attractionId_fkey` FOREIGN KEY (`attractionId`) REFERENCES `attractions`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `attraction_tags` ADD CONSTRAINT `attraction_tags_tagId_fkey` FOREIGN KEY (`tagId`) REFERENCES `tags`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Accommodation` ADD CONSTRAINT `Accommodation_trip_id_fkey` FOREIGN KEY (`trip_id`) REFERENCES `trips`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_TripToUser` ADD CONSTRAINT `_TripToUser_A_fkey` FOREIGN KEY (`A`) REFERENCES `trips`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_TripToUser` ADD CONSTRAINT `_TripToUser_B_fkey` FOREIGN KEY (`B`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
