import { GramaticalGenderEnum } from "@/enums/GramaticarGenderEnum";
import { CharacterDTO } from "../dtos/CharacterDTO";
import {
  saveCharacter as saveCharacterRepositoty,
  getCharacters as getCharactersRepositoty,
  getCharacterById as getCharacterByIdRepository,
} from "../repositories/CharacterRepository";
import { gramaticalGenderMapper } from "../mappers/GramaticalGenderMapper";

export type FetchAllCharactersResponse = {
  data: CharacterDTO[];
};

export type FetchCharacterResponse = {
  data: CharacterDTO | null;
};

export async function saveCharacter(
  name: string,
  userId: string,
  classeId: string,
  raceId: string,
  level: number,
  maxHp: number,
  currentHp: number,
  gramaticalGender: GramaticalGenderEnum,
  proeficiencias: string[],
): Promise<string> {
  try {
    const characterId = await saveCharacterRepositoty(
      name,
      userId,
      classeId,
      raceId,
      level,
      maxHp,
      currentHp,
      gramaticalGenderMapper(gramaticalGender),
      proeficiencias,
    );

    return characterId;
  } catch (error) {
    console.log(error);
    return "";
  }
}

export async function getCharacters(
  userId: string | undefined,
): Promise<FetchAllCharactersResponse> {
  try {
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

export async function getCharacterById(
  characterId: string,
): Promise<FetchCharacterResponse> {
  try {
    const char = await getCharacterByIdRepository(characterId);
    if (!char) throw new Error("Personagem não encontrado");

    return {
      data: {
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
      },
    };
  } catch (error) {
    console.log(error);
    return { data: null };
  }
}
