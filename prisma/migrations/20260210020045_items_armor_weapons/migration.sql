/*
  Warnings:

  - You are about to drop the `skills` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "ItemType" AS ENUM ('WEAPON', 'ARMOR', 'CONSUMABLE', 'MISC');

-- AlterTable
ALTER TABLE "characters" ADD COLUMN     "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "skills";

-- CreateTable
CREATE TABLE "items" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR NOT NULL,
    "type" "ItemType" NOT NULL,
    "weight" DOUBLE PRECISION,
    "description" TEXT,
    "image_url" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "armors" (
    "item_id" UUID NOT NULL,
    "base_armor_class" INTEGER NOT NULL,
    "max_dex_bonus" INTEGER,

    CONSTRAINT "armors_pkey" PRIMARY KEY ("item_id")
);

-- CreateTable
CREATE TABLE "weapons" (
    "item_id" UUID NOT NULL,
    "damage_dice" TEXT NOT NULL,
    "damage_type" TEXT NOT NULL,
    "range" INTEGER,
    "properties" TEXT,

    CONSTRAINT "weapons_pkey" PRIMARY KEY ("item_id")
);

-- CreateTable
CREATE TABLE "character_items" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "character_id" UUID NOT NULL,
    "item_id" UUID NOT NULL,
    "quantity" INTEGER NOT NULL,
    "equipped" BOOLEAN NOT NULL,
    "slot" TEXT NOT NULL,

    CONSTRAINT "character_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skills" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "attribute_id" UUID NOT NULL,

    CONSTRAINT "Skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CharacterSkills" (
    "id" UUID NOT NULL,
    "character_id" UUID NOT NULL,
    "skill_id" UUID NOT NULL,
    "proficient" BOOLEAN NOT NULL,
    "skillsId" UUID,

    CONSTRAINT "CharacterSkills_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "items_name_key" ON "items"("name");

-- AddForeignKey
ALTER TABLE "armors" ADD CONSTRAINT "armors_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "items"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "weapons" ADD CONSTRAINT "weapons_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "items"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "character_items" ADD CONSTRAINT "character_items_character_id_fkey" FOREIGN KEY ("character_id") REFERENCES "characters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "character_items" ADD CONSTRAINT "character_items_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Skills" ADD CONSTRAINT "Skills_attribute_id_fkey" FOREIGN KEY ("attribute_id") REFERENCES "attributes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterSkills" ADD CONSTRAINT "CharacterSkills_skillsId_fkey" FOREIGN KEY ("skillsId") REFERENCES "Skills"("id") ON DELETE SET NULL ON UPDATE CASCADE;
