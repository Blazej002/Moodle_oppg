// Model
const app = document.getElementById('app');
let tasks = [
    { description: 'Buy Food', isDone: true, editMode: false },
    { description: 'Buy some shit', isDone: false, editMode: false },
    { description: 'Buy some other shit', isDone: false, editMode: false },
];

let people = ['Blazej', 'John', 'Espen','Ellen']


let new_task = '';
let new_task_comp = false;
let len = tasks.length;


let myDate;
//View
updateView()
function updateView() {
    let to_do_list = '';
    let html = /*HTML*/ `
    <div style="display:flex;">
    <h1>Oppgave</h1>
    
    <div></div>
    
    <div class="frist">Frist</div>
    </div>
    <div id="output"></div>
    <input type="text" id="input">
    <button onclick="submit()">Add a new task</button><br>
    `;

    app.innerHTML = html;

    for (let i = 0; i < tasks.length; i++) {
        to_do_list += createHtmlRow(i);
    }
    output.innerHTML = to_do_list
};

// Controller

function createHtmlRow(i) {
    const task = tasks[i];
    const check_color = i % 2 ? 'orange' : 'lightblue';
    const check_it = task.isDone ? 'checked="checked"' : '';
    let per = people[Math.round(Math.random(0,3)*3)];

    // style="background-color:${check_color};"
    if (!task.editMode) return `
        <div class="boxes">
            <div class="box" style="background-color:${check_color}; text-align: center;">${task.description}
            <div>${per}</div>
            </div>
            <input  class="margin"  type="checkbox" onchange="changeIsDone(this, ${i})" ${check_it}>
            <input  class="margin"  type="date" value="" >
            <button class="margin"  onclick="deleteTask(${i})">Slett</button>
            <button class="margin"  onclick="editTask(${i})">Rediger</button>
        </div>
        </div>
    <br>
    `;
    return `<div class="boxes">
        <div id="editDes${i}" class="box"><input type="text" value="${task.description}">
        </div>
        <input  class="margin"  type="checkbox" onchange="changeIsDone(this, ${i})" ${check_it}>
        <button class="margin"  onclick="updateTask(${i})">Save</button>
    </div>
    </div>
<br>`;
};


function getRanNum() {
    return Math.floor(Math.random(0,4))
}

function updateTask(position) {
    const id = `editDes${position};`
    const inputTag = document.getElementById(id);
    tasks[position].description = inputTag.value; 
    tasks[position].editMode = false;
    updateView()
};

function submit() {
    let input = document.getElementById('input');
    new_task = input.value;
    if (new_task == '') return;
    tasks.push({ description: new_task, isDone: false, editMode: false })
    updateView()
};

function deleteTask(position) {
    tasks.splice(position, 1)
    updateView()
};

function editTask(position) {
    tasks[position].editMode = true
    updateView()
};


function changeIsDone(checkbox, index) {
    tasks[index].isDone = checkbox.checked;
};




// if (on_off === 'on'){
//     new_task_comp = true;
// } else {
//     new_task_comp = false
// }




// let is_done = tasks[i].isDone
// let html_shit_true = /*HTML*/ `
// <tr>
//     <div>${tasks[i].description}</div>
//     <div> <input type="checkbox" checked></div>
// </tr>
// `
// is_done == true ? output.innerHTML = html_shit_true: output.innerHTML = html_add;
// <tr>
// <div>${tasks[0].description}</div>
// <div> <input type="checkbox" checked></div><br>
// </tr>
// <tr>
// <div>${tasks[1].description}</div>
// <div> <input type="checkbox" checked></div>
// </tr>

// if (tasks[task].isDone == true) {
//     } else if (tasks[task].isDone == false) {
//         to_do_list += /*HTML*/`
//         <div class="boxes">
//     <div class="box">${tasks[(task)].description}
//     </div><input type="checkbox"></div>
//     </div>
//     <br>
//     `;
// }