import React from "react";
import Image from "next/image";
import { CardData } from "@/types/CardData";
import Link from "next/link";

interface CardProps {
  card: CardData;
}

const styleMap: Record<string, { shadow: string; text: string }> = {
  primary: {
    shadow: "drop-shadow-primary",
    text: "text-primary",
  },
  secondary: {
    shadow: "drop-shadow-secondary",
    text: "text-secondary",
  },
  tertiary: {
    shadow: "drop-shadow-tertiary",
    text: "text-tertiary",
  },
};

function Card({ card }: CardProps) {
  const { shadow, text } = styleMap[card.color ?? "primary"];

  return (
    <Link href={card.url ?? ""}>
      <div
        className={`group flex relative bg-foreground rounded-2xl drop-shadow-sharp ${shadow} p-8 w-full h-full justify-center items-center hover:scale-103`}
      >
        {card.imgURL && (
          <div
            className={`flex justify-center items-center drop-shadow-sharp-small ${shadow} absolute left-[-3rem] w-fit h-full`}
          >
            <Image src={`${card.imgURL}`} alt="" width={100} height={100} />
          </div>
        )}
        <div className="flex flex-col justify-between text-center h-full w-full break-words">
          <h1 className={`font-semibold text-3xl py-4 ${text} text-center`}>
            {card.title}
          </h1>
          <p className="bg-primary rounded-2xl ">{card.desc}</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
