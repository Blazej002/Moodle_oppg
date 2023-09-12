
// Model
const app = document.getElementById('app');



// Controller
function addSumn(value) {
    let thing = value;

    document.getElementById('displayId').value += thing
};


function clr() {
    document.getElementById('displayId').value = '';
};

function sum() {
    let x = document.getElementById('displayId').value;
    let y = eval(x)
    document.getElementById('displayId').value = y;
};
function plusMinus() {
    sum()
    let x = document.getElementById('displayId').value;
    let y = 0 - x
    document.getElementById('displayId').value = y
};
//x²
function yxy() {
    sum()
    let x = document.getElementById('displayId').value;
    let y = x * x
    document.getElementById('displayId').value = y
};

//√
function xyx() {
    sum()
    let x = document.getElementById('displayId').value;
    let y = Math.sqrt(x)
    document.getElementById('displayId').value = y
};

function backspace() {
    let x = document.getElementById('displayId').value;
    const newNum = x.slice(0, -1);
    // let trueNum = parseInt(newNum);
    document.getElementById('displayId').value = newNum;
};


// View
updateView()
function updateView() {
    let html = /*HTML*/ `
 <div>
 <input type="text" id="displayId" class="display">
 <br><button onclick="backspace()" class="backspace">Backspace</button>
 <div class="container">

 <button onclick="xyx()" class="button">√</button>
 <button onclick="yxy()" class="button">x²</button>
 <button value="/100" onclick="addSumn(this.value)" class="button">%</button>
 <button onclick="clr()" class="button">C</button>


 <button value="7" onclick="addSumn(this.value)" class="button">7</button>
 <button value="8" onclick="addSumn(this.value)" class="button">8</button>
 <button value="9" onclick="addSumn(this.value)" class="button">9</button>
 <button value="*" onclick="addSumn(this.value)" class="button">*</button>
 <button value="4" onclick="addSumn(this.value)" class="button">4</button>
 <button value="5" onclick="addSumn(this.value)" class="button">5</button>
 <button value="6" onclick="addSumn(this.value)" class="button">6</button>
 <button value="-" onclick="addSumn(this.value)" class="button">-</button>
 <button value="1" onclick="addSumn(this.value)" class="button">1</button>
 <button value="2" onclick="addSumn(this.value)" class="button">2</button>
 <button value="3" onclick="addSumn(this.value)" class="button">3</button>
 <button value="+" onclick="addSumn(this.value)" class="button">+</button>
 
 
 <button onclick="plusMinus()" class="button del">+/-</button>
 <button value="0" onclick="addSumn(this.value)" class="button">0</button>
 <button value="," onclick="addSumn(this.value)" class="button">,</button>
 <button onclick="sum()" class="button">=</button>

 </div>
`;
    app.innerHTML = html;
};