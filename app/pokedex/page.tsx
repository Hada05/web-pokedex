import CardGrid from "@/components/organisms/CardGrid";
import { fetchPokemonList } from "@/lib/pokemon";
import { CardData } from "@/types/CardData";
import React from "react";

export default async function Pokedex({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const pokemonList = await fetchPokemonList(page);
  pokemonList.totalPages = Math.ceil(pokemonList.count / 20);
  const cards: CardData[] = pokemonList.results.map((poke) => {
    const id = poke.url.split("/").filter(Boolean).pop();
    return {
      title: poke.name.toUpperCase(),
      desc: `PokeID : ${id}`,
      url: `/pokedex/${id}`,
    };
  });

  const totalPages = pokemonList.totalPages || 1;

  return (
    <div>
      <CardGrid cards={cards}></CardGrid>
      <div className="flex justify-center mt-4 gap-4">
        {page > 1 && <a href={`/pokedex?page=${page - 1}`}>⬅ Prev</a>}
        <span>
          Page {page} / {totalPages}
        </span>
        {page < totalPages && <a href={`/pokedex?page=${page + 1}`}>Next ➡</a>}
      </div>
    </div>
  );
}
