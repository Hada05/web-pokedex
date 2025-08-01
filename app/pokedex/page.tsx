import React from "react";
import Card from "../components/molecules/Card";
import { CardData } from "../types/CardData";

export default function Pokedex() {

  const testCard: CardData = {
    title: "rawr",
    imgURL: "/pokemon.svg",
    desc: "this is a description"
  }
  return (
    <div>
      Pokedex
      <Card card={testCard}></Card>
    </div>
  );
}
