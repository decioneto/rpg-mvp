"use client";

import { usePersonagemContext } from "@/context/PersonagemContext";
import { Title } from "@/ui-components/Title";
import Link from "next/link";
import { Attributes } from "./components/Attributes";
import { Input } from "@/ui-components/Input";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { saveCharacter } from "@/backend/services/CharacterService";

export default function RevisarPage() {
  const { name, race, classe, level, maxHp, currentHp } =
    usePersonagemContext();
  const router = useRouter();

  useEffect(() => {
    if (!name || !race || !classe) {
      router.push("nome");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleInitGame() {
    if (
      !classe ||
      !race ||
      level == null ||
      maxHp == null ||
      currentHp == null
    ) {
      // aqui você pode mostrar um toast ou bloquear o botão
      console.error("Dados do personagem incompletos");
      return;
    }

    try {
      await saveCharacter(name, classe.id, race.id, level, maxHp, currentHp);

      router.push("/game-canva");
    } catch (error) {
      console.error("Erro ao criar personagem", error);
      // toast / modal / feedback visual aqui
    }
  }

  return (
    <>
      <div className="flex-4 flex items-center">
        <div className="flex flex-col items-center justify-center gap-10">
          <Title text="Revise seu personagem" />
          <div className="flex flex-col w-200 gap-8">
            <div className="flex-1 flex gap-4">
              <div className="flex gap-4 w-full">
                <Input
                  id="nome"
                  hasLabel
                  label="Nome"
                  defaultValue={name}
                  readOnly
                  fullsize
                  className="flex-1"
                />
                <Input
                  id="level"
                  hasLabel
                  label="Level"
                  defaultValue={level}
                  readOnly
                  className="min-w-20 max-w-20"
                />
              </div>
            </div>
            <div className="flex gap-4 w-full">
              <Input
                id="raca"
                hasLabel
                label="Raça"
                defaultValue={race?.name}
                readOnly
                fullsize
              />
              <Input
                id="classe"
                hasLabel
                label="Classe"
                defaultValue={classe?.name}
                readOnly
                fullsize
              />
              <Input
                id="pv"
                hasLabel
                label="PV"
                defaultValue={maxHp}
                readOnly
                className="min-w-20 max-w-20"
              />
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
        <Button onClick={handleInitGame}>Iniciar jogo</Button>
      </div>
    </>
  );
}
