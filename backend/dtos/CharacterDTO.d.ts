import { type Attribute } from "@/context/PersonagemContext";
import { type ClasseDTO } from "./ClasseDTO";
import { type RaceDTO } from "./RaceDTO";

export type CharacterDTO = {
  id: string;
  name: string;
  userId: string;
  race: RaceDTO;
  classe: ClasseDTO;
  level: number;
  maxHp: number;
  currentHp: number;
  proeficiencias: {
    skillId: string;
  }[];
  characterAttributes: Attribute[];
};
