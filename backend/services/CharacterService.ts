import { CharacterDTO } from "../dtos/CharacterDTO";
import {
  saveCharacter as saveCharacterRepositoty,
  getCharacters as getCharactersRepositoty,
} from "../repositories/CharacterRepository";

export type FetchAllRacesResponse = {
  data: CharacterDTO[];
};

export async function saveCharacter(
  name: string,
  userId: string,
  classeId: string,
  raceId: string,
  level: number,
  maxHp: number,
  currentHp: number,
): Promise<void> {
  try {
    await saveCharacterRepositoty(
      name,
      userId,
      classeId,
      raceId,
      level,
      maxHp,
      currentHp,
    );
  } catch (error) {
    console.log(error);
  }
}

export async function getCharacters(
  userId: string | undefined,
): Promise<FetchAllRacesResponse> {
  try {
    console.log(userId);
    if (!userId) throw new Error("Usuário não encontrado");

    const characters = await getCharactersRepositoty(userId);
    const charactersDTO: CharacterDTO[] = characters.map((char) => ({
      id: char.id,
      name: char.name,
      userId: char.user_id,
      race: {
        id: char.race.id,
        name: char.race.name,
        description: char.race.description,
        racesModifier: char.race.races_modifier,
      },
      classe: {
        id: char.class.id,
        name: char.class.name,
        hitDie: char.class.hit_die,
        description: char.class.description,
        baseAttributes: char.class.base_attributes,
        baseAttributesCode: char.class.base_attributes_code,
        pericias: char.class.pericias,
      },
      level: char.level,
      maxHp: char.max_hp,
      currentHp: char.current_hp,
    }));

    return { data: charactersDTO };
  } catch (error) {
    console.log(error);
    return { data: [] };
  }
}
