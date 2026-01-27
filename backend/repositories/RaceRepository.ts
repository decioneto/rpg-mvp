"use server";

import { prisma } from "@/lib/prisma";
import { RaceData } from "../entities/Race";

export async function fetchAllRaces(): Promise<RaceData[]> {
  return await prisma.races.findMany({
    include: {
      races_modifier: true,
    },
  });
}
