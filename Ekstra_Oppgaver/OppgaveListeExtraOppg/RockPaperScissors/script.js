// Model
const app = document.getElementById('app');

const img = [
    '',
    './img/rock.png',
    './img/scissors.png',
    './img/paper.png',
];

const opp = './img/box.png';

let curImg = 0;
let curImgBot = 0;
let playerScore = 0;
let botScore = 0;
// Controller

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function chooseCard(type) {
    curImg = selectImg(type)
    curImgBot = botSelect()
    whoWon(curImg, curImgBot)
    updateView()
};
function whoWon(player, bot) {
    if (player == 1) {
        if (bot == 1) null;
        if (bot == 2) playerScore++;
        if (bot == 3) botScore++;
    };
    if (player == 2) {
        if (bot == 1) botScore++;
        if (bot == 2) null;
        if (bot == 3) playerScore++;
    };
    if (player == 3) {
        if (bot == 1) playerScore++;
        if (bot == 2) botScore++;
        if (bot == 3) null;
    };

};

function botSelect() {
    let x = getRandomInt(1, 3);
    return x;
};


function selectImg(type) {
    let x;
    if (type === 'rock') x = 1;
    if (type === 'scissors') x = 2;
    if (type === 'paper') x = 3;
    return x;
};


function reset() {
    botScore = 0;
    playerScore = 0;
    curImg = 0;
    curImgBot = 0;
    updateView()
};

// View
updateView()
function updateView() {
    let html = /*HTML*/ `
 <div class="opp"><img id="opp" src="${opp}"></div>
 <br>
 
 <h1 class="score">${botScore}
 <div class="vs">vs</div>
  ${playerScore}</h1>

  <button onclick="reset()" class="reset">Reset</button>
 
  <div class="box border">
    <div class="inside_Box">
       <div onclick="" class="a"><img src="${img[curImg]}"></div>
       
       <div class="font">VS</div>
       <div onclick="" class="a"><img src="${img[curImgBot]}"></div></div>
    </div>
 </div>
 
 <div class="hands">
 <div onclick="chooseCard('rock')"><img class="img" src="${img[1]}"></div>
 <div onclick="chooseCard('scissors')"><img class="img" src="${img[2]}"></div>
 <div onclick="chooseCard('paper')"><img class="img" src="${img[3]}"></div>
 </div>
`;
    app.innerHTML = html;
};


