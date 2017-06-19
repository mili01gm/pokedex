'use strict';

const PokeItem = (pokemon, update) => {
    //General constants
    const pokeName = pokemon.pokemon_species.name;
    const pokeId = pokemon.entry_number;
    let idNumber;
    if (pokeId < 10) { idNumber = "00" + pokeId; } else if (pokeId < 100) { idNumber = "0" + pokeId; } else if (pokeId < 1000) { idNumber = pokeId; }

    // Poke-Container
    const pkm = $('<div class="pkm"></div>');
    const button = $('<button class="waves-effect waves-light modal-trigger"></button>');
    button.attr('data-target', pokeName);
    const img = $('<img class="responsive-img" src="http://assets.pokemon.com/assets/cms2/img/pokedex/detail/' + idNumber + '.png">');
    img.attr("alt", pokeName);
    const pokeInfo = $('<div class="poke-info"></div>');
    const icons = $('<div class="pokeIcons"></div>');
    const iHeart = $('<i class="icon heart"></i>');
    const iPokeBall = $('<i class="icon pokeball"></i>');
    const iData = $('<i class="icon data"></i>');
    const name = $('<h5>' + pokeName + '</h5>');

    button.on("click", (e) => {
        e.preventDefault();
        state.selectedPokemon = pokeId;
        update();
    });

    pokeInfo.append(name);
    button.append(img);
    button.append(pokeInfo);
    pkm.append(button);
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

        const filtered = filterByPokemon(state.pokemons, input.val());

        reRender(pokeGrid, filtered, update);
        // if (input.val()) {
        //     reRender(pokeGrid, filterByPokemon(state.pokemons, input.val()));
        // } else { reRender(pokeGrid, filterByPokemon(state.pokemons, "")); }
    });

    reRender(pokeGrid, filterByPokemon(state.pokemons, ""), update);

    return container;

}

const reRender = (pokeGrid, pokeFilter, update) => {
    pokeGrid.empty();

    pokeFilter.forEach((pokemon) => {
        pokeGrid.append(PokeItem(pokemon, update));
    });
};