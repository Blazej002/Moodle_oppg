

let light_on = false;

function do_sumn() {
    const light = document.getElementById('light');
    if (light_on == true) {
        light.classList.remove('off');
        light.classList.add('on');
    } else {
        light.classList.add('off');
        light.classList.remove('on');
    }
    
};

function on_light() {
    const on_b = document.getElementById('On_button')
    on_b.classList.add('active');
    on_b.innerHTML = /*HTML*/ `
    ON`;
    light_on = true;
    do_sumn();
    console.log(light_on);
}
function off_light() {
    const on_b = document.getElementById('On_button')
    on_b.classList.remove('active');
    on_b.innerHTML = /*HTML*/ `
    OFF`;
    light_on = false;
    do_sumn();
    console.log(light_on);
}

function toggle() {
    if (light_on == false) {
        on_light()
    } else {
        off_light()
    }
}

