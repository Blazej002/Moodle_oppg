"use strict";
// Model
const app = document.getElementById('app');
let list = [
    ['', false], ['', false], ['', false],
    ['', false], ['', false], ['', false],
    ['', false], ['', false], ['', false]
];

let winCond = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
let choice = '';
let botChoice = '';

let yourTurn = null;

let opScore = 0;
let score = 0;

let lastWin = '';

// Controller


function checkWin(player) {
    for (let i = 0; i < winCond.length; i++) {
        const [a, b, c] = winCond[i];
        if (list[a][0] === player && list[b][0] === player && list[c][0] === player) {
            return true;
        }
    }
    return false;
};

function charTurn(x) {
    const check = list[x][1]
    if (yourTurn) {
        if (!check) {
            list[x][0] = choice
            list[x][1] = true
            yourTurn = false;
            updateView()
            if (checkWin(choice)) {
                alert('You won')
                score++
                resetGame('you')
                return;
            };
            if (checkStalemate()) {
                alert('Stalemate! The game is a draw.');
                resetGame();
                return;
            }
            botTurn();

        };
    };
};

function randomNum() {
    let x;
    x = Math.round(Math.random())
    return x;
};


// function checkWhoStarts() {
//     if (lastWin === '') {
//         let x = randomNum()
//         // x == 1 ? yourTurn = true : yourTurn = false;
//         if (x == 0) {
//             yourTurn = true
//         } else {
//             yourTurn = false
//             botTurn()
//         }
//     } else {
//         if (lastWin === 'bot') {
//             botTurn()
//         };
//     };
// };
function checkWhoStarts() {
    if (lastWin === '') {
        yourTurn = randomNum() === 0;
        if (!yourTurn) {
            botTurn();
        }
    } else if (lastWin === 'bot') {
        yourTurn = true;
    } else {
        yourTurn = false;
        botTurn();
    }
}


function botTurn() {
    let ran;
    ran = Math.floor(Math.random() * 8);
    for (let tries = 0; !list[ran][1];) {
        list[ran][0] = botChoice;
        list[ran][1] = true;
        yourTurn = true;
        updateView();
    };
    if (!yourTurn) {
        botTurn()
    }
    if (checkWin(botChoice)) {
        alert('You lost')
        opScore++
        resetGame()
        return;
    };
    if (checkStalemate()) {
        alert('Stalemate! The game is a draw.');
        resetGame('bot');
        return;
    }
};



function checkStalemate() {
    for (let i = 0; i < list.length; i++) {
        if (!list[i][1]) {
            return false;
        }
    }
    return true;
};


function resetGame(x) {
    list.forEach(item => {
        item[0] = '';
        item[1] = false;
    });
    lastWin = x
    choices()
};


function whatWho(what) {
    choice = what
    what === 'X' ? botChoice = 'O' : botChoice = 'X';
    checkWhoStarts()
    updateView()
};
// View
choices()

function choices() {
    let html = /*HTML*/ `
 <div>
 <h1>Score: You - ${score}<br>  Bot score - ${opScore}</h1> 
 <h1>X vs O</h1>
 <button onclick="whatWho('X')">X</button>
 <button onclick="whatWho('O')">O</button>
 </div>
`;
    app.innerHTML = html;
};

function updateView() {
    let turnDisplay;
    let hid = ''
    yourTurn ? turnDisplay = 'Your turn' : turnDisplay = '';
    yourTurn ? hid = '' : hid = 'disabled';
    let html = /*HTML*/ `
        <div class="cont">
            <button ${hid} onclick="charTurn(0)" class="square">${list[0][0]}</button>
            <button ${hid} onclick="charTurn(1)" class="square">${list[1][0]}</button>
            <button ${hid} onclick="charTurn(2)" class="square">${list[2][0]}</button>
            <button ${hid} onclick="charTurn(3)" class="square">${list[3][0]}</button>
            <button ${hid} onclick="charTurn(4)" class="square">${list[4][0]}</button>
            <button ${hid} onclick="charTurn(5)" class="square">${list[5][0]}</button>
            <button ${hid} onclick="charTurn(6)" class="square">${list[6][0]}</button>
            <button ${hid} onclick="charTurn(7)" class="square">${list[7][0]}</button>
            <button ${hid} onclick="charTurn(8)" class="square">${list[8][0]}</button>
        </div>
        <h1>
        ${turnDisplay}<br>
        Score: You - ${score} --- Bot  - ${opScore}
         </h1> 
    `;
    app.innerHTML = html;
};
