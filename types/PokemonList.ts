export interface PokemonList {
  count: number;
  next: string;
  previous: null;
  results: ListedPokemon[];
  pages?: number;
  totalPages?: number;
}

export interface ListedPokemon {
  name: string;
  url: string;
}
