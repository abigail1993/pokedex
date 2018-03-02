
function getPokemon (data) {//funcion para entrar a la data
    console.log(data);// jala toda la data
    var dataPokemon = data.pokemon_entries;//con esta variable es para jalar solo pokemons
    console.log(dataPokemon); //muestra array
    dataPokemon.forEach(function(data) {// recorre el la data

        var pokemonSpecies = data.pokemon_species;
        var url = pokemonSpecies.url; //para entrar a la data y se pueda consolear su url
        var name = pokemonSpecies.name;//para entrar a la data y se pueda consolear su nombre
        console.log(url, name);
    });
};

//on esto se hace la peticion a ajax tiene el pokeapi
$.ajax({
  url: `https://pokeapi.co/api/v2/pokedex/1/`
}).done(getPokemon) //metodo para que jale la api


// se tiene que pintar en el html talvez con template y hacer un filtro  que coincida con con la primera letra y pasar a ecma 6
