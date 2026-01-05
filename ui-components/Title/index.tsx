import Image from "next/image";

type TitleProps = {
  text: string;
};

export function Title({ text }: TitleProps) {
  return (
    <div className="flex items-center text-3xl gap-3 uppercase font-bold">
      <div>
        <Image src="/title-ornament.png" width={10} height={10} alt="" />
      </div>
      <div className="max-w-67.5 text-center">{text}</div>
      <div>
        <Image
          src="/title-ornament.png"
          width={10}
          height={10}
          alt=""
          className="-scale-100"
        />
      </div>
    </div>
  );
}
