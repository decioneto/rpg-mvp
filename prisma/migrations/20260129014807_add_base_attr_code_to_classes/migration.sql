/*
  Warnings:

  - Added the required column `modifier` to the `character_attributes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "character_attributes" ADD COLUMN     "modifier" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "classes" ADD COLUMN     "base_attributes_code" TEXT[];
