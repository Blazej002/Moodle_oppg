// Model
const app = document.getElementById('app');
const print = console.log;

const txt = "Hei på deg";
let reverse_txt = '';

const len_txt = txt.length;

// View
updateHtml()
function updateHtml() {
    let html = /*HTML*/ `
<div>${txt}</div>
<button onclick="reverse_letters()">Print</button>
<div>${reverse_txt}</div>
 `
    app.innerHTML = html
}


// Controller


function reverse_letters() {
    for (let letters = 0 ;letters < len_txt; letters++) {
        const letter = txt[((len_txt-1)-letters)];
        print(letter)
        reverse_txt += letter
    }
    updateHtml()
}