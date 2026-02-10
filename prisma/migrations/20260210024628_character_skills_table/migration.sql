/*
  Warnings:

  - You are about to drop the column `proficient` on the `character_skills` table. All the data in the column will be lost.
  - You are about to drop the column `skills_id` on the `character_skills` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[character_id,skill_id]` on the table `character_skills` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `skill_id` to the `character_skills` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "character_skills" DROP CONSTRAINT "character_skills_skills_id_fkey";

-- AlterTable
ALTER TABLE "character_skills" DROP COLUMN "proficient",
DROP COLUMN "skills_id",
ADD COLUMN     "skill_id" UUID NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "character_skills_character_id_skill_id_key" ON "character_skills"("character_id", "skill_id");

-- AddForeignKey
ALTER TABLE "character_skills" ADD CONSTRAINT "character_skills_character_id_fkey" FOREIGN KEY ("character_id") REFERENCES "characters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "character_skills" ADD CONSTRAINT "character_skills_skill_id_fkey" FOREIGN KEY ("skill_id") REFERENCES "skills"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
