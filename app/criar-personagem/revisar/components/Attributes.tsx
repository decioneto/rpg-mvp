"use client";

import { ClasseDTO } from "@/backend/dtos/ClasseDTO";
import { RaceDTO } from "@/backend/dtos/RaceDTO";
import { distributeAttributes } from "../utils/distributeAttributes";
import { useEffect, useState } from "react";

type AttributesProps = {
  race: RaceDTO | undefined;
  classe: ClasseDTO | undefined;
};

export type AttributeCode = "FOR" | "DES" | "CON" | "INT" | "SAB" | "CAR";

export type Attribute = {
  name: string;
  code: AttributeCode;
  value: number;
  modifier: number;
};

export type AttributeValue = {
  attribute: AttributeCode;
  value: number;
};

const BASE_VALUES = [15, 14, 13, 12, 10, 8];

const ATRIBUTOS: Omit<Attribute, "value">[] = [
  { name: "Força", code: "FOR", modifier: 0 },
  { name: "Destreza", code: "DES", modifier: 0 },
  { name: "Constituição", code: "CON", modifier: 0 },
  { name: "Inteligência", code: "INT", modifier: 0 },
  { name: "Sabedoria", code: "SAB", modifier: 0 },
  { name: "Carisma", code: "CAR", modifier: 0 },
];

export function Attributes({ race, classe }: AttributesProps) {
  const [attributes, setAttributes] = useState<Attribute[]>([]);

  useEffect(() => {
    if (!classe) return;

    const allAttributes = ATRIBUTOS.map((a) => a.code);
    const priorityAttributes = classe.baseAttributesCode as AttributeCode[];

    const distributed = distributeAttributes(
      allAttributes,
      priorityAttributes,
      BASE_VALUES,
    );

    const finalAttributes: Attribute[] = ATRIBUTOS.map((attr) => {
      const baseValue =
        distributed.find((d) => d.attribute === attr.code)?.value ?? 0;

      const raceModifier =
        race?.racesModifier?.find((m) => m.attribute === attr.code)?.value ?? 0;

      return {
        ...attr,
        value: baseValue + raceModifier,
        modifier: raceModifier,
      };
    });

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setAttributes(finalAttributes);
  }, [classe, race]);

  return (
    <div className="grid grid-cols-3 gap-10">
      {attributes.map((item) => (
        <div
          key={item.code}
          className="bg-slate-500 w-32.5 h-32.5 rounded relative flex flex-col items-center justify-center"
        >
          <div className="text-xs font-bold text-slate-900 py-1 px-2 bg-slate-100 rounded absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2">
            {item.name}
          </div>

          <div className="text-slate-100 font-bold text-[52px]">
            {item.value}
          </div>

          <div className="text-xs font-bold text-slate-900 py-1 px-2 bg-slate-100 rounded absolute bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2">
            {item.modifier >= 0 ? `+${item.modifier}` : item.modifier}
          </div>
        </div>
      ))}
    </div>
  );
}
