-- DropForeignKey
ALTER TABLE "character_skills" DROP CONSTRAINT "character_skills_character_id_fkey";

-- DropForeignKey
ALTER TABLE "character_skills" DROP CONSTRAINT "character_skills_skill_id_fkey";

-- AddForeignKey
ALTER TABLE "character_skills" ADD CONSTRAINT "character_skills_character_id_fkey" FOREIGN KEY ("character_id") REFERENCES "characters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "character_skills" ADD CONSTRAINT "character_skills_skill_id_fkey" FOREIGN KEY ("skill_id") REFERENCES "skills"("id") ON DELETE CASCADE ON UPDATE CASCADE;
