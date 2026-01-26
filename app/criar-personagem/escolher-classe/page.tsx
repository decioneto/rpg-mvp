import { fetchAllClasses } from "@/backend/services/ClasseService";
import { Content } from "@/components/ui/content";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Title } from "@/ui-components/Title";
import Link from "next/link";

export default async function EscolherClassePage() {
  const { classes } = await fetchAllClasses();
  return (
    <>
      <div className="flex-4 flex items-center">
        <div className="flex flex-col items-center justify-center gap-20">
          <Title text="Escolha a Classe" />

          <Tabs defaultValue={classes[0].name} className="flex items-center">
            <TabsList className="bg-slate-950 gap-4">
              {classes.map((item) => (
                <TabsTrigger
                  className="bg-slate-500 cursor-pointer uppercase px-10 h-13 font-bold text-slate-50 data-[state=active]:text-slate-950 data-[state=active]:bg-slate-50"
                  value={item.name}
                  key={item.name}
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
                      <div className="w-full max-w-20 text-center">
                        Atributo
                      </div>
                      <div className="w-full max-w-10 text-center">PV</div>
                      <div className="w-full text-center">Perícias</div>
                    </div>
                    <div className="flex gap-8 text-center">
                      <div className="w-full">{item.description}</div>
                      <div className="w-full max-w-20">
                        {item.baseAttributes}
                      </div>
                      <div className="w-full max-w-10">{item.hitDie}</div>
                      <div className="w-full">{item.pericias}</div>
                    </div>
                  </div>
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
          href="revisar"
          className="bg-linear-to-t from-slate-800 to-slate-700 text-slate-50 hover:bg-primary/90 py-3.5 px-6 rounded"
        >
          Avançar
        </Link>
      </div>
    </>
  );
}
