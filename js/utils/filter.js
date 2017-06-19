'use strict';

const filterByPokemon = (pokemon, query) => {
    if (pokemon) {
        return pokemon.filter(x => {
            if (x.pokemon_species.name.toLowerCase().indexOf(query.toLowerCase()) != -1) {
                return x;
            }
        });


    }
}