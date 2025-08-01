import React from "react";
import Card from "../components/molecules/Card";
import { CardData } from "../types/CardData";

export default function Pokedex() {

  const id:string = "rawr"
  const testCard: CardData = {
    title: "Bulbasaur",
    imgURL: "/pokemon.svg",
    desc: `PokeID : ${id}`
  }
  return (
    <div>
      Pokedex
      <Card card={testCard}></Card>
    </div>
  );
}
