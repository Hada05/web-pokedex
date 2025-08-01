import React from "react";
import Card from "../components/molecules/card";

export default function Pokedex() {
  return (
    <div>
      Pokedex
      <Card imgURL="/placeholder.svg" title="Charizard" desc="PokéID : 1024" color="primary"></Card>
    </div>
  );
}
