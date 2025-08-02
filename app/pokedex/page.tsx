import CardGrid from "@/components/organisms/CardGrid";
import { fetchPokemonList } from "@/lib/pokemon";
import { CardData } from "@/types/CardData";
import Link from "next/link";
import React from "react";

export default async function Pokedex({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const pokemonList = await fetchPokemonList(page);
  pokemonList.totalPages = Math.ceil(
    pokemonList.count / pokemonList.results.length
  );
  const cards: CardData[] = pokemonList.results.map((poke) => {
    const id = poke.url.split("/").filter(Boolean).pop();
    return {
      title: poke.name.toUpperCase(),
      desc: `PokeID : ${id}`,
      url: `/pokedex/${id}`,
      imgURL: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    };
  });
  if (cards.length === 0) {
    return (
      <div className="text-center text-2xl">
        Aw shucks, seems like Squirtle messed up the electrical components!
        Click{" "}
        <Link href="/">
          <span className="text-primary">here</span>
        </Link>{" "}
        to get back to the Home Page
      </div>
    );
  }

  const totalPages = pokemonList.totalPages || 1;

  return (
    <div className="flex flex-col gap-8 min-h-screen">
      <CardGrid cards={cards}></CardGrid>
      <div className="grid grid-cols-3 w-full items-center p-2 gap-4 bg-primary rounded-2xl">
        {page > 1 ? (
          <a
            href={`/pokedex?page=${page - 1}`}
            className="text-foreground font-extrabold text-center hover:scale-105"
          >
            PREVIOUS
          </a>
        ) : (
          <span></span>
        )}
        <span className="text-foreground font-light text-center">
          {page} / {totalPages}
        </span>
        {page < totalPages ? (
          <a
            href={`/pokedex?page=${page + 1}`}
            className="text-foreground font-extrabold text-center hover:scale-105"
          >
            NEXT
          </a>
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
}
