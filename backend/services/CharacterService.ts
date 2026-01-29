import { saveCharacter as saveCharacterPrisma } from "../repositories/CharacterRepository";

export async function saveCharacter(
  name: string,
  classeId: string,
  raceId: string,
  level: number,
  maxHp: number,
  currentHp: number,
  baseAttributes: Array<{ attribute: string; value: number }>,
): Promise<void> {
  try {
    await saveCharacterPrisma(
      name,
      classeId,
      raceId,
      level,
      maxHp,
      currentHp,
      baseAttributes,
    );
  } catch (error) {
    console.log(error);
  }
}
