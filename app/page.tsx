import React from "react";
import CardGrid from "./components/organisms/CardGrid";
import { CardData } from "./types/CardData";

export default function Home() {
  const menu: CardData[] = [
    {
      title: "Pokédex",
      url: "/pokedex",
      imgURL:"tiltedpokeball.svg"
    },
    {
      title: "About",
      color: "secondary",
      url: "/about",
      imgURL:"tdesign_user-1.svg"
    },
    {
      title: "Contacts",
      color: "tertiary",
      url: "/contacts",
      imgURL: "tdesign_call.svg"
    },
  ];
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-center gap-8 text-center">
        <h1 className="text-[3rem] font-extrabold text-shadow-sharp text-shadow-primary">
          Welcome, Trainers !
        </h1>
        <h1 className="text-[2rem] opacity-75 font-normal">
          Whatcha lookin' for?
        </h1>
      </div>
      <CardGrid cards={menu}></CardGrid>
    </div>
  );
}
