import { HealthBar } from "../HealthBar";

export function Personagem() {
  return (
    <div className="w-full bg-slate-900 p-4 mb-4">
      <div className="flex flex-col mb-2">
        <div className="flex gap-2">
          <div className="text-sm">Bruenor</div>
          <div className="text-sm text-slate-500">lvl 1</div>
        </div>
        <div className="flex item-center gap-1">
          <span className="text-xs text-slate-500">Anão</span>
          <span className="text-xs text-slate-500">-</span>
          <span className="text-xs text-slate-500">Guerreiro</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <HealthBar current={13} max={13} />
        <span className="text-sm text-slate-500">13</span>
      </div>
    </div>
  );
}
