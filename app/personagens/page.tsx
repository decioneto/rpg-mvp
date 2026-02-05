import Link from "next/link";
import { Header } from "./components/Header";

export default function PersonagemPage() {
  return (
    <div className="flex flex-col p-4">
      <Header />
      <div className="flex flex-col h-screen items-center justify-center">
        <div className="flex-4 flex items-center">
          <p>Nenhum personagem criado</p>
        </div>

        <div className="flex-1">
          <Link
            href="criar-personagem/nome"
            className="bg-linear-to-t from-slate-800 to-slate-700 text-slate-50 hover:bg-primary/90 py-3.5 px-6 rounded"
          >
            Crie seu personagem
          </Link>
        </div>
      </div>
    </div>
  );
}
