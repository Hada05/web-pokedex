import React from "react";
import Image from "next/image";
import { CardData } from "@/types/CardData";
import Link from "next/link";

interface CardProps {
  card: CardData;
  variants?: "pokemon" | "fillContainerL" | "fillContainerR";
}

const styleMap: Record<
  string,
  { shadow: string; text: string; bg: string; textShadow: string }
> = {
  primary: {
    shadow: "drop-shadow-primary",
    text: "text-primary",
    bg: "bg-primary",
    textShadow: "text-shadow-primary",
  },
  secondary: {
    shadow: "drop-shadow-secondary",
    text: "text-secondary",
    bg: "bg-secondary",
    textShadow: "text-shadow-secondary",
  },
  tertiary: {
    shadow: "drop-shadow-tertiary",
    text: "text-tertiary",
    bg: "bg-tertiary",
    textShadow: "text-shadow-tertiary",
  },
};

const variantsAllowed = {
  pokemon: "pokemon",
  fillContainerL: "fillContainerL",
  fillContainerR: "fillContainerR",
};

function Card({ card, variants = "pokemon" }: CardProps) {
  card.color = card.color ?? "primary";
  const { shadow, text, textShadow } = styleMap[card.color ?? "primary"];

  switch (variants) {
    case variantsAllowed.pokemon:
      // POKEMON CARD
      return (
        <Link href={card.url ?? ""}>
          <div
            className={`group flex relative bg-foreground rounded-2xl drop-shadow-sharp ${shadow} p-8 w-full h-full justify-center items-center hover:scale-103 border-background border-2`}
          >
            {card.imgURL && (
              <div
                className={`flex justify-center items-center ${shadow} absolute left-[-3rem] w-fit h-full`}
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

      break;

    case variantsAllowed.fillContainerL:
      // FILL CONTAINER LEFT
      return (
        <div
          className={`flex flex-wrap sm:grid grid-cols-4 w-full h-full bg-foreground rounded-2xl drop-shadow-sharp ${shadow} justify-center items-center p-8 gap-8 border-background border-2`}
        >
          <Image
            src={`${card.imgURL}`}
            alt=""
            width={100}
            height={100}
            className={`object-contain w-full drop-shadow-sharp-small ${shadow}
            `}
          />
          <div className="flex flex-col justify-baseline items-center col-span-3 h-full gap-4">
            <h1
              className={`font-semibold text-3xl text-background text-center text-shadow-sharp-small ${textShadow}`}
            >
              {card.title}
            </h1>
            <div className="flex justify-center items-center w-full h-full">
              <p className={`bg-${card.color} rounded-2xl p-4 text-center`}>
                {card.desc}
              </p>
            </div>
          </div>
        </div>
      );
      break;

    case variantsAllowed.fillContainerR:
      // FILL CONTAINER RIGHT
      return (
        <div
          className={`flex flex-wrap sm:grid grid-cols-4 w-full h-full bg-foreground rounded-2xl drop-shadow-sharp ${shadow} justify-center items-center p-8 gap-8 border-background border-2`}
        >
          <Image
            src={`${card.imgURL}`}
            alt=""
            width={100}
            height={100}
            className={`order-1 sm:order-2 object-contain w-full drop-shadow-sharp-small ${shadow}
            `}
          />
          <div className="order-2 sm:order-1 flex flex-col justify-baseline items-center col-span-3 h-full gap-4">
            <h1
              className={`font-semibold text-3xl text-background text-center text-shadow-sharp-small ${textShadow}`}
            >
              {card.title}
            </h1>
            <div className="flex justify-center items-center w-full h-full">
              <p className={`bg-${card.color} rounded-2xl p-4 text-center`}>
                {card.desc}
              </p>
            </div>
          </div>
        </div>
      );
      break;

    default:
      break;
  }
}

export default Card;
