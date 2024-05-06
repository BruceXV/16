import { getcharactersFetch } from "./peticiones/getCharactersFetch.js";

let currenyPage = 1; //paginaActual
let loadedCharacters = []; //aray para ver que vamos a cargar

let isloadin = false;

let nombre = ""; //nombre a buscar en el input

const loadInitialCharacter = async () => {
    const Characters = await getcharactersFetch();
    createCharacterCards(characters);
}

export const createCharacterCards = async (characters) => {
    
    const personajesRow = document.getElementById('personajesRow');

    characters.map((character) =>{
        const {id, name, race, ki,description, image, maxki, gender } = character;

        if (!loadedCharacters.includes(id)) {
            loadedCharacters.push(id);

            const divRow = document.createElement('div');
            divRow.classList.add("col-xl-3");
            divRow.classList.add("col-xl-3");
            divRow.classList.add("col-xl-3");
            divRow.classList.add("col-sm-12");
            divRow.classList.add("col-sm-12");

            const card = documentElement('div');
            card.classlist.add('card');
            card.classlist.add('mt-2');
            card.classlist.add('mb-2');

            const imgCard = document.createElement('img');
            imgCard.classlit.add('card.img-top');
            imgCard.classlit.add('text-center');
            imgCard.classlit.add('mx-auto');
            imgCard.classlit.add('w-75');
            imgCard.src = image;

            const divBody = document.createElement('div');
            divBody.classList.add('card-body');
            divBody.classList.add('card-center');
            divBody.classList.add('card-auto');

            const tituloC = document.createElement('h5');
            tituloC.classlist.add('card-title');
            tituloC.textContent = name;

            const levelC = document.createElement('p');
            levelC.classlist.add('card-text');
            levelC.textContent = ki;

            const btnVer = document.createElement('button');
            btnVer.classList.add('btn');
            btnVer.classList.add('btn-primary');
            btnVer.classList.add('text-center');
            btnVer.classList.add('mx-auto');

            btnVer.textContent = 'ver detalles';

            btnVer.addEventListener.add("click", ()=> {
                console.log("hola");
            });

            divRow.appendChild(card);
            card.appendChild(imgCard);
            card.appendChild(divBody);

            divBody.appendChild(tituloC);
            divBody.appendChild(levelC);
            divBody.appendChild(btnVer);

            personajesRow.appendChild(divRow);
                
        }
    });
}

const loadInitialCharacters = async () => {
    const character = await getcharactersFetch();
    createCharacterCards(characters);
}

export const loadMoreCharacters = async () => {
    if (isloading) return;
    isloading = true;

    currentPage++;
    const character = await getcharactersFetch(currentPage);
    if (characters.lengt > 0) {
        createCharacterCards(character);
    } else {
        //No more caracteristicads to load
        alert("No hay mas personajes disponibles.")
    }

    isloading = false;

}

window.onload = loadInitialCharacters;

window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeigth, clientHeight } = document.documentElement;

    if (scrollTop = clientHeight >= scrollHeigth - $ && !isloading ) { //el = de scrolltop
        loadMoreCharacters();
    }
});

//por el momenyto se guarda
/*getcharactersFetch()
    .then((response)=> {
        console.log(response);
    })
    .catch((error) =>{
        console.log(error);
    })*/

    // getcharactersFetch()
    // then( response => console.log(response))
    // catch(error =>)