-- DropForeignKey
ALTER TABLE "character_attributes" DROP CONSTRAINT "fk_character_attributes_character";

-- DropForeignKey
ALTER TABLE "character_items" DROP CONSTRAINT "character_items_character_id_fkey";

-- DropForeignKey
ALTER TABLE "character_skills" DROP CONSTRAINT "character_skills_skill_id_fkey";

-- AddForeignKey
ALTER TABLE "character_attributes" ADD CONSTRAINT "fk_character_attributes_character" FOREIGN KEY ("character_id") REFERENCES "characters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "character_items" ADD CONSTRAINT "character_items_character_id_fkey" FOREIGN KEY ("character_id") REFERENCES "characters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "character_skills" ADD CONSTRAINT "character_skills_skill_id_fkey" FOREIGN KEY ("skill_id") REFERENCES "skills"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
