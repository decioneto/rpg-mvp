import Image from "next/image";

const PLACEHOLDERS = [
  {
    alt: "right hand space",
    image: "/equipments/game-icons_crossed-swords.svg",
  },
  {
    alt: "chest space",
    image: "/equipments/game-icons_chest-armor.svg",
  },
  {
    alt: "left hand space",
    image: "/equipments/game-icons_attached-shield.svg",
  },
  {
    alt: "bow space",
    image: "/equipments/game-icons_bow-arrow.svg",
  },
  {
    alt: "legs space",
    image: "/equipments/game-icons_armored-pants.svg",
  },
  {
    alt: "gloves space",
    image: "/equipments/game-icons_gloves.svg",
  },
  {
    alt: "throwables space",
    image: "/equipments/game-icons_arrow-cluster.svg",
  },
  {
    alt: "feet space",
    image: "/equipments/game-icons_leg-armor.svg",
  },
  {
    alt: "ring space",
    image: "/equipments/game-icons_big-diamond-ring.svg",
  },
];

export function Equipamento() {
  return (
    <div className="bg-slate-900 border border-slate-800 h-full min-h-95 flex flex-col gap-2">
      <div className="flex-1 h-full grid grid-cols-3 grid-rows-4 gap-3 p-4">
        <div className="aspect-square invisible" />
        <div className="col-start-2 aspect-square bg-slate-950 flex items-center justify-center rounded">
          <Image
            src={"/equipments/game-icons_spartan-helmet.svg"}
            width={32}
            height={32}
            alt="helmet"
            className="opacity-20"
          />
        </div>
        <div className="aspect-square invisible" />
        {PLACEHOLDERS.map((item) => (
          <div
            className="bg-slate-950 aspect-square flex items-center justify-center rounded"
            key={item.alt}
          >
            <Image
              src={item.image}
              width={32}
              height={32}
              alt={item.alt}
              className="opacity-20"
            />
          </div>
        ))}
      </div>
      <div className="flex gap-3 px-4 mb-2 items-baseline">
        <div className="text-xs text-slate-400">Classe de Armadura:</div>
        <div>18</div>
      </div>
    </div>
  );
}
