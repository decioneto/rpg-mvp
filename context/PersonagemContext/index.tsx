"use client";

import { createContext, useContext, useMemo, useState } from "react";

type PersonagemContextProps = {
  name: string;
  race: string;
  classe: string;
  level?: number;
  maxHp?: number;
  currentHp?: number;
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
  const [race, setRace] = useState("");
  const [classe, setClasse] = useState("");
  const [level, setLevel] = useState<number | undefined>(undefined);
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
