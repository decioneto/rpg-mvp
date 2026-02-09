"use server";

import { prisma } from "@/lib/prisma";

export async function saveCharacter(
  name: string,
  userId: string,
  classeId: string,
  raceId: string,
  level: number,
  maxHp: number,
  currentHp: number,
): Promise<void> {
  await prisma.characters.create({
    data: {
      name,
      user_id: userId,
      class_id: classeId,
      race_id: raceId,
      level,
      max_hp: maxHp,
      current_hp: currentHp,
    },
  });
}

export async function getCharacters(userId: string) {
  return await prisma.characters.findMany({
    where: {
      user_id: userId,
    },
    include: {
      class: true,
      race: {
        include: {
          races_modifier: true,
        },
      },
    },
  });
}
