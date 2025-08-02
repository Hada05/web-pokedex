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
  if (cards.length === 0) {
    return <div className="text-center text-2xl">Aw shucks, seems like Squirtle messed up the electrical components!</div>;
  }

  const totalPages = pokemonList.totalPages || 1;

  return (
    <div className="flex flex-col gap-8 min-h-screen">
      <CardGrid cards={cards}></CardGrid>
      <div className="grid grid-cols-3 w-full items-center p-2 gap-4 bg-primary rounded-2xl">
        {page > 1 && (
          <a
            href={`/pokedex?page=${page - 1}`}
            className="text-foreground font-extrabold text-center hover:scale-105"
          >
            PREVIOUS
          </a>
        )}
        <span className="text-foreground font-light text-center">
          {page} / {totalPages}
        </span>
        {page < totalPages && (
          <a
            href={`/pokedex?page=${page + 1}`}
            className="text-foreground font-extrabold text-center hover:scale-105"
          >
            NEXT
          </a>
        )}
      </div>
    </div>
  );
}
