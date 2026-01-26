"use server";

import { prisma } from "@/lib/prisma";
import { ClasseData } from "../entities/Classe";

export async function fetchAllClasses(): Promise<ClasseData[]> {
  return prisma.classes.findMany();
}
