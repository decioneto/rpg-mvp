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

export function Atributes() {
  return (
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
  );
}
