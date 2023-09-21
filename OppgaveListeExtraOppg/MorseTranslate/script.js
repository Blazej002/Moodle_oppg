// Model
const app = document.getElementById('app');

const alphabetArray = "abcdefghijklmnopqrstuvwxyz æøå";
const morseCodeArray = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....',
    '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.',
    '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-',
    '-.--', '--..', ' ', '·−·−', '−−−·', '·−−·−']; //4 siste er space, æ ,ø og å

let morseTr = '';
// Controller



function translator(input) {
    for (inp of input) {
        for (letter in alphabetArray) {
            if (inp === alphabetArray[letter]) {
                console.log(alphabetArray[letter])
                morseTr += morseCodeArray[letter] + ' * '
            };
        };
    };
    updateView()
};
function clearMorse(){
    morseTr = '';
    updateView()
}


// View
updateView()
function updateView() {
    let html = /*HTML*/ `
        <input type="text" onchange="translator(this.value)">
        <div>Translated to morse:</div><br>
        <div class="output">${morseTr}</div>
        <button style ="margin-top:5px;" onclick="clearMorse()">Clear</button>
 
     `;
    app.innerHTML = html;
};


