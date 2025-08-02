import { PokemonEntry } from "@/types/PokemonEntry";
import { PokemonList } from "@/types/PokemonList";

export async function fetchPokemon(id: number): Promise<PokemonEntry> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (!res.ok) throw new Error("Error fetching Pokémon");
  return res.json();
}

export async function fetchPokemonList(): Promise<PokemonList> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20`);
  if (!res.ok) throw new Error("Error fetching Pokémon list");
    const posts = await res.json();
    console.log(posts)
  return posts;
}
