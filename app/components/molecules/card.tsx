import React from "react";
import Image from "next/image";
import { CardData } from "@/app/types/CardData";

interface CardProps {
  card: CardData;
}

const shadowMap: Record<string, string> = {
  primary: "drop-shadow-primary",
  secondary: "drop-shadow-secondary",
  tertiary: "drop-shadow-tertiary",
};

function Card({ card }: CardProps) {
  const dropShadowColor = shadowMap[card.color ?? "primary"];

  return (
    <div
      className={`flex flex-wrap bg-foreground rounded-2xl drop-shadow-sharp ${dropShadowColor} p-4 w-full h-full justify-center items-center`}
    >
      {card.imgURL && (
        <div className="w-1/3 flex justify-center items-center">
          <Image src={`${card.imgURL}`} alt="" width={100} height={100}></Image>
        </div>
      )}
      <div className="flex flex-col justify-center text-center h-full text-background w-2/3">
        <h1 className="font-semibold text-4xl py-4">{card.title}</h1>
        <p className="bg-primary text-foreground rounded-2xl">{card.desc}</p>
      </div>
    </div>
  );
}

export default Card;
