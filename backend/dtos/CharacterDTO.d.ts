import { ClasseDTO } from "./ClasseDTO";
import { RaceDTO } from "./RaceDTO";

export type CharacterDTO = {
  id: string;
  name: string;
  userId: string;
  race: RaceDTO;
  classe: ClasseDTO;
  level: number;
  maxHp: number;
  currentHp: number;
};
