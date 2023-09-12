// Model
const app = document.getElementById('app');

const anwser = [
    'Yes', 'Maybe', 'For sure', 'Go home',
    `Do you really think asking me you'll get the asnwer you want?`,
    'Probably', 'No chance', `Don't ask`,
];

let random_num = null;
let previous_num = null;
let svar = 'Lets see if it works';


// View
updateHtml()
function updateHtml() {
    app.innerHTML = /*HTML */`
 <div class="border margin output_box" id="output">${svar}</div>
 <input class="input_box margin" type="text" id="user_input"><br>
 <button class="submit_button margin" onclick="main()">Submit</button>
    <br>
 <button style="margin:10px;" onclick="test()">Test</button>
 `
}

// Controller

function main() {
    if (random_num === previous_num) {
        console.log('True')
        get_random_ans()
        updateHtml()
    } else {
        previous_num = random_num;
        get_random_ans()
        svar = anwser[random_num]
        console.log('False')
        updateHtml()
    }
}

function get_random_ans() {
    random_num = generate_number();
};


function generate_number() {
    return Math.floor(Math.random() * anwser.length)
}


function test() {
    console.log("Current number: " + random_num)
    console.log("   ")
    console.log("Previous number: " + previous_num)
    console.log('____________________')
    console.log(svar)
    console.log('____________________')
}
