"use server";

import { prisma } from "@/lib/prisma";
import { Attributes } from "@prisma/client";

export async function getAllAttributes(): Promise<Attributes[]> {
  return await prisma.attributes.findMany();
}
