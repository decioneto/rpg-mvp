"use server";

import { prisma } from "@/lib/prisma";
import { GramaticalGender } from "@prisma/client";

export async function saveCharacter(
  name: string,
  userId: string,
  classeId: string,
  raceId: string,
  level: number,
  maxHp: number,
  currentHp: number,
  gramaticalGender: GramaticalGender,
): Promise<string> {
  const character = await prisma.characters.create({
    data: {
      name,
      user_id: userId,
      class_id: classeId,
      race_id: raceId,
      level,
      max_hp: maxHp,
      current_hp: currentHp,
      gramaticalGender,
    },
  });

  return character.id;
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

export async function getCharacterById(characterId: string) {
  return await prisma.characters.findUnique({
    where: {
      id: characterId,
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
