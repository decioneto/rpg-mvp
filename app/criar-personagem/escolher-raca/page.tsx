import { Title } from "@/ui-components/Title";
import Link from "next/link";
import { fetchAllRaces } from "@/backend/services/RaceService";
import { TabRaces } from "./components/TabRaces";

export default async function EscolherRacaPage() {
  const { races } = await fetchAllRaces();

  return (
    <>
      <div className="flex-4 flex items-center">
        <div className="flex flex-col items-center justify-center gap-20">
          <Title text="Escolha a Raça" />
          <TabRaces races={races} />
        </div>
      </div>
      <div className="flex-1 flex gap-10 items-start">
        <Link
          href="nome"
          className="bg-slate-950 text-slate-50 hover:bg-primary/90 py-3.5 px-6 rounded"
        >
          Voltar
        </Link>
        <Link
          href="escolher-classe"
          className="bg-linear-to-t from-slate-800 to-slate-700 text-slate-50 hover:bg-primary/90 py-3.5 px-6 rounded"
        >
          Avançar
        </Link>
      </div>
    </>
  );
}
