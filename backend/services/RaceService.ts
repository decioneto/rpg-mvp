"use server";

import { fetchAllRaces as fetchAllRacesRepository } from "@/backend/repositories/RaceRepository";
import { RaceDTO } from "../dtos/RaceDTO";

export type FetchAllRacesResponse = {
  races: RaceDTO[];
};

export async function fetchAllRaces(): Promise<FetchAllRacesResponse> {
  try {
    const races = await fetchAllRacesRepository();
    const racesDto = races.map((item) => ({
      name: item.name,
      description: item.description,
    }));

    return { races: racesDto };
  } catch (error) {
    console.log(error);
    return { races: [] };
  }
}
