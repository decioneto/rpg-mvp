import { GramaticalGenderEnum } from "@/enums/GramaticarGenderEnum";
import { GramaticalGender } from "@prisma/client";

export function gramaticalGenderMapper(
  gender: GramaticalGenderEnum,
): GramaticalGender {
  return GramaticalGender[gender];
}
