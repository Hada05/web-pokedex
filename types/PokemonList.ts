export interface PokemonList {
    count:    number;
    next:     string;
    previous: null;
    results:  ListedPokemon[];
}

export interface ListedPokemon {
    name: string;
    url:  string;
}
