"use client";

import { ClasseDTO } from "@/backend/dtos/ClasseDTO";
import { usePersonagemContext } from "@/context/PersonagemContext";
import Link from "next/link";

type FooterButtonsProps = {
  classes: ClasseDTO[];
};

export function FooterButtons({ classes }: FooterButtonsProps) {
  const { proeficiencias } = usePersonagemContext();

  return (
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
        onNavigate={(e) => {
          if (proeficiencias.length === 0) {
            window.alert(
              "Campo obrigatório. Selecione pelo menos uma proeficiência.",
            );
            e.preventDefault();
          }
        }}
      >
        Avançar
      </Link>
    </div>
  );
}
