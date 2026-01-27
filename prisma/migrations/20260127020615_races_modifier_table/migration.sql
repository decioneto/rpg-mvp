-- CreateTable
CREATE TABLE "races_modifier" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "race_id" UUID NOT NULL,
    "attribute" TEXT NOT NULL,
    "value" INTEGER NOT NULL,

    CONSTRAINT "races_modifier_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "races_modifier" ADD CONSTRAINT "races_modifier_race_id_fkey" FOREIGN KEY ("race_id") REFERENCES "races"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
