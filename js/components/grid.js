'use strict';

const PokeItem = (pokemon, update) => {
    const pkm = $('<div class="pkm"></div>');
    const name = $('<h3>' + pokemon.pokemon_species.name + '</h3>');
    const img = $('<img src="http://serebii.net/art/th/' + pokemon.entry_number + '.png">');

    pkm.append(img);
    pkm.append(name);

    return pkm;
}

const Grid = (update) => {
    const container = $('<div class="container"></div>');
    const row = $('<div class="row"></div>');
    const inputField = $('<div class="input-field col s8"></div>');
    const input = $('<input id="search-bar" type="text" class="validate"></input>');
    const label = $('<label for="search-bar"><i class="material-icons">search</i></label>');
    const pokeGrid = $('<div class="pokegrid"></div>');


    inputField.append(input);
    inputField.append(label);
    row.append(inputField);
    container.append(row);
    container.append(pokeGrid);

    input.on('keyup', (e) => {
        if (input.val()) {
            reRender(pokeGrid,filterByPokemon(state.pokemons.pokemon_entries, input.val()));
        } else { reRender(pokeGrid,filterByPokemon(state.pokemons.pokemon_entries, ""));}
    });

    reRender(pokeGrid,filterByPokemon(state.pokemons.pokemon_entries, ""));

    return container;

}

const reRender = (pokeGrid,pokeFilter) => {
    console.log(pokeFilter)
    pokeGrid.empty();
    const pokeVar = state.pokemons.pokemon_entries.pokemon_species;
    pokeFilter.forEach((pokeVar) => {
        pokeGrid.append(PokeItem(pokeVar, _ => {reRender(pokeGrid,pokeFilter)}));
    });
};

