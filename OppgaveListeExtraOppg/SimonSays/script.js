// Model
const app = document.getElementById('app');


let dif = 1000;
const colors = [
    'red',
    'yellow',
    'green',
    'blue']
const ids = [
    "butnR",
    "butnY",
    "butnG",
    "butnB"
];
let memory = [];
let player = [];
let len = memory.length;
let score = 0;
let correctClicks = 0;


// Controller

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


function addSeq(index) {
    let x = ids[index];
    blink(x)
    player.push(x)
    if (player.length == memory.length) {
        setTimeout(() => checkIfAllTrue(), 500)
    };
};


function checkIfAllTrue() {
    for (let i = 0; i <= len; i++) {
        if (memory[i] !== player[i]) {
            alert('Wrong! your score was :'+ score)
            restart()
            return;
        };
        correctClicks++
    };
    len = memory.length;
    if (correctClicks == len) {
        score++
        correctClicks = 0;
        player = [];
        updateView()
        setTimeout(() => newRound(), 1000)
    };
};
function newRound() {
    let x = getRandomInt(0, 3);
    memory.push(ids[x]);

    memory.forEach((mem, index) => {
        setTimeout(() => blink(mem), index * dif);
    });
};

function blink(mem) {
    blinkOn(mem)
    setTimeout(() => blinkOff(mem), dif - 500)
};

function blinkOn(id) {
    document.getElementById(id).style.opacity = "1"
};

function blinkOff(id) {
    document.getElementById(id).style.opacity = "0.5"
};

function startGame() {
    player = [];
    if (memory.length === 0) newRound()
};

function restart() {
    score = 0;
    memory = [];
    player = [];
    updateView()
};


function chooseDif(x) {
    dif = x;
    updateView()
};

// View
let start = false;
updateView()
function updateView() {
    start = start == false ? start = '' : start = 'disabled';
    let html = /*HTML*/ `
        <div class="a">
            <select onchange="chooseDif(this.value)">
                <option >Choose difficulty</option>       
                <option value="2500">Easy</option>       
                <option value="1000">Noraml</option>       
                <option value="250">Hard</option>       
            </select>
            
            <button onclick="startGame()">Start</button>
            <h1>Rounds: ${score}    Lenght: ${memory.length + 1}</h1>
        </div>

        <div class="a"></div>
            
        <div class="cont">
            <div id="butnR" onclick="addSeq(0)" class="buttons red "></div>
            <div id="butnY" onclick="addSeq(1)" class="buttons yellow"></div>
            <div id="butnG" onclick="addSeq(2)" class="buttons green"></div>
            <div id="butnB" onclick="addSeq(3)" class="buttons blue"></div>
        </div>
            `;
    app.innerHTML = html;
};
