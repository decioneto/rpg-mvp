/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { ClasseDTO } from "@/backend/dtos/ClasseDTO";
import { Checkbox } from "@/components/ui/checkbox";
import { Content } from "@/components/ui/content";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePersonagemContext } from "@/context/PersonagemContext";
import { useEffect } from "react";
import { skillDescription } from "../utils/skills-descriptions";
import { InfoIcon } from "lucide-react";

type TabClassesProps = {
  classes: ClasseDTO[];
};

export function TabClasses({ classes }: TabClassesProps) {
  const { classe, setClasse, setMaxHp, setCurrentHp } = usePersonagemContext();

  useEffect(() => {
    if (classes && !classe) {
      setClasse(classes[0]);
      setMaxHp(classes[0].hitDie);
      setCurrentHp(classes[0].hitDie);
    }
  }, []);

  return (
    <>
      <Tabs
        defaultValue={classe ? classe.name : classes[0].name}
        className="flex items-center"
      >
        <TabsList className="bg-slate-950 gap-4">
          {classes.map((item) => (
            <TabsTrigger
              className="bg-slate-500 cursor-pointer uppercase px-10 h-13 font-bold text-slate-50 data-[state=active]:text-slate-950 data-[state=active]:bg-slate-50"
              value={item.name}
              key={item.name}
              onClick={() => {
                setClasse(item);
                setMaxHp(item.hitDie);
                setCurrentHp(item.hitDie);
              }}
            >
              {item.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {classes.map((item) => (
          <TabsContent value={item.name} key={item.name}>
            <Content title={item.name}>
              <div>
                <div className="flex gap-8 mb-4 pb-4 border-b border-slate-600 text-sm uppercase text-slate-600 font-bold">
                  <div className="w-full text-center">Descrição</div>
                  <div className="w-full max-w-20 text-center">Atributo</div>
                  <div className="w-full max-w-10 text-center">PV</div>
                  <div className="w-full max-w-50 text-center">
                    Escolha até 2 Perícias
                  </div>
                </div>
                <div className="flex gap-8 text-center">
                  <div className="w-full">{item.description}</div>
                  <div className="w-full max-w-20">{item.baseAttributes}</div>
                  <div className="w-full max-w-10">{item.hitDie}</div>
                  <div className="w-full max-w-50 flex flex-col gap-2">
                    {item.pericias.split(",").map((skill) => (
                      <div className="flex gap-2 items-center" key={skill}>
                        <Checkbox id={skill} name={skill} />
                        <Label htmlFor={skill}>{skill.trim()}</Label>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div>
                              <InfoIcon size={18} />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent side="right">
                            <p className="max-w-40">
                              {skillDescription.find(
                                (sd) => sd.name === skill.trim(),
                              )?.description ?? ""}
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Content>
          </TabsContent>
        ))}
      </Tabs>
    </>
  );
}
