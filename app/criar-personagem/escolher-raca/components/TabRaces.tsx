/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { RaceDTO } from "@/backend/dtos/RaceDTO";
import { Content } from "@/components/ui/content";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePersonagemContext } from "@/context/PersonagemContext";
import { useEffect } from "react";

type TabRacesProps = {
  races: RaceDTO[];
};

export function TabRaces({ races }: TabRacesProps) {
  const { setRace } = usePersonagemContext();

  useEffect(() => {
    if (races) {
      setRace(races[0].id);
    }
  }, []);

  return (
    <Tabs defaultValue={races[0].id} className="flex items-center">
      <TabsList className="bg-slate-950 gap-4">
        {races.map((item) => (
          <TabsTrigger
            className="bg-slate-500 cursor-pointer uppercase px-10 h-13 font-bold text-slate-50 data-[state=active]:text-slate-950 data-[state=active]:bg-slate-50"
            value={item.id}
            key={item.id}
            onClick={() => setRace(item.id)}
          >
            {item.name}
          </TabsTrigger>
        ))}
      </TabsList>
      {races.map((item) => (
        <TabsContent value={item.id} key={item.id}>
          <Content title={item.name}>
            <p>{item.description}</p>
          </Content>
        </TabsContent>
      ))}
    </Tabs>
  );
}
