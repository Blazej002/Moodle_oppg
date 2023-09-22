/*
1. Bestem hvilke pokémon du ønsker å ha med i spillet og legg disse i et array

2. Lag logikk for å møte på en tilfeldig pokémon

3. Lag muligheter for å fange eller rømme fra en pokémon

4. Lag en "vis mine pokemon on/off" knapp og få den til å fungere som nevnt i teksten ovenfor nummerlisten her.

*/
// Model
const app = document.getElementById('app');
const pokemons = [
    { name: '', img: '' },
    { name: 'fatgut', img: './img/fatguy.png' },
    { name: 'fire', img: './img/fire.png' },
    { name: 'fox', img: './img/fox.png' },
    { name: 'geko', img: './img/geko.png' },
    { name: 'pika', img: './img/pika.png' },
    { name: 'water', img: './img/water.png' }
];
let pokemonInv = [];


let chance;
let pokemonOnDisplay;
let pokemonName;
let encounter = false;
let openInv = false;
let maxPokemonInv = 3;

// Controller


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
function search() {
    openInv = false
    chance = getRandomInt(0, 100);
    if (chance <= 49) {
        setTimeout(() => alert('You found nothing'), 250)
        blank()
        return;
    };
    if (chance >= 50) 
    foundPokemon();
};
function blank() {
    pokemonOnDisplay = '';
    pokemonName = '';
    encounter = false;
};


function foundPokemon() {
    let x = getRandomInt(1, 6);
    pokemonOnDisplay = pokemons[x].img;
    pokemonName = pokemons[x].name;
    encounter = true;
    updateView()
};


function run() {
    blank(); 
    openInv = false; 
    updateView();
};
function catchPokemon() {
    if (pokemonInv.length < maxPokemonInv) {
        pokemonInv.push(pokemonOnDisplay);
        blank();
        updateView()
    } else {
        alert('You have all your slots used, if you want this pokemon set free one of your current pokemons.')
    }

};
function openCloseInv() {
    if (openInv) openInv = false;
    else if(openInv == false) openInv= true;
    blank()
    updateView()
};
function deleteInv(index) {
    pokemonInv.splice(index, 1)
    updateView()
};

function drawInv() {
    let x = ``;
    let invIndex = 0;
    for (let pokemon of pokemonInv) {
        x +=/*HTML*/ `
        <div>
            <img style="width:150px; margin-top:10px;" src="${pokemon}">
            <br>
            <button onclick="deleteInv(${invIndex})">Free them</button>
        <div>
        `;
        invIndex++
    };
    return x;
};

// View
updateView()
function updateView() {
    let encounterClass = encounter ? '' : 'hidden';
    let inventoryClass = openInv ? '' : 'hidden';

    let html = /*HTML*/ `
        <div>
            <button onclick="search()">Search</button>
            <button onclick="openCloseInv()">Open/close Inventory</button>
        </div>

        <div class="${encounterClass}">
            <img class="encounterImg" src="${pokemonOnDisplay}">
            <div>
                <button onclick="catchPokemon()">Catch</button>
                <button onclick="run()">Run</button>
            </div>
        </div>

        <div class="${inventoryClass}">
            ${drawInv()}
        </div>
    `;

    app.innerHTML = html;
};
