"use server";

import { ClasseDTO } from "../dtos/ClasseDTO";
import { fetchAllClasses as fetchAllClassesRepository } from "../repositories/ClasseRepository";

export type FetchAllRacesResponse = {
  classes: ClasseDTO[];
};

export async function fetchAllClasses(): Promise<FetchAllRacesResponse> {
  try {
    const classes = await fetchAllClassesRepository();
    const classesDto: ClasseDTO[] = classes.map((item) => ({
      name: item.name,
      hitDie: item.hit_die,
      description: item.description,
      baseAttributes: item.base_attributes,
      pericias: item.pericias,
    }));

    return { classes: classesDto };
  } catch (error) {
    console.log(error);
    return { classes: [] };
  }
}
