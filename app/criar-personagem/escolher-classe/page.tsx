import { Content } from "@/components/ui/content";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Title } from "@/ui-components/Title";
import Link from "next/link";

export default function EscolherClassePage() {
  return (
    <>
      <div className="flex-4 flex items-center">
        <div className="flex flex-col items-center justify-center gap-20">
          <Title text="Escolha a Classe" />

          <Tabs defaultValue="feiticeiro" className="flex items-center">
            <TabsList className="bg-slate-950 gap-4">
              <TabsTrigger
                className="bg-slate-500 cursor-pointer uppercase px-10 h-13 font-bold text-slate-50 data-[state=active]:text-slate-950 data-[state=active]:bg-slate-50"
                value="feiticeiro"
              >
                Feiticeiro
              </TabsTrigger>
              <TabsTrigger
                className="bg-slate-500 cursor-pointer uppercase px-10 h-13 font-bold text-slate-50 data-[state=active]:text-slate-950 data-[state=active]:bg-slate-50"
                value="guerreiro"
              >
                Guerreiro
              </TabsTrigger>
              <TabsTrigger
                className="bg-slate-500 cursor-pointer uppercase px-10 h-13 font-bold text-slate-50 data-[state=active]:text-slate-950 data-[state=active]:bg-slate-50"
                value="ladino"
              >
                Ladino
              </TabsTrigger>
            </TabsList>
            <TabsContent value="feiticeiro">
              <Content title="Feiticeiro">
                <div>
                  <div className="flex gap-8 mb-4 pb-4 border-b border-slate-600 text-sm uppercase text-slate-600 font-bold">
                    <div className="w-full text-center">Descrição</div>
                    <div className="w-full max-w-20 text-center">Atributo</div>
                    <div className="w-full max-w-10 text-center">PV</div>
                    <div className="w-full text-center">Perícias</div>
                  </div>
                  <div className="flex gap-8 text-center">
                    <div className="w-full">
                      O feiticeiro conjura magia por talento inato, geralmente.
                      Diferente do mago, ele não estuda magia, a magia
                      simplesmente flui através dele. É uma classe poderosa,
                      porém frágil fisicamente.
                    </div>
                    <div className="w-full max-w-20">
                      Carisma e Constituição
                    </div>
                    <div className="w-full max-w-10">6</div>
                    <div className="w-full">
                      Arcanismo, Enganação, Intimidação, Intuição, Persuasão e
                      Religião
                    </div>
                  </div>
                </div>
              </Content>
            </TabsContent>
            <TabsContent value="guerreiro">
              <Content title="Guerreiro">
                <div>
                  <div className="flex gap-8 mb-4 pb-4 border-b border-slate-600 text-sm uppercase text-slate-600 font-bold">
                    <div className="w-full text-center">Descrição</div>
                    <div className="w-full max-w-20 text-center">Atributo</div>
                    <div className="w-full max-w-10 text-center">PV</div>
                    <div className="w-full text-center">Perícias</div>
                  </div>
                  <div className="flex gap-8 text-center">
                    <div className="w-full">
                      O guerreiro é o especialista em combate físico. Versátil,
                      pode usar qualquer arma ou armadura e se adaptar a vários
                      estilos: tanque, duelista, arqueiro ou líder tático. É
                      simples de aprender e muito eficiente.
                    </div>
                    <div className="w-full max-w-20">Força e Constituição</div>
                    <div className="w-full max-w-10">10</div>
                    <div className="w-full">
                      Acrobacia, Adestrar, Animais, Atletismo, História,
                      Intuição, Intimidação, Percepção, Sobrevivência
                    </div>
                  </div>
                </div>
              </Content>
            </TabsContent>
            <TabsContent value="ladino">
              <Content title="Ladino">
                <div>
                  <div className="flex gap-8 mb-4 pb-4 border-b border-slate-600 text-sm uppercase text-slate-600 font-bold">
                    <div className="w-full text-center">Descrição</div>
                    <div className="w-full max-w-20 text-center">Atributo</div>
                    <div className="w-full max-w-10 text-center">PV</div>
                    <div className="w-full text-center">Perícias</div>
                  </div>
                  <div className="flex gap-8 text-center">
                    <div className="w-full">
                      O ladino é um especialista em furtividade, agilidade e
                      precisão. Usa o ambiente a seu favor e causa grande dano
                      com Ataque Furtivo quando pega o inimigo desprevenido ou
                      distraído.
                    </div>
                    <div className="w-full max-w-20">
                      Destreza e Inteligência
                    </div>
                    <div className="w-full max-w-10">8</div>
                    <div className="w-full">
                      Acrobacia, Atletismo, Atuação, Enganação, Furtividade,
                      Intimidação, Intuição, Investigação, Percepção, Persuasão,
                      Prestidigitação
                    </div>
                  </div>
                </div>
              </Content>
            </TabsContent>
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
          href="escolher-raca"
          className="bg-linear-to-t from-slate-800 to-slate-700 text-slate-50 hover:bg-primary/90 py-3.5 px-6 rounded"
        >
          Avançar
        </Link>
      </div>
    </>
  );
}
