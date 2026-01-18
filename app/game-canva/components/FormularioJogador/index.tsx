export function FormularioJogador() {
  return (
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
  );
}
