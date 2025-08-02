import CardGrid from "@/components/organisms/CardGrid";
import { fetchPokemonList } from "@/lib/pokemon";
import { CardData } from "@/types/CardData";
import React from "react";

export default async function Pokedex() {
  const pokemonList = await fetchPokemonList();
  const cards: CardData[] = pokemonList.results.map((poke, index) => ({
    title: poke.name.toUpperCase(),
    desc: `PokeID : ${index + 1}`,
    url: `/pokedex/${index + 1}`,
  }));
  return (
    <div>
      <CardGrid cards={cards}></CardGrid>
    </div>
  );
}
