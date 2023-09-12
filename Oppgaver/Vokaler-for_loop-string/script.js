// Model
const app = document.getElementById('app');
const print = console.log

const txt = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempore numquam aperiam ab iste nemo debitis nobis fugit eligendi expedita voluptas velit, nisi voluptatibus a neque explicabo quae fuga cupiditate!"
const vocal_list = ['a', 'e', 'i', 'o', 'u', 'y', 'æ', 'ø', 'å']

let counter = 0;

// View
updateHtml()
function updateHtml() {
    let html = /*HTML*/`
    <p>${txt}</p>
    
    <button onclick="ave()">Print</button>
    <div style="margin:17px; font-size:xx-large;">${counter}</div>
    ` ;
    app.innerHTML = html;
}


// Controller

function ave() {
    for (let letters = 0; letters < txt.length; letters++) {
        const letter = txt[letters];
        updateHtml()
        for(let vocals = 0; vocals < vocal_list.length; vocals++){
            const vocal = vocal_list[vocals]
            letter === vocal ? counter++: null;  
            console.log()
        }
    }
    
}