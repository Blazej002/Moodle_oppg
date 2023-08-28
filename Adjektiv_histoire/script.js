
// Model
const app = document.getElementById('app');
const words = document.getElementById('boxes');

let word1 = '___';
let word2 = '___';
let word3 = '___';
let counter = 0;

// View
updateHtml()
function updateHtml() {
    let html = /*HTML*/ `
    If ${word1} was like that what would you ${word2} him or would you put him in a ${word3}
    `
    let html_2 = /*HTML*/`        
    <div class="box_1">
        <div class="border words" onclick="do_the_thing(this.innerText)">Ave</div>
        <div class="border words" onclick="do_the_thing(this.innerText)">Have</div>
        <div class="border words" onclick="do_the_thing(this.innerText)">Dave</div>
    </div>
    <div class="box_2">
        <div class="border words" onclick="do_the_thing(this.innerText)">Save</div>
        <div class="border words" onclick="do_the_thing(this.innerText)">Pave</div>
        <div class="border words" onclick="do_the_thing(this.innerText)">Grave</div>
    </div>`
    app.innerHTML = html
    words.innerHTML = html_2
}

// Controller
function do_the_thing(that) {

    counter == 0 ? word_one(that) : (
        counter == 1 ? word_two(that) : (
            counter == 2 ? word_three(that) : counter = 0
        ) 
    ); 
    updateHtml();
    word1 === 'Dave' && word2 === 'Save' && word3 === 'Grave' ? win_check() : null; 
    
}

function win_check() {
    console.log('You did it')
    word1 = '___';
    word2 = '___';
    word3 = '___';
    counter = 0
    updateHtml()
}


function word_one(that) {
    counter++
    word1 = that
    console.log('Word '+ counter + ' success' + ' ' + word1)
    console.log('Counter: ' + counter)
}

function word_two(that) {
    counter++
    word2 = that
    console.log('Word 2 success' + ' ' + word2)
    console.log('Counter: ' + counter)
}
function word_three(that) {
    counter++
    word3 = that
    console.log('Word 3 success' + ' ' + word3)
    console.log('Counter: ' + counter)
}