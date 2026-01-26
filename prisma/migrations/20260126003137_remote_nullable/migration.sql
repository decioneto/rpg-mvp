/*
  Warnings:

  - Made the column `base_attributes` on table `classes` required. This step will fail if there are existing NULL values in that column.
  - Made the column `pericias` on table `classes` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "classes" ALTER COLUMN "base_attributes" SET NOT NULL,
ALTER COLUMN "pericias" SET NOT NULL;
