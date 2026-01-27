"use client";

import { ClasseDTO } from "@/backend/dtos/ClasseDTO";
import { RaceDTO } from "@/backend/dtos/RaceDTO";
import { createContext, useContext, useMemo, useState } from "react";

type PersonagemContextProps = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  race: RaceDTO | undefined;
  setRace: React.Dispatch<React.SetStateAction<RaceDTO | undefined>>;
  classe: ClasseDTO | undefined;
  setClasse: React.Dispatch<React.SetStateAction<ClasseDTO | undefined>>;
  level?: number;
  setLevel: React.Dispatch<React.SetStateAction<number>>;
  maxHp?: number;
  setMaxHp: React.Dispatch<React.SetStateAction<number | undefined>>;
  currentHp?: number;
  setCurrentHp: React.Dispatch<React.SetStateAction<number | undefined>>;
};

export const PersonagemContext = createContext({} as PersonagemContextProps);

export function usePersonagemContext() {
  const context = useContext(PersonagemContext);
  if (!context) {
    throw new Error(
      "usePersonagemContext deve ser usado dentro de PersonagemContextProvider",
    );
  }

  return context;
}

export function PersonagemContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [name, setName] = useState("");
  const [race, setRace] = useState<RaceDTO | undefined>(undefined);
  const [classe, setClasse] = useState<ClasseDTO | undefined>(undefined);
  const [level, setLevel] = useState<number>(1);
  const [maxHp, setMaxHp] = useState<number | undefined>(undefined);
  const [currentHp, setCurrentHp] = useState<number | undefined>(undefined);

  const values = useMemo<PersonagemContextProps>(
    () => ({
      name,
      setName,
      race,
      setRace,
      classe,
      setClasse,
      level,
      setLevel,
      maxHp,
      setMaxHp,
      currentHp,
      setCurrentHp,
    }),
    [name, race, classe, level, maxHp, currentHp],
  );

  return (
    <PersonagemContext.Provider value={values}>
      {children}
    </PersonagemContext.Provider>
  );
}
