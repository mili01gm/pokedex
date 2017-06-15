'use strict';

const render = (root) => {
    root.empty();

    const wrapper = $('<div class="wrapper"></div>');
    wrapper.append(Grid(_=> render(root)));
    root.append(wrapper);

};

const state = {
    pokemons: null,
    selectedPokemon: null
};

$(_ => {
    getPKM('http://pokeapi.co/api/v2/pokedex/1/', (err, json) => {

        if (err) { return alert(err.message); }

        state.pokemons = json;

        const root = $('.root');
        render(root);
    });
})
