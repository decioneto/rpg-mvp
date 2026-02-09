"use server";

import { prisma } from "@/lib/prisma";

export async function fetchAllRaces() {
  return await prisma.races.findMany({
    include: {
      races_modifier: true,
    },
  });
}
