import React from "react";
import CardGrid from "@/components/organisms/CardPopulate";
import { CardData } from "@/types/CardData";

export default function Page() {
  const menu: CardData[] = [
    {
      title: "Pokédex",
      url: "/pokedex",
      imgURL: "/tiltedpokeball.svg",
    },
    {
      title: "About",
      color: "secondary",
      url: "/about",
      imgURL: "/tdesign_user-1.svg",
    },
    {
      title: "Contacts",
      color: "tertiary",
      url: "/contacts",
      imgURL: "/tdesign_call.svg",
    },
  ];
  return (
    <div className="flex flex-col gap-8 w-full h-full">
      <div className="flex flex-col items-center gap-8 text-center">
        <h1 className="text-[3rem] font-extrabold text-shadow-sharp text-shadow-primary">
          Welcome, Trainers !
        </h1>
        <h1 className="text-[2rem] opacity-75 font-normal">
          What are you looking for?
        </h1>
      </div>
      <CardGrid cards={menu}></CardGrid>
    </div>
  );
}
