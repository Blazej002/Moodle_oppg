// Model
const app = document.getElementById('app');
let numFasit = 0
let minimum = 0
let maximum = 100
let hint = '';
// Controller

function genNum() {
    return Math.round(Math.random() * maximum)
};
// let x = genNum()
function submit() {
    let value = document.getElementById('inputValue').value;
    if (numFasit > value) {
        hint = 'Too Little'
    }
    if (numFasit < value) {
        hint = 'Too much'
    }
    if (numFasit == value) {
        hint = 'You got it the number is' + ' '+ numFasit
    }
    updateView()
};
function reset(){
    hint = ''
    numFasit = genNum();
};




// View
updateView()
function updateView() {

    let html = /*HTML*/ `
    <h1>Guess the number!</h1>
    <div class="hint">
        <div class="inside_hint">${hint}</div>
    </div><br>
     
    <input class="input" id="inputValue" type="text" onchange="">
     <br>
    
     <button onclick="submit()" class="button">Submit</button>
     <button onclick="reset()" class="button">Restart</button>
     `;
    app.innerHTML = html;
};