import { Title } from "@/ui-components/Title";
import Link from "next/link";

const ATRIBUTOS = [
  {
    name: "Força",
    value: "15",
    modifier: "+1",
  },
  {
    name: "Destreza",
    value: "14",
    modifier: "+1",
  },
  {
    name: "Constituição",
    value: "13",
    modifier: "+1",
  },
  {
    name: "Inteligência",
    value: "12",
    modifier: "+1",
  },
  {
    name: "Sabedoria",
    value: "10",
    modifier: "+1",
  },
  {
    name: "Carisma",
    value: "8",
    modifier: "+1",
  },
];

export default function RevisarPage() {
  return (
    <>
      <div className="flex-4 flex items-center">
        <div className="flex flex-col items-center justify-center gap-10">
          <Title text="Revise seu personagem" />

          <div className="flex flex-col w-200 gap-8">
            <div className="flex-1">
              <div className="flex flex-col gap-2">
                <label htmlFor="nome" className="text-yellow-500/80">
                  Nome
                </label>
                <input
                  id="nome"
                  placeholder="Escolha um nome para seu personagem"
                  className="px-6 py-3.5 bg-slate-100 outline-none rounded text-slate-900"
                  defaultValue="Bruenor"
                  readOnly
                />
              </div>
            </div>
            <div className="flex flex-1 gap-8">
              <div className="flex flex-1 flex-col gap-2">
                <label htmlFor="nome" className="text-yellow-500/80">
                  Raça
                </label>
                <input
                  id="nome"
                  placeholder="Escolha um nome para seu personagem"
                  className="px-6 py-3.5 bg-slate-100 outline-none rounded text-slate-900"
                  defaultValue="Anão"
                  readOnly
                />
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <label htmlFor="nome" className="text-yellow-500/80">
                  Classe
                </label>
                <input
                  id="nome"
                  placeholder="Escolha um nome para seu personagem"
                  className="px-6 py-3.5 bg-slate-100 outline-none rounded text-slate-900"
                  defaultValue="Guerreiro"
                  readOnly
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-10">
            {ATRIBUTOS.map((item) => (
              <div
                className="bg-slate-500 w-32.5 h-32.5 rounded relative flex flex-col items-center justify-center"
                key={item.name}
              >
                <div className="text-xs font-bold text-slate-900 slate-900 py-1 px-2 bg-slate-100 rounded-[2px] absolute top-0 left-1/2 transform -translate-1/2">
                  {item.name}
                </div>
                <div className="text-slate-100 font-bold text-[52px]">
                  {item.value}
                </div>
                <div className="text-xs font-bold text-slate-900 slate-900 py-1 px-2 bg-slate-100 rounded-[2px] absolute bottom-0 left-1/2 transform translate-y-1/2 -translate-x-1/2">
                  {item.modifier}
                </div>
              </div>
            ))}
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
          href="/game-canva"
          className="bg-linear-to-t from-slate-800 to-slate-700 text-slate-50 hover:bg-primary/90 py-3.5 px-6 rounded"
        >
          Iniciar jogo
        </Link>
      </div>
    </>
  );
}
