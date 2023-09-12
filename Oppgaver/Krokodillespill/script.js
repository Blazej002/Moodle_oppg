const top_num = document.getElementById('num_top').innerHTML;
const bot_num = document.getElementById('num_bot').innerHTML;

let score = 0
let number1 = 0;
let number2 = 0;

function generateRandomNumber() {
    return Math.round(Math.random() * 10)
}
function restart() {
    number1 = generateRandomNumber()
    number2 = generateRandomNumber()
    document.getElementById('num_top').innerHTML = number1;
    document.getElementById('num_bot').innerHTML = number2;
}


restart()
function check_if() {
    let user_input = document.getElementById('user_inp').value;
    user_input === '<' ? check_right() : (
        user_input === '>' ? check_left() : (
            user_input === '=' ? check_eq() : console.log('Syntax error')
            )
            )
            restart()
            console.log('Your score is' + ' ' + score)
        }


function score_plus() {
    console.log('success')
    score++
}
function score_minus() {
    console.log('fail')
    score--
}
function check_right() {
    number1 < number2 ? score_plus() : score_minus();
}
function check_left() {
    number1 > number2 ? score_plus() : score_minus();
}
function check_eq() {
    number1 == number2 ? score_plus() : score_minus();
}
        