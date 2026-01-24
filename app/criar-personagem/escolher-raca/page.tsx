import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Title } from "@/ui-components/Title";
import Link from "next/link";
import { Content } from "../../../components/ui/content";
import { fetchAllRaces } from "@/backend/services/RaceService";

export default async function EscolherRacaPage() {
  const { races } = await fetchAllRaces();

  return (
    <>
      <div className="flex-4 flex items-center">
        <div className="flex flex-col items-center justify-center gap-20">
          <Title text="Escolha a Raça" />

          <Tabs
            defaultValue={races[0].name.normalize()}
            className="flex items-center"
          >
            <TabsList className="bg-slate-950 gap-4">
              {races.map((item) => (
                <TabsTrigger
                  className="bg-slate-500 cursor-pointer uppercase px-10 h-13 font-bold text-slate-50 data-[state=active]:text-slate-950 data-[state=active]:bg-slate-50"
                  value={item.name.normalize()}
                  key={item.name}
                >
                  {item.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {races.map((item) => (
              <TabsContent value={item.name.normalize()} key={item.name}>
                <Content title={item.name}>
                  <p>{item.description}</p>
                </Content>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
      <div className="flex-1 flex gap-10 items-start">
        <Link
          href="/"
          className="bg-slate-950 text-slate-50 hover:bg-primary/90 py-3.5 px-6 rounded"
        >
          Cancelar
        </Link>
        <Link
          href="escolher-classe"
          className="bg-linear-to-t from-slate-800 to-slate-700 text-slate-50 hover:bg-primary/90 py-3.5 px-6 rounded"
        >
          Avançar
        </Link>
      </div>
    </>
  );
}
