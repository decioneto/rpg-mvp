import Link from "next/link";
import { Header } from "./components/Header";
import { getCharacters } from "@/backend/services/CharacterService";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { CharacterList } from "./components/CharacterList";

export default async function PersonagemPage() {
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase.auth.getUser();
  const { data: charactersData } = await getCharacters(data.user?.id);

  return (
    <div className="flex flex-col p-4">
      <Header />
      <div className="flex flex-col h-screen items-center justify-center">
        <CharacterList characters={charactersData} />

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
