const input = document.querySelector("#input")
const button = document.querySelector("#button")
const pokemon_name = document.querySelector("#pokemon_name")
const pokemon_number = document.querySelector("#pokemon_number")
const pokemon_image = document.querySelector("#pokemon_image")

input.value = 0

let pokemon_Number = Number(input.value)

button.addEventListener("click", () => {
    if(input.value!=""){
        pokemon_Number=Number(input.value)
        loadAPI()
    }
})

document.addEventListener("keydown", function(event){
    pokemon_Number=Number(input.value)
    loadAPI()
})

async function loadAPI(){
    pokemon_Number=Number(input.value)+1
        
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon_Number}`

    const resposta = await fetch(url);

    const data = await resposta.json()

    console.log(data)
    pokemon_number.innerText=`#${data.id} `
    pokemon_name.innerText=`${data.name}`
    pokemon_image.src=data.sprites.front_default

    
}
loadAPI()