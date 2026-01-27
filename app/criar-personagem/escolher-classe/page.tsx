import { fetchAllClasses } from "@/backend/services/ClasseService";

import { Title } from "@/ui-components/Title";
import Link from "next/link";
import { TabClasses } from "./components/TabClasses";

export default async function EscolherClassePage() {
  const { classes } = await fetchAllClasses();
  return (
    <>
      <div className="flex-4 flex items-center">
        <div className="flex flex-col items-center justify-center gap-20">
          <Title text="Escolha a Classe" />
          <TabClasses classes={classes} />
        </div>
      </div>
      <div className="flex-1 flex gap-10 items-start">
        <Link
          href="escolher-raca"
          className="bg-slate-950 text-slate-50 hover:bg-primary/90 py-3.5 px-6 rounded"
        >
          Voltar
        </Link>
        <Link
          href="revisar"
          className="bg-linear-to-t from-slate-800 to-slate-700 text-slate-50 hover:bg-primary/90 py-3.5 px-6 rounded"
        >
          Avançar
        </Link>
      </div>
    </>
  );
}
