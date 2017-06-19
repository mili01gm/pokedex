'use strict';

const render = (root) => {
    root.empty();

    const wrapper = $('<div class="wrapper"></div>');
    const update = () => {
        render(root);
    }
    wrapper.append(Grid(update));
    if (state.selectedPokemon != null) {
        wrapper.append(Modal());
    }
    root.append(wrapper);

};

const state = {
    pokemons: null,
    selectedPokemon: null
};

$(_ => {
    getPKM('http://pokeapi.co/api/v2/pokedex/1/', (err, json) => {

        if (err) { return alert(err.message); }

        state.pokemons = json.pokemon_entries;

        const root = $('.root');
        render(root);
    });
})