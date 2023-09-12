
let numb = 0;
function empty() {
    numb++
    scoreboard(numb)
    checking()
}
function full() {
    numb++;
    scoreboard(numb)
    checking()
};
function checking() {
    if (numb == 6) {
        alert('congratulation you won, you got ' + numb + ' points')
    } else if (numb == 8) {
        alert('404 easter egg not found')
    } else if (numb == 10){
        alert('tf, why you still here?')
        alert('get out')
        // window.location.reload()
        window.location.replace("https://www.jw.org/no/bibliotek/blad/");
    }
} 

function add_pics(id, new_id, items) {
        empty()
        console.log(numb)
        loot_change1(id,new_id,items) 
}

function add_pics1(id, new_id, items) {
    full()
    console.log(numb)
    loot_change(id,new_id,items)
}

function remove_pic(id, new_id, items){
    document.getElementById(id).innerHTML = /*HTML*/ `
    <img src="/img/${items}.jpg">
    `;
    document.getElementById(new_id).innerHTML = /*HTML*/ `
    
    `
}
function scoreboard(numb){
    document.getElementById('scoreboard').innerHTML = /*HTML*/ `
    SCOREBOARD: ${numb}
    `
}



function loot_change1(id,new_id, items){
    document.getElementById(id).innerHTML = /*HTML*/ `
    <img src="/img/${items}.jpg">
    `;
    document.getElementById(new_id).innerHTML = /*HTML*/ `
    
    `
};

function loot_change(id,new_id, items){
    document.getElementById(new_id).innerHTML = /*HTML*/ `
    <img src="/img/${items}.jpg">
    `;
    document.getElementById(id).innerHTML = /*HTML*/ `
    
    `
};

function remove_all() {
    document.getElementById('insideInv').innerHTML = /*HTML*/ ` `
    document.getElementById('insideLoot').innerHTML = /*HTML*/ `
    <div id="loot1" onclick="add_pics1('loot1', 'box1', 'bread')"><img src="/img/bread.jpg"></div>
    <div id="loot2" onclick="add_pics1('loot2', 'box2', 'bread')"><img src="/img/bread.jpg"></div>
    <div id="loot3" onclick="add_pics1('loot3', 'box3', 'bread')"><img src="/img/bread.jpg"></div>
    <div id="loot4" onclick="add_pics1('loot4', 'box4', 'bread')"><img src="/img/bread.jpg"></div>
    <div id="loot5" onclick="add_pics1('loot5', 'box5', 'bread')"><img src="/img/bread.jpg"></div>
    <div id="loot6" onclick="add_pics1('loot6', 'box6', 'bread')"><img src="/img/bread.jpg"></div>`
}


function open_inv() {
    document.getElementById('insideInv').innerHTML = /*HTML*/ `
    <div id="box1" class="inv_boxer" onclick="add_pics('box1', 'loot1', 'bread')"></div>
    <button class="remove_b" onclick="remove_pic('loot1', 'box1', 'bread')">Remove</button>
    <div id="box2" class="inv_boxer" onclick="add_pics('box2', 'loot2', 'bread')"></div>
    <button class="remove_b" onclick="remove_pic('loot2', 'box2', 'bread')">Remove</button>
    <div id="box3" class="inv_boxer" onclick="add_pics('box3', 'loot3', 'bread')"></div>
    <button class="remove_b" onclick="remove_pic('loot3', 'box3', 'bread')">Remove</button>
    <div id="box4" class="inv_boxer" onclick="add_pics('box4', 'loot4', 'bread')"></div>
    <button class="remove_b" onclick="remove_pic('loot4', 'box4', 'bread')">Remove</button>
    <div id="box5" class="inv_boxer" onclick="add_pics('box5', 'loot5', 'bread')"></div>
    <button class="remove_b" onclick="remove_pic('loot5', 'box5', 'bread')">Remove</button>
    <div id="box6" class="inv_boxer" onclick="add_pics('box6', 'loot6', 'bread')"></div>
    <button class="remove_b" onclick="remove_pic('loot6', 'box6', 'bread')">Remove</button>
    `
}

// Blazej var har