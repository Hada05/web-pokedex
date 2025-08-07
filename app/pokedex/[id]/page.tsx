import React from "react";
import { fetchPokemon } from "@/lib/pokemon";
import PokemonInfoCard from "@/components/organisms/PokemonInfoCard";
import PokemonImageCard from "@/components/organisms/PokemonImageCard";
import SplitWhite from "../../../components/atoms/SplitWhite";

interface PageProps {
  params: {
    id: string;
  };
}

export default async function PokemonDetails({ params }: PageProps) {
  const pokemon = await fetchPokemon(parseInt(params.id));

  const statsList =
    pokemon.stats?.map((stat) => ({
      label: stat.stat?.name?.toUpperCase() || "Unknown Stat",
      value: stat.base_stat ?? "-",
    })) ?? [];

  const typesList =
    pokemon.types?.map(
      (type) => type.type?.name?.toUpperCase() || "Unknown Type"
    ) ?? [];

  return (
    <div className="flex flex-col gap-8 min-h-screen w-full">
      <h1 className="text-6xl sm:text-8xl font-extrabold text-center text-shadow-sharp text-primary text-shadow-secondary">
        POKÉMON DETAILS
      </h1>
      <div className="flex flex-col items-center sm:grid grid-cols-2 gap-4 p-4 h-full w-full">
        <SplitWhite />
        <PokemonInfoCard
          name={pokemon.name || "Unknown"}
          id={pokemon.id || "Unknown"}
          stats={statsList}
          types={typesList}
        />
        <PokemonImageCard
          imageURL={
            pokemon.sprites?.other?.["official-artwork"]?.front_default ||
            "/placeholder.svg"
          }
          clickURL={pokemon.cries?.latest || ""}
        />
      </div>
    </div>
  );
}
