import React from "react";
import Card from "../components/molecules/card";

export default function Pokedex() {
  return (
    <div>
      Pokedex
      <Card imgURL="/pokemon.svg" title="Title" desc="shortDesc"></Card>
    </div>
  );
}
