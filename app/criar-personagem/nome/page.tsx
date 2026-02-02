"use client";

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
        <div className="flex flex-col items-center justify-center gap-40 w-125">
          <Title text="Qual o nome do personagem" />

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
