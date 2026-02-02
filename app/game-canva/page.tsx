import { Button } from "@/components/ui/button";
import { Atributes } from "./components/Atributos";
import { Dices } from "./components/Dices";
import { Inventario } from "./components/Inventario";
import { Pericias } from "./components/Periciais";
import { Personagem } from "./components/Personagem";

export default function GameCanvaPage() {
  return (
    <div className="p-4 flex w-full h-screen gap-4">
      <div className="flex flex-1 gap-4">
        <div className="w-full max-w-65 flex flex-col gap-4">
          <Personagem />
          <Atributes />
          <Pericias />
        </div>
        <div className="flex flex-1 h-full gap-4">
          <div className="flex flex-col w-full gap-4">
            <div className="flex flex-col h-full gap-4">
              <div className="h-full border border-slate-800 flex-1 relative">
                <div className="bg-black h-full rounded pr-14"></div>
                <Dices />
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
        <Inventario />
      </div>
    </div>
  );
}
