'use strict';

const pokeDescription = (id) => {
    const description = $('<div class="description"></div>');
    $.getJSON("https://pokeapi.co/api/v2/pokemon-species/" + id + "/", (json) => {
        const detailText = $("<p></p>");
        detailText.text(json.flavor_text_entries[1].flavor_text);
        description.append(detailText);
    });
    return description;
};

const Modal = () => {
    const modal = $('<div class="modal"></div>');
    const divModal = $("<div class='div-modal'></div>");
    var tempFragment = $(document.createDocumentFragment());

    getPokemon('https://pokeapi.co/api/v2/pokemon/', (error, pokemon) => {
        if (error) console.log(error.message);

        console.log(pokemon);
        modal.attr('id', pokemon.name)
        tempFragment.append(pokeDescription(pokemon.id));
        // tempFragment.append(getCaracteristicas(data));
        // tempFragment.append(getTipo(data.types));
        divModal.append(tempFragment);
    }, state.selectedPokemon);


    modal.append(divModal);
    return modal;
}