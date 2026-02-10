/*
  Warnings:

  - You are about to drop the column `skillsId` on the `character_skills` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "character_skills" DROP CONSTRAINT "character_skills_skillsId_fkey";

-- AlterTable
ALTER TABLE "character_skills" DROP COLUMN "skillsId",
ADD COLUMN     "skills_id" UUID;

-- AddForeignKey
ALTER TABLE "character_skills" ADD CONSTRAINT "character_skills_skills_id_fkey" FOREIGN KEY ("skills_id") REFERENCES "skills"("id") ON DELETE SET NULL ON UPDATE CASCADE;
