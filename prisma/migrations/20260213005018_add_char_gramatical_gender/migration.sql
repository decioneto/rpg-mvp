/*
  Warnings:

  - Added the required column `gramaticalGender` to the `characters` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "GramaticalGender" AS ENUM ('MASCULINO', 'FEMININO');

-- AlterTable
ALTER TABLE "characters" ADD COLUMN     "gramaticalGender" "GramaticalGender" NOT NULL;
