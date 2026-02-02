"use server";

import { prisma } from "@/lib/prisma";

export async function saveCharacter(
  name: string,
  classeId: string,
  raceId: string,
  level: number,
  maxHp: number,
  currentHp: number,
): Promise<void> {
  await prisma.characters.create({
    data: {
      name,
      class_id: classeId,
      race_id: raceId,
      level,
      max_hp: maxHp,
      current_hp: currentHp,
    },
  });
}
