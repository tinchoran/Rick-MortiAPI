import { getCharacter } from "./services/getData.js";

const $container = document.querySelector("#character")
const $loader = document.querySelector("#lds-ring")

const getID = localStorage.getItem("charID")

const loadCharacter = async ( id ) => {

    $loader.style.display = "grid";

    const data = await getCharacter(id);

    $loader.style.display = "none";

    $container.insertAdjacentHTML("beforeend", 
    `
    <article class="character">

        <img src="${data.image}" alt="${data.name}" loading="lazy">
        <h2>${data.name}</h2>
        <p class="data"><span>Origen: </span>${data.origin.name}</p>
        <p class="data"><span>Locación actual </span>${data.location.name}</p>
        <div>
            <p class="data"><span>Especie: </span>${data.species}</p>
            <p class="${data.status.toLowerCase()}"></p>
        </div>
    </article>
    `
    )

}

loadCharacter(getID)