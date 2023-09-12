
// Model
const app = document.getElementById('app');
let sumn;

let list = ['Sumn0', 'Sumn1', 'Sumn2', 'Sumn3', 'Sumn4', 'Sumn5', 'Sumn6', 'Sumn7' ]

// View
updateHtml()
function updateHtml() {
    let html = /*HTML*/ `
 <button onclick="do_the_thing()"></button>
`
    app.innerHTML = html
}


// Controller
function do_the_thing(){
    for (let i = 0; i < list.length; i++) {
        const ave = list[i];
        i % 3  ==  0? console.log(ave): null;
    }
}
    