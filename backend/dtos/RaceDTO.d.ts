import { RacesModifierDTO } from "./RacesModifier";

export type RaceDTO = {
  id: string;
  name: string;
  description: string;
  racesModifier: RacesModifierDTO[];
};
