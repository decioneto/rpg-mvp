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
    <div className="w-full grid grid-cols-3 gap-4">
      {ATRIBUTOS.map((item) => (
        <div
          className="bg-slate-500 aspect-square rounded relative flex items-center justify-center mb-4"
          key={item.name}
        >
          <div className="text-[10px] font-black text-slate-900 w-6 h-6 bg-slate-100 rounded-[2px] absolute top-0 left-1/2 transform -translate-1/2 flex items-center justify-center rotate-45">
            <div className="transform -rotate-45">
              {item.name.slice(0, 3).toUpperCase()}
            </div>
          </div>
          <div className="text-slate-100 font-bold text-2xl flex items-center justify-center">
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
