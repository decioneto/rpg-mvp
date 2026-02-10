-- AlterTable
ALTER TABLE "character_skills" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();

-- AlterTable
ALTER TABLE "skills" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();
