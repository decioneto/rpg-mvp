/*
  Warnings:

  - You are about to drop the `CharacterSkills` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Skills` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CharacterSkills" DROP CONSTRAINT "CharacterSkills_skillsId_fkey";

-- DropForeignKey
ALTER TABLE "Skills" DROP CONSTRAINT "Skills_attribute_id_fkey";

-- DropTable
DROP TABLE "CharacterSkills";

-- DropTable
DROP TABLE "Skills";

-- CreateTable
CREATE TABLE "skills" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "attribute_id" UUID NOT NULL,

    CONSTRAINT "skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "character_skills" (
    "id" UUID NOT NULL,
    "character_id" UUID NOT NULL,
    "skill_id" UUID NOT NULL,
    "proficient" BOOLEAN NOT NULL,
    "skillsId" UUID,

    CONSTRAINT "character_skills_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "skills" ADD CONSTRAINT "skills_attribute_id_fkey" FOREIGN KEY ("attribute_id") REFERENCES "attributes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "character_skills" ADD CONSTRAINT "character_skills_skillsId_fkey" FOREIGN KEY ("skillsId") REFERENCES "skills"("id") ON DELETE SET NULL ON UPDATE CASCADE;
