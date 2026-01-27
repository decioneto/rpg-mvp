"use server";

import { fetchAllRaces as fetchAllRacesRepository } from "@/backend/repositories/RaceRepository";
import { RaceDTO } from "../dtos/RaceDTO";
import { RaceData } from "../entities/Race";

export type FetchAllRacesResponse = {
  races: RaceDTO[];
};

export async function fetchAllRaces(): Promise<FetchAllRacesResponse> {
  try {
    const races: RaceData[] = await fetchAllRacesRepository();
    const racesDto: RaceDTO[] = races.map((item) => ({
      id: item.id,
      name: item.name,
      description: item.description,
      racesModifier: item.races_modifier,
    }));

    return { races: racesDto };
  } catch (error) {
    console.log(error);
    return { races: [] };
  }
}
