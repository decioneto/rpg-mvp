import { Button } from "@/components/ui/button";
import Image from "next/image";

const ATRIBUTOS = [
  {
    name: "Força",
    value: "15",
    modifier: "+1",
  },
  {
    name: "Destreza",
    value: "14",
    modifier: "+1",
  },
  {
    name: "Constituição",
    value: "13",
    modifier: "+1",
  },
  {
    name: "Inteligência",
    value: "12",
    modifier: "+1",
  },
  {
    name: "Sabedoria",
    value: "10",
    modifier: "+1",
  },
  {
    name: "Carisma",
    value: "8",
    modifier: "+1",
  },
];

export default function GameCanvaPage() {
  return (
    <div className="p-8 flex w-full h-screen gap-4">
      <div className="flex flex-1 gap-4">
        <div className="w-full max-w-22.5 flex flex-col justify-between gap-4 mt-2 mb-4">
          {ATRIBUTOS.map((item) => (
            <div
              className="bg-slate-500 w-22.5 h-22.5 rounded relative flex flex-col items-center justify-center"
              key={item.name}
            >
              <div className="text-[10px] font-black text-slate-900 w-6 h-6 bg-slate-100 rounded-[2px] absolute top-0 left-1/2 transform -translate-1/2 flex items-center justify-center rotate-45">
                <div className="transform -rotate-45">
                  {item.name.slice(0, 3).toUpperCase()}
                </div>
              </div>
              <div className="text-slate-100 font-bold text-[52px]">
                {item.value}
              </div>
              <div className="text-xs font-bold text-slate-900 slate-900 px-2 bg-slate-100 rounded-[2px] absolute bottom-0 left-1/2 transform translate-y-1/2 -translate-x-1/2">
                {item.modifier}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-1 h-full gap-4">
          <div className="flex flex-col w-full gap-4">
            <div className="flex gap-4">
              <div className="flex flex-1 flex-col w-full min-w-90 relative">
                <label
                  htmlFor="nome"
                  className="text-slate-400 absolute top-1 left-2 text-xs"
                >
                  Nome
                </label>
                <input
                  id="nome"
                  placeholder="Escolha um nome para seu personagem"
                  className="px-2 pt-3 h-11 w-full bg-slate-100 outline-none rounded text-slate-900"
                  defaultValue="Bruenor"
                  readOnly
                />
              </div>
              <div className="flex flex-col w-full min-w-60 relative">
                <label
                  htmlFor="raca"
                  className="text-slate-400 absolute top-1 left-2 text-xs"
                >
                  Raça
                </label>
                <input
                  id="raca"
                  placeholder="Escolha um nome para seu personagem"
                  className="px-2 pt-3 h-11 w-full bg-slate-100 outline-none rounded text-slate-900"
                  defaultValue="Anão"
                  readOnly
                />
              </div>
              <div className="flex flex-col w-full min-w-60 relative">
                <label
                  htmlFor="classe"
                  className="text-slate-400 absolute top-1 left-2 text-xs"
                >
                  Classe
                </label>
                <input
                  id="classe"
                  placeholder="Escolha um nome para seu personagem"
                  className="px-2 pt-3 h-11 w-full bg-slate-100 outline-none rounded text-slate-900"
                  defaultValue="Guerreiro"
                  readOnly
                />
              </div>
              <div className="flex flex-col w-full min-w-10 max-w-15 relative">
                <label
                  htmlFor="level"
                  className="text-slate-400 absolute top-1 left-2 text-xs"
                >
                  Nível
                </label>
                <input
                  id="level"
                  placeholder="Escolha um nome para seu personagem"
                  className="px-2 pt-3 h-11 w-full bg-slate-100 outline-none rounded text-slate-900"
                  defaultValue="1"
                  readOnly
                />
              </div>
              <div className="flex flex-col w-full min-w-10 max-w-30 relative">
                <label
                  htmlFor="pv"
                  className="text-slate-400 absolute top-1 left-2 text-xs"
                >
                  PV
                </label>
                <input
                  id="pv"
                  placeholder="Escolha um nome para seu personagem"
                  className="px-2 pt-3 h-11 w-full bg-slate-100 outline-none rounded text-slate-900"
                  defaultValue="10"
                  readOnly
                />
              </div>
            </div>
            <div className="flex flex-col h-full gap-4">
              <div className="h-full border border-slate-800 flex-1 relative">
                <div className="bg-black rounded h-full w-full pr-14"></div>
                <div className="absolute top-2 right-2">
                  <div className="flex flex-col gap-2">
                    <button className="w-10 h-10 rounded bg-slate-500 flex items-center justify-center gap-4 cursor-pointer">
                      <Image
                        src={"/mdi_dice-d4.svg"}
                        width={32}
                        height={32}
                        alt="d4"
                      />
                    </button>
                    <button className="w-10 h-10 rounded bg-slate-500 flex items-center justify-center gap-4 cursor-pointer">
                      <Image
                        src={"/mdi_dice-d6.svg"}
                        width={32}
                        height={32}
                        alt="d4"
                      />
                    </button>
                    <button className="w-10 h-10 rounded bg-slate-500 flex items-center justify-center gap-4 cursor-pointer">
                      <Image
                        src={"/mdi_dice-d8.svg"}
                        width={32}
                        height={32}
                        alt="d4"
                      />
                    </button>
                    <button className="w-10 h-10 rounded bg-slate-500 flex items-center justify-center gap-4 cursor-pointer">
                      <Image
                        src={"/mdi_dice-d10.svg"}
                        width={32}
                        height={32}
                        alt="d4"
                      />
                    </button>
                    <button className="w-10 h-10 rounded bg-slate-500 flex items-center justify-center gap-4 cursor-pointer">
                      <Image
                        src={"/mdi_dice-d12.svg"}
                        width={32}
                        height={32}
                        alt="d4"
                      />
                    </button>
                    <button className="w-10 h-10 rounded bg-slate-500 flex items-center justify-center gap-4 cursor-pointer">
                      <Image
                        src={"/mdi_dice-d20.svg"}
                        width={32}
                        height={32}
                        alt="d4"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className="h-50 flex flex-col gap-3">
                <div className="flex-1 bg-slate-800 border border-slate-600 rounded"></div>
                <div className="flex gap-3">
                  <input
                    placeholder="Digite sua ação"
                    className="px-2 h-10 w-full bg-slate-100 outline-none rounded text-slate-900"
                  />
                  <Button size="lg">Enviar</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-65 flex flex-col gap-4">
        <div className="bg-slate-500 h-full min-h-95 flex flex-col gap-2">
          <div className="flex-1 h-full grid grid-cols-3 grid-rows-4 gap-3 p-4">
            <div className="aspect-square invisible" />
            <div className="col-start-2 aspect-square bg-slate-600 flex items-center justify-center">
              <Image
                src={"/equipments/game-icons_spartan-helmet.svg"}
                width={32}
                height={32}
                alt="helmet"
                className="opacity-10"
              />
            </div>
            <div className="aspect-square invisible" />
            <div className="bg-slate-600 aspect-square flex items-center justify-center">
              <Image
                src={"/equipments/game-icons_crossed-swords.svg"}
                width={32}
                height={32}
                alt="helmet"
                className="opacity-10"
              />
            </div>
            <div className="bg-slate-600 aspect-square flex items-center justify-center">
              <Image
                src={"/equipments/game-icons_spartan-helmet.svg"}
                width={32}
                height={32}
                alt="helmet"
                className="opacity-10"
              />
            </div>
            <div className="bg-slate-600 aspect-square flex items-center justify-center">
              <Image
                src={"/equipments/game-icons_spartan-helmet.svg"}
                width={32}
                height={32}
                alt="helmet"
                className="opacity-10"
              />
            </div>
            <div className="bg-slate-600 aspect-square flex items-center justify-center">
              <Image
                src={"/equipments/game-icons_spartan-helmet.svg"}
                width={32}
                height={32}
                alt="helmet"
                className="opacity-10"
              />
            </div>
            <div className="bg-slate-600 aspect-square flex items-center justify-center">
              <Image
                src={"/equipments/game-icons_spartan-helmet.svg"}
                width={32}
                height={32}
                alt="helmet"
                className="opacity-10"
              />
            </div>
            <div className="bg-slate-600 aspect-square flex items-center justify-center">
              <Image
                src={"/equipments/game-icons_spartan-helmet.svg"}
                width={32}
                height={32}
                alt="helmet"
                className="opacity-10"
              />
            </div>
            <div className="bg-slate-600 aspect-square flex items-center justify-center">
              <Image
                src={"/equipments/game-icons_spartan-helmet.svg"}
                width={32}
                height={32}
                alt="helmet"
                className="opacity-10"
              />
            </div>
            <div className="bg-slate-600 aspect-square flex items-center justify-center">
              <Image
                src={"/equipments/game-icons_spartan-helmet.svg"}
                width={32}
                height={32}
                alt="helmet"
                className="opacity-10"
              />
            </div>
            <div className="bg-slate-600 aspect-square flex items-center justify-center">
              <Image
                src={"/equipments/game-icons_spartan-helmet.svg"}
                width={32}
                height={32}
                alt="helmet"
                className="opacity-10"
              />
            </div>
          </div>
          <div className="flex gap-3 px-4 items-baseline">
            <div className="text-xs text-slate-300">Classe de Armadura:</div>
            <div>10</div>
          </div>
        </div>
        <div className="bg-slate-500 h-full"></div>
        <div className="bg-slate-500 h-full"></div>
      </div>
    </div>
  );
}
