"use client";

import { ClasseDTO } from "@/backend/dtos/ClasseDTO";
import { RaceDTO } from "@/backend/dtos/RaceDTO";
import { GramaticalGenderEnum } from "@/enums/GramaticarGenderEnum";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

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
  baseAttributes: Array<{ attribute: string; value: number }> | undefined;
  setBaseAttributes: React.Dispatch<
    React.SetStateAction<
      Array<{ attribute: string; value: number }> | undefined
    >
  >;
  gramaticarGender: GramaticalGenderEnum;
  setGramaticarGender: React.Dispatch<
    React.SetStateAction<GramaticalGenderEnum>
  >;
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
  const [gramaticarGender, setGramaticarGender] =
    useState<GramaticalGenderEnum>("MASCULINO");
  const [baseAttributes, setBaseAttributes] = useState<
    Array<{ attribute: string; value: number }> | undefined
  >(undefined);

  useEffect(() => {}, []);

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
      baseAttributes,
      setBaseAttributes,
      gramaticarGender,
      setGramaticarGender,
    }),
    [
      name,
      race,
      classe,
      level,
      maxHp,
      currentHp,
      baseAttributes,
      gramaticarGender,
    ],
  );

  return (
    <PersonagemContext.Provider value={values}>
      {children}
    </PersonagemContext.Provider>
  );
}
