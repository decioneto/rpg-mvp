import Image from "next/image";

export function Items() {
  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col gap-2 p-4">
      <p className="m-0 text-xs text-slate-500 font-bold uppercase">Itens</p>
      <div className="grid grid-cols-3 grid-rows-3 gap-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            className="aspect-square bg-slate-950 flex items-center justify-center rounded"
            key={i}
          >
            <Image
              src={"/coins.svg"}
              width={32}
              height={32}
              alt="helmet"
              className="opacity-20"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
