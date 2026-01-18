const PERICIAS = [
  {
    nome: "Acrobacia",
    isActive: false,
    value: "0",
    modifier: "Des",
  },
  {
    nome: "Adestrar animais",
    isActive: false,
    value: "0",
    modifier: "Sab",
  },
  {
    nome: "Arcanismo",
    isActive: false,
    value: "0",
    modifier: "Int",
  },
  {
    nome: "Atletismo",
    isActive: true,
    value: "+5",
    modifier: "For",
  },
  {
    nome: "Enganação",
    isActive: false,
    value: "0",
    modifier: "Car",
  },
  {
    nome: "Furtividade",
    isActive: false,
    value: "0",
    modifier: "Des",
  },
  {
    nome: "História",
    isActive: false,
    value: "0",
    modifier: "Int",
  },
  {
    nome: "Intimidação",
    isActive: true,
    value: "+1",
    modifier: "Car",
  },
  {
    nome: "Intuição",
    isActive: false,
    value: "0",
    modifier: "Sab",
  },
  {
    nome: "Investigação",
    isActive: false,
    value: "0",
    modifier: "Int",
  },
  {
    nome: "Medicina",
    isActive: false,
    value: "0",
    modifier: "Sab",
  },
  {
    nome: "Natureza",
    isActive: false,
    value: "0",
    modifier: "Int",
  },
  {
    nome: "Percepção",
    isActive: true,
    value: "+3",
    modifier: "Sab",
  },
  {
    nome: "Performance",
    isActive: false,
    value: "0",
    modifier: "Car",
  },
  {
    nome: "Persuasão",
    isActive: false,
    value: "0",
    modifier: "Car",
  },
  {
    nome: "Prestidigitação",
    isActive: false,
    value: "0",
    modifier: "Des",
  },
  {
    nome: "Religião",
    isActive: false,
    value: "0",
    modifier: "Int",
  },
  {
    nome: "Sobrevivência",
    isActive: true,
    value: "+3",
    modifier: "Sab",
  },
];

export function Pericias() {
  return (
    <div className="h-full bg-slate-900 border border-slate-800 flex flex-col gap-2 p-4 rounded">
      <p className="m-0 text-xs text-slate-500 font-bold uppercase">Perícias</p>
      <div className="flex flex-col gap-2">
        {PERICIAS.map((item) => (
          <div className="flex item-center gap-3" key={item.nome}>
            <div
              data-active={item.isActive}
              className="w-2 h-2 data-[active=true]:bg-slate-100 bg-slate-900 border border-slate-600 rounded-full mt-2"
            ></div>
            <div className="border-b border-slate-600 text-xs w-4">
              {item.value === "0" ? "" : item.value}
            </div>
            <div className="flex items-center gap-1">
              <div className="text-sm">{item.nome}</div>
              <div className="text-xs text-slate-500">{`(${item.modifier})`}</div>
            </div>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
}
