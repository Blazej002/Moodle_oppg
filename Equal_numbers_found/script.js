
// Model
const app = document.getElementById('app');
let start = false;
let num_1 = null;
let num_2 = null;
let times = 0;

// View
updateHtml()
function updateHtml() {
    let html = /*HTML*/ `
    <div>${num_1}</div>
    <div>${num_2}</div>
    <button onclick="run_it()">start</button>
    <div>Took ${times} times before it found a duplicate.</div>
    
    `
    app.innerHTML = html
}


// Controller

function run_it() {
    while (start != true) {
        ranNum()
        if (num_1 == num_2) {
            start = true
            console.log('-------------------------------------------')
            console.log('Num 1 = ' + num_1 + ' - ' + 'Num 2 = ' + num_2)
            console.log('Num 1 is equal to Num 2')
            console.log('-------------------------------------------')
        } else {
            times++
            console.log('---------------')
            console.log('Num 1')
            console.log(num_1)
            console.log('Num 2')
            console.log(num_2)
            console.log('---------------')
        }
    }
    start= false;
    updateHtml();
    times = 0;
}

function ranNum() {
    num_1 = gen_random_num()
    num_2 = gen_random_num()
}


function gen_random_num() {
    return Math.floor(Math.random() * 100 + 1)
}