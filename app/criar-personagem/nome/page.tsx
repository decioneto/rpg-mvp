"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { usePersonagemContext } from "@/context/PersonagemContext";
import { GramaticalGenderEnum } from "@/enums/GramaticarGenderEnum";
import { Input } from "@/ui-components/Input";
import { Title } from "@/ui-components/Title";
import Link from "next/link";
import { useState } from "react";

export default function EscolherNomePage() {
  const { name, setName, setGramaticarGender } = usePersonagemContext();
  const [error, setError] = useState("");

  type GramaticalGenderRadioProps = {
    name: string;
    value: GramaticalGenderEnum;
    id: string;
  };

  const GRAMATICAL_GENDER: GramaticalGenderRadioProps[] = [
    {
      name: "Masculino",
      value: "MASCULINO",
      id: "mas",
    },
    {
      name: "Feminino",
      value: "FEMININO",
      id: "fem",
    },
  ];

  return (
    <>
      <div className="flex-4 flex items-center">
        <div className="flex flex-col items-center justify-center gap-40">
          <Title text="Qual o nome do personagem" />

          <div className="w-125 flex flex-col gap-8 items-center">
            <Input
              id="name"
              label="Nome"
              placeholder="Escolha um nome para seu personagem"
              onChange={(e) => {
                setError("");
                setName(e.target.value);
              }}
              error={{ hasError: !!error, message: error }}
              defaultValue={name}
              fullsize
            />
            <RadioGroup
              defaultValue="MASCULINO"
              className="flex "
              onValueChange={(value: GramaticalGenderEnum) =>
                setGramaticarGender(value)
              }
            >
              {GRAMATICAL_GENDER.map((gg) => (
                <div key={gg.id} className="flex items-center gap-3">
                  <RadioGroupItem value={gg.value} id={gg.id} />
                  <Label htmlFor={gg.id}>{gg.name}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>
      </div>
      <div className="flex-1 flex gap-10 items-start">
        <Link
          href="/"
          className="bg-slate-950 text-slate-50 hover:bg-primary/90 py-3.5 px-6 rounded"
        >
          Cancelar
        </Link>
        <Link
          href="escolher-raca"
          className="bg-linear-to-t from-slate-800 to-slate-700 text-slate-50 hover:bg-primary/90 py-3.5 px-6 rounded"
          onNavigate={(e) => {
            if (!name) {
              setError(
                "Campo obrigatório. Escolha um nome para seu personagem.",
              );
              e.preventDefault();
            }
          }}
        >
          Avançar
        </Link>
      </div>
    </>
  );
}
