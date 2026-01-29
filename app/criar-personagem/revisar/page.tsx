"use client";

import { usePersonagemContext } from "@/context/PersonagemContext";
import { Title } from "@/ui-components/Title";
import Link from "next/link";
import { Attributes } from "./components/Attributes";

export default function RevisarPage() {
  const { name, race, classe, level, maxHp } = usePersonagemContext();

  return (
    <>
      <div className="flex-4 flex items-center">
        <div className="flex flex-col items-center justify-center gap-10">
          <Title text="Revise seu personagem" />

          <div className="flex flex-col w-200 gap-8">
            <div className="flex-1 flex gap-4">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="nome" className="text-yellow-500/80">
                  Nome
                </label>
                <input
                  id="nome"
                  placeholder="Escolha um nome para seu personagem"
                  className="px-6 py-3.5 bg-slate-100 outline-none rounded text-slate-900"
                  defaultValue={name}
                  readOnly
                />
              </div>
              <div className="flex flex-col gap-2 w-full min-w-10 max-w-20">
                <label htmlFor="level" className="text-yellow-500/80">
                  Level
                </label>
                <input
                  id="level"
                  placeholder="Escolha um nome para seu personagem"
                  className="px-6 py-3.5 bg-slate-100 outline-none rounded text-slate-900"
                  defaultValue={level}
                  readOnly
                />
              </div>
            </div>
            <div className="flex flex-1 gap-4">
              <div className="flex flex-1 flex-col gap-2 w-full">
                <label htmlFor="nome" className="text-yellow-500/80">
                  Raça
                </label>
                <input
                  id="nome"
                  placeholder="Escolha um nome para seu personagem"
                  className="px-6 py-3.5 bg-slate-100 outline-none rounded text-slate-900"
                  defaultValue={race?.name}
                  readOnly
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 w-full">
                <label htmlFor="nome" className="text-yellow-500/80">
                  Classe
                </label>
                <input
                  id="nome"
                  placeholder="Escolha um nome para seu personagem"
                  className="px-6 py-3.5 bg-slate-100 outline-none rounded text-slate-900"
                  defaultValue={classe?.name}
                  readOnly
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 w-full min-w-10 max-w-20">
                <label htmlFor="pv" className="text-yellow-500/80">
                  PV
                </label>
                <input
                  id="pv"
                  className="px-6 py-3.5 bg-slate-100 outline-none rounded text-slate-900"
                  defaultValue={maxHp}
                  readOnly
                />
              </div>
            </div>
          </div>
          <Attributes race={race} classe={classe} />
        </div>
      </div>
      <div className="flex-1 flex gap-10 items-start">
        <Link
          href="nome"
          className="bg-slate-950 text-slate-50 hover:bg-primary/90 py-3.5 px-6 rounded"
        >
          Editar
        </Link>
        <Link
          href="/game-canva"
          className="bg-linear-to-t from-slate-800 to-slate-700 text-slate-50 hover:bg-primary/90 py-3.5 px-6 rounded"
        >
          Iniciar jogo
        </Link>
      </div>
    </>
  );
}
