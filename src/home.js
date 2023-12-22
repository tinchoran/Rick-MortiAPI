import { getCharacters } from "./services/getData.js"; 

const $container = document.querySelector("#characters")
const $loader = document.querySelector("#lds-ring")
const $btns = document.querySelectorAll(".btn-interact");
const $pageNumber = document.querySelector("#pageNumber")
let page = 1;

const characterList = async ( ) => {
    //Primero muestro el loader
    $loader.style.display = "grid";

    // pido los personajes
    const { results } = await getCharacters(page);

    // Escondo el loader
    $loader.style.display = "none";

    results.forEach(character => {
        $container.insertAdjacentHTML("afterbegin" , 
        `
        <article class="character">
            <img src="${character.image}" alt=${character.name} loading="lazy">
            <h2>${character.name}</h2>
            <div>
                <p>${character.name}</p>
                <p class="${ character.status.toLowerCase() }"></p>
            </div>
            <a href="/#/${character.id}">Ver detalle</a>
        </article>
        `
        )
    })
}

window.addEventListener("hashchange", () => {
    //Si el enlace lleva a /#/3, id toma el valor 3 que es el ID del personaje
    const id = location.hash.slice(1).toLocaleLowerCase().split("/")[1] || "/";
    console.log(id);
    localStorage.setItem("charID", id);
    window.location.replace("/character.html");

})

$btns.forEach(btn => {

    btn.addEventListener("click", (e) => {
        e.preventDefault()

        if(e.target.id === "btn-1" && page > 1){
            $container.innerHTML = "";
            page -= 1
            characterList(page)
            $pageNumber.innerHTML = page

        } else if(e.target.id === "btn-2"){
            $container.innerHTML = "";
            page += 1
            characterList(page)
            $pageNumber.innerHTML = page

        }
        
    })

})

characterList(page);
console.log(page);