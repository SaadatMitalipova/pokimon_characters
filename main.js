const API = "https://pokeapi.co/api/v2/pokemon/?offset=1&limit=20"
const list = document.querySelector(".list");
let previous = document.querySelector(".previous")
let next = document.querySelector(".next")
let previousLink = null;
let nextLink = null;

function renderPokemon (links){
    console.log(links);
    fetch(links)
    .then((res) => res.json())
    .then((res) => {
        console.log(res);
        
        const card = document.createElement("li")
        card.classList.add("item")

        const id = document.createElement("span")
        id.classList.add("id")
        id.innerText = "Name:  "+res.name

        const img = document.createElement('img')
        img.classList.add("img")
        img.src = res.sprites.front_default

        const height = document.createElement("span")
        height.innerText = "Height: "+res.height

        const weight = document.createElement("span")
        weight.innerText = "Weight: "+res.weight
        
        
        card.append(img, id, height, weight)

        list.append(card)


        // liHei.innerText = cur.res
        // pokiLi.innerText = pokemon
        
        // console.log(pokiLi, liHei);

    })
}

function renderPokemons (link) {
    fetch(link)
    .then((res) => res.json())
    .then((res) => {
        list.innerHTML = ""
        nextLink = res.next
        previousLink = res.previous

        res.results.forEach((pokemon) => {
                // console.log(res);
                renderPokemon(pokemon.url) 
                          
        })
    })
}
renderPokemons(API)

previous.addEventListener("click", () =>{
    renderPokemons(previousLink)
});

next.addEventListener("click", () => { 
    renderPokemons(nextLink)
});
