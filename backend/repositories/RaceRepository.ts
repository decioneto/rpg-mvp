"use server";

import prisma from "@/lib/prisma";
import { RaceData } from "../entities/Race";

export async function fetchAllRaces(): Promise<RaceData[]> {
  return prisma.races.findMany();
}
