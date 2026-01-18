import Image from "next/image";

const DICES = [
  {
    key: "d4",
    image: "/mdi_dice-d4.svg",
  },
  {
    key: "d6",
    image: "/mdi_dice-d6.svg",
  },
  {
    key: "d8",
    image: "/mdi_dice-d8.svg",
  },
  {
    key: "d10",
    image: "/mdi_dice-d10.svg",
  },
  {
    key: "d12",
    image: "/mdi_dice-d12.svg",
  },
  {
    key: "d20",
    image: "/mdi_dice-d20.svg",
  },
];

export function Dices() {
  return (
    <div className="absolute top-2 right-2">
      <div className="flex flex-col gap-2">
        {DICES.map((item) => (
          <button
            className="w-10 h-10 rounded bg-slate-500 flex items-center justify-center gap-4 cursor-pointer"
            key={item.key}
          >
            <Image src={item.image} width={32} height={32} alt="d4" />
          </button>
        ))}
      </div>
    </div>
  );
}
