import { PokemonEntry } from "@/types/PokemonEntry";
import { PokemonList } from "@/types/PokemonList";

export async function fetchPokemon(id: number): Promise<PokemonEntry> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (!res.ok) throw new Error("Error fetching Pokémon");
  return res.json();
}

export async function fetchPokemonList(page = 1): Promise<PokemonList> {
  const limit = 21; // Number of Pokémon per page
  const offset = (page - 1) * limit;
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  if (!res.ok) throw new Error("Error fetching Pokémon list");
  const posts = await res.json();
  console.log(posts);
  return posts;
}
