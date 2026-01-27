import { RacesModifier } from "./RacesModifier";

export type RaceData = {
  id: string;
  name: string;
  description: string;
  races_modifier: RacesModifier[];
};
