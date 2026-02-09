"use client";

import { CharacterDTO } from "@/backend/dtos/CharacterDTO";
import { useRouter } from "next/navigation";

export type CharacterListProps = {
  characters: CharacterDTO[];
};

export function CharacterList({ characters }: CharacterListProps) {
  const router = useRouter();

  function handleSelectCharacter(characterId: string) {
    router.push(`game-canva/${characterId}`);
  }

  return (
    <div className="flex-4 flex items-center">
      {!characters ? (
        <p>Nenhum personagem criado</p>
      ) : (
        <div className="flex gap-4">
          {characters.map((char) => (
            <div
              key={char.id}
              className="text-slate-50 p-4 rounded border border-slate-600 bg-slate-800 w-60 flex flex-col justify-between cursor-pointer"
              onClick={() => handleSelectCharacter(char.id)}
            >
              <div>
                <div className="flex justify-between gap-2 items-end">
                  <div className="text-lg">{char.name}</div>
                  <div className="text-slate-400">lvl {char.level}</div>
                </div>
                <div className="flex justify-start gap-2 items-end">
                  <div className="text-slate-400">{char.race.name}</div>
                  <div className="text-slate-400">-</div>
                  <div className="text-slate-400">{char.classe.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
