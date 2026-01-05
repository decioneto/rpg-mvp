import { Title } from "@/ui-components/Title";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div className="flex-4 flex items-center">
        <div className="flex flex-col items-center justify-center gap-40">
          <Title text="Qual o nome do personagem" />

          <input
            placeholder="Escolha um nome para seu personagem"
            className="px-6 py-3.5 bg-slate-100 outline-none rounded text-slate-900 w-142.5"
          />
        </div>
      </div>
      <div className="flex-1 flex gap-10 items-start">
        <Link
          href="criar-personagem/nome"
          className="bg-slate-950 text-slate-50 hover:bg-primary/90 py-3.5 px-6 rounded"
        >
          Cancelar
        </Link>
        <Link
          href="criar-personagem/nome"
          className="bg-linear-to-t from-slate-800 to-slate-700 text-slate-50 hover:bg-primary/90 py-3.5 px-6 rounded"
        >
          Avançar
        </Link>
      </div>
    </div>
  );
}
