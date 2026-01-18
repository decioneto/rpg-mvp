import { Atributes } from "./components/Atributos";
import { FormularioJogador } from "./components/FormularioJogador";
import { Dices } from "./components/Dices";
import { Inventario } from "./components/Inventario";

export default function GameCanvaPage() {
  return (
    <div className="p-8 flex w-full h-screen gap-4">
      <div className="flex flex-1 gap-4">
        <Atributes />
        <div className="flex flex-1 h-full gap-4">
          <div className="flex flex-col w-full gap-4">
            <FormularioJogador />
            <Dices />
          </div>
        </div>
      </div>
      <div className="w-full max-w-65 flex flex-col gap-4">
        <Inventario />
      </div>
    </div>
  );
}
