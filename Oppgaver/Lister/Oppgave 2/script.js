// Model
const app = document.getElementById('app');
let items = ['melk', 'egg', 'smør', 'nuttela'];
let cart = [];
let error = 'works i guess';
let failed = 0;

// View
updateHtml()
function updateHtml() {
    let html = /*HTML*/ `

<div class="border color" onclick="buy(0)">${items[0]}</div>
<div class="border color" onclick="buy(1)">${items[1]}</div>
<div class="border color" onclick="buy(2)">${items[2]}</div>
<div class="border color" onclick="buy(3)">${items[3]}</div>
<br>
<div class="border color" onclick="sell(0)">${cart[0]}</div>
<div class="border color" onclick="sell(1)">${cart[1]}</div>
<div class="border color" onclick="sell(2)">${cart[2]}</div>
<div class="border color" onclick="sell(3)">${cart[3]}</div>
<br>
<div class="border color" style="height:100px;">
${error}___ tries ${failed}
 </div>

`;
    app.innerHTML = html
}

// Controller


function buy(index) {
    if (items[index] == null){
        error = 'error, this is an undefined element' 
        failed++
    } else {
        cart.push(items[index]);
        items.splice(index, 1);
    }
    updateHtml()
};
function sell(index_sell) {
    if (cart[index_sell] == null){
        error = 'error, this is an undefined element'
        failed++ 
    } else {
        items.push(cart[index_sell])
        cart.splice(index_sell, 1)
    }
    updateHtml()
};