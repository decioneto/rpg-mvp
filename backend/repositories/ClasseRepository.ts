"use server";

import { prisma } from "@/lib/prisma";
import { Classes } from "@prisma/client";

export async function fetchAllClasses(): Promise<Classes[]> {
  return await prisma.classes.findMany();
}
