import PageControl from "@/components/molecules/PageControl";
import CardGrid from "@/components/organisms/CardPopulate";
import { fetchPokemonList } from "@/lib/pokemon";
import { CardData } from "@/types/CardData";
import Link from "next/link";
import React from "react";
import SplitWhite from '../../components/atoms/SplitWhite';

export default async function Page({
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
      desc: `PokéID : ${id}`,
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
    <div className="flex flex-col gap-8 min-h-screen w-full">
      <SplitWhite />
      <h1 className="text-6xl sm:text-8xl font-extrabold text-center text-shadow-sharp text-shadow-secondary text-primary">
        POKÉDEX ENTRIES
      </h1>
      <CardGrid cards={cards}></CardGrid>
      <PageControl page={page} totalPages={totalPages}></PageControl>
    </div>
  );
}
