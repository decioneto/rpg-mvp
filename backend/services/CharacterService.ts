import { saveCharacter as saveCharacterPrisma } from "../repositories/CharacterRepository";

export async function saveCharacter(
  name: string,
  classeId: string,
  raceId: string,
  level: number,
  maxHp: number,
  currentHp: number,
): Promise<void> {
  try {
    await saveCharacterPrisma(name, classeId, raceId, level, maxHp, currentHp);
  } catch (error) {
    console.log(error);
  }
}
