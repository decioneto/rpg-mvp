import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Title } from "@/ui-components/Title";
import Link from "next/link";
import { Content } from "./components/content";

export default function EscolherRacaPage() {
  return (
    <>
      <div className="flex-4 flex items-center">
        <div className="flex flex-col items-center justify-center gap-20">
          <Title text="Escolha a Raça" />

          <Tabs defaultValue="anao" className="flex items-center">
            <TabsList className="bg-slate-950 gap-4">
              <TabsTrigger
                className="bg-slate-500 cursor-pointer uppercase px-10 h-13 font-bold text-slate-50 data-[state=active]:text-slate-950 data-[state=active]:bg-slate-50"
                value="anao"
              >
                Anão
              </TabsTrigger>
              <TabsTrigger
                className="bg-slate-500 cursor-pointer uppercase px-10 h-13 font-bold text-slate-50 data-[state=active]:text-slate-950 data-[state=active]:bg-slate-50"
                value="elfo"
              >
                Elfo
              </TabsTrigger>
              <TabsTrigger
                className="bg-slate-500 cursor-pointer uppercase px-10 h-13 font-bold text-slate-50 data-[state=active]:text-slate-950 data-[state=active]:bg-slate-50"
                value="humano"
              >
                Humano
              </TabsTrigger>
            </TabsList>
            <TabsContent value="anao">
              <Content title="Anão">
                <p>
                  Os anões são conhecidos por sua resistência, honra e tradição.
                  Vivem cerca de 350 anos e valorizam profundamente clãs,
                  juramentos e o trabalho bem-feito, especialmente na forja,
                  mineração e artesanato. Costumam ser diretos, desconfiados de
                  estranhos, mas extremamente leais àqueles que conquistam sua
                  confiança.
                </p>
                <p>
                  <br />
                  Em termos mecânicos, os anões recebem +2 em Constituição, o
                  que os torna naturalmente robustos e difíceis de derrubar.
                  Eles possuem Visão no Escuro, Resiliência Anã (vantagem contra
                  veneno e resistência a dano de veneno) e proficiência com
                  armas e ferramentas ligadas à sua cultura. Apesar do
                  deslocamento menor, não sofrem penalidade por usar armaduras
                  pesadas.
                </p>
              </Content>
            </TabsContent>
            <TabsContent value="elfo">
              <Content title="Elfo">
                <p>
                  Elfos são uma raça humanoide conhecida por sua graça,
                  longevidade e ligação com a magia e a natureza. Eles vivem
                  centenas de anos, o que lhes dá uma visão mais paciente e
                  contemplativa do mundo. Elfos valorizam arte, música, poesia e
                  conhecimento, e costumam parecer distantes ou enigmáticos para
                  raças de vida curta, como humanos.
                </p>
                <p>
                  <br />
                  Mecanicamente, os elfos possuem +2 em Destreza, o que os torna
                  excelentes arqueiros, ladinos e guerreiros ágeis. Todos os
                  elfos têm Visão no Escuro, Sentidos Aguçados (proficiência em
                  Percepção) e Ancestral Feérico, que concede vantagem contra
                  ser enfeitiçado e imunidade ao sono mágico.
                </p>
              </Content>
            </TabsContent>
            <TabsContent value="humano">
              <Content title="Humano">
                <p>
                  Os humanos em D&D 5ª edição são a raça mais versátil e
                  adaptável do jogo. Com uma expectativa de vida mais curta que
                  a de elfos e anões, eles tendem a viver intensamente,
                  expandindo reinos, explorando terras desconhecidas e buscando
                  poder, conhecimento ou glória. Sua diversidade cultural é
                  enorme, variando de impérios organizados a tribos nômades.
                </p>
                <p>
                  <br />
                  Mecanicamente, o humano padrão recebe +1 em todos os
                  atributos, o que o torna uma escolha equilibrada para qualquer
                  classe.
                </p>
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
