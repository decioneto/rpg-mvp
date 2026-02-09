"use client";

import { distributeAttributes } from "@/app/criar-personagem/revisar/utils/distributeAttributes";
import { ClasseDTO } from "@/backend/dtos/ClasseDTO";
import { RaceDTO } from "@/backend/dtos/RaceDTO";
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

export function Attributes({ classe, race }: AttributesProps) {
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
    <div className="w-full grid grid-cols-3 gap-4">
      {attributes.map((item) => (
        <div
          className="bg-slate-500 aspect-square rounded relative flex items-center justify-center mb-4"
          key={item.name}
        >
          <div className="text-[10px] font-black text-slate-900 w-6 h-6 bg-slate-100 rounded-[2px] absolute top-0 left-1/2 transform -translate-1/2 flex items-center justify-center rotate-45">
            <div className="transform -rotate-45">
              {item.name.slice(0, 3).toUpperCase()}
            </div>
          </div>
          <div className="text-slate-100 font-bold text-2xl flex items-center justify-center">
            {item.value}
          </div>
          <div className="text-xs font-bold text-slate-900 slate-900 px-2 bg-slate-100 rounded-[2px] absolute bottom-0 left-1/2 transform translate-y-1/2 -translate-x-1/2">
            {item.modifier >= 0 ? `+${item.modifier}` : -item.modifier}
          </div>
        </div>
      ))}
    </div>
  );
}
