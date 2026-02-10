"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { usePersonagemContext } from "@/context/PersonagemContext";
import { Input } from "@/ui-components/Input";
import { Title } from "@/ui-components/Title";
import Link from "next/link";
import { useState } from "react";

export default function EscolherNomePage() {
  const { name, setName } = usePersonagemContext();
  const [error, setError] = useState("");

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
            <RadioGroup defaultValue="feminino" className="flex ">
              <div className="flex items-center gap-3">
                <RadioGroupItem value="masculino" id="mas" />
                <Label htmlFor="mas">Masculino</Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem value="feminino" id="fem" />
                <Label htmlFor="fem">Feminino</Label>
              </div>
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
