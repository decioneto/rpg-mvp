export function AtaquesMagias() {
  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col gap-2 p-4 g">
      <p className="m-0 text-xs text-slate-500 font-bold uppercase">
        Ataques e magias
      </p>
      <div className="flex flex-col w-full text-xs text-slate-400 mt-2">
        <div className="flex justify-between w-full mb-2 border-b border-slate-700">
          <div className="w-2/4">Arma</div>
          <div className="w-1/4">Ataque</div>
          <div className="w-1/4">Dano</div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-slate-50 flex w-full">
            <div className="w-2/4">Machado de batalha</div>
            <div className="w-1/4">+5</div>
            <div className="w-1/4">1d8 + 3</div>
          </div>
          <div className="text-slate-50 flex w-full">
            <div className="w-2/4">Besta leve</div>
            <div className="w-1/4">+2</div>
            <div className="w-1/4">1d8</div>
          </div>
        </div>
      </div>
    </div>
  );
}
