import { AtaquesMagias } from "../AtaquesMagias";
import { Equipamento } from "../Equipamento";
import { Items } from "../Items";

export function Inventario() {
  return (
    <>
      <Equipamento />
      <Items />
      <AtaquesMagias />
    </>
  );
}
