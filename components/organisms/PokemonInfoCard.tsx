import React from "react";
import TextValueList from "../molecules/TextValueList";
import TypeList from "../molecules/TypeList";

interface PokemonInfoCardProps {
  name: string;
  id: number | string;
  stats: { label: string; value: string | number }[];
  types: string[];
}

export default function PokemonInfoCard({
  name,
  id,
  stats,
  types,
}: PokemonInfoCardProps) {
  const pokemonIdentity = [
    { label: "PokéID", value: id.toString() || "Unknown ID" },
  ];

  return (
    <div className="flex flex-col items-center bg-foreground rounded-2xl p-8 text-background drop-shadow-sharp drop-shadow-primary gap-2 border-background border-2">
      <div className="flex flex-col items-center gap-4 w-full">
        <h1 className="text-2xl break-words font-extrabold text-center w-full">
          {name.toUpperCase()}
        </h1>
        <div className="opacity-75 w-full">
          <TextValueList items={pokemonIdentity} />
        </div>
        <div className="flex flex-col items-center gap-4 w-full">
          <h1 className="text-xl font-medium">Base Stats</h1>
          <div className="w-full opacity-75">
            <TextValueList items={stats} />
          </div>
          <div className="flex flex-col items-center gap-4 w-full">
            <TypeList items={types} />
          </div>
        </div>
      </div>
    </div>
  );
}
