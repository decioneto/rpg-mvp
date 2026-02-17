"use client";

import { Attribute } from "@/context/PersonagemContext";

type AttributesProps = {
  attributes: Attribute[];
};

export function Attributes({ attributes }: AttributesProps) {
  return (
    <div className="w-full grid grid-cols-3 gap-4">
      {attributes.map((item) => (
        <div
          className="bg-slate-500 aspect-square rounded relative flex items-center justify-center mb-4"
          key={item.name}
        >
          <div className="text-[10px] font-black text-slate-900 w-6 h-6 bg-slate-100 rounded-[2px] absolute top-0 left-1/2 transform -translate-1/2 flex items-center justify-center rotate-45">
            <div className="transform -rotate-45">{item.code}</div>
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
