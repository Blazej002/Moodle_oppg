
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
    let num1 = number1;
    let num2 = number2;  

    if(user_input === '<') {
        if(num1 < num2) {
            console.log('success')
            score++
        } else {
            console.log('fail')
            score--
        }   
    } else if (user_input === '=') {
        if (num1 == num2) {
            console.log('success')
            score++
        } else {
            console.log('fail')
            score--
        }
    } else if (user_input === '>') {
        if(num1 > num2) {
            console.log('success')
            score++
        } else {
            console.log('fail')
            score--
        }
    } else {
        console.log('Syntax error')
    }
    restart()
    console.log('Your score is' + ' ' +score)
}
