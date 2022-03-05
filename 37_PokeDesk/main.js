const container = document.querySelector('.container')
const API_POKEMON = 'https://pokeapi.co/api/v2/pokemon/'
const pokemon_count = 150;
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
}
const main_types = Object.keys(colors)
async function getPokemon(id) {
    const { data } = await axios.get(API_POKEMON + id)
    console.log(data)
    const idPokemon = data.id.toString().padStart(3, '0')
    // const poke_types = data.types.map(typee => typee.type.name)
    // const type = main_types.find(type => poke_types.indexOf(type) > -1)
    const type = data.types[0].type.name
    const pokemon = document.createElement('div')
    pokemon.className = 'item'
    pokemon.innerHTML = `
            <div class="avatar" style="background-image:url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png)"></div>
            <div class="id">#${idPokemon}</div>
            <div class="name">${data.name}</div>
            <div class="type">Type: ${type}</div>`
    pokemon.style.backgroundColor = colors[type]
    container.appendChild(pokemon)
}
async function renderingPokemon(total, callback) {
    for (let i = 1; i <= total; ++i) {
        await callback(i)
    }
}
renderingPokemon(pokemon_count, getPokemon)
