"use server";

import { prisma } from "@/lib/prisma";

export async function saveCharacter(
  name: string,
  classeId: string,
  raceId: string,
  level: number,
  maxHp: number,
  currentHp: number,
  baseAttributes: Array<{ attribute: string; value: number }>,
): Promise<void> {
  prisma.characters.create({
    data: {
      name,
      class_id: classeId,
      race_id: raceId,
      level,
      max_hp: maxHp,
      current_hp: currentHp,
      characterAttributes: {
        create: baseAttributes.map((item) => ({
          base_value: item.value,
          attribute: {
            connect: {
              name: item.attribute,
            },
          },
        })),
      },
    },
  });
}
