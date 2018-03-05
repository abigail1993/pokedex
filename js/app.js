//funcion con la respuesta positiva para manipular su data
const response = (data) => {
    console.log('se esta cargando');
    //console.log(data);
    let dataPokemon = data.pokemon_entries;
    //console.log(dataPokemon);
    infoPokemon(dataPokemon);
};

// funcion con la respuesta de error
const error = () => {
    console.log("Trata otra vez");
};

//funcion para jalar informacion detallada de cada pokemon, de acuerdo al request de la api
const detailsPokemon = (dataDetail) => {
    console.log("la solicitud esta hecha");
    //console.log(data);
    let name = dataDetail.name;
    console.log(name);
    let weight = dataDetail.weight;
    console.log(weight);
    let height = dataDetail.height;
    console.log(height);

};

//función para obtener nombre y url de los pokemon
const infoPokemon = (dataPokemon) => {
    dataPokemon.forEach(function(data) {
        let speciesPokemon = data.pokemon_species;
        let namePokemons = speciesPokemon.name;
        //console.log(namePokemons);
        $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${namePokemons}`,
        }).done(detailsPokemon).fail(error);
        paintElements(namePokemons);

        //infoOfEachPokemon(dataPokemon)
    });
};

//funcion para pintar las tarjetas de los pokemon
const paintElements = (namePokemons) => {
    //crear elementos con sus clases y atributos
    let $divCard = $("<div />").addClass("card col-md-3");
    let $imgPokemon = $("<img />").addClass("card-img-top");
    let $cardPokemon = $("<div />").addClass("card-body");
    let $sectionIcons = $("<div />").addClass("icons");

    let $linkModal = $("<a />").attr("href", "#modal");
    let $nameCard = $("<h5 />").addClass("card-title");

    $linkModal.attr("data-toggle", "modal");
    $nameCard.text(namePokemons);
    $imgPokemon.attr("src", "http://dummyimage.com/200x200");
    $divCard.attr("style", "width: 18rem;");


    //agregar elementos hijos a su padre
    $divCard.append($imgPokemon);

    $sectionIcons.append($linkModal);
    $cardPokemon.append($sectionIcons);
    $cardPokemon.append($nameCard);
    $divCard.append($cardPokemon);
    $("#card-poke").append($divCard)

    console.log("es correcto");

};

//haciendo la peticion con ajax
$.ajax({
        url: `https://pokeapi.co/api/v2/pokedex/1/`,
        data: { limit: 10 }
    }).done(response) //haciendo el onload de la api,con funciones de respuesta positiva y negativa
