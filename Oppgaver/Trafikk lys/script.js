
function turn_red(on, off1, off2) {
    document.getElementById(on).classList.remove('not_selected');
    document.getElementById(off1).classList.add('not_selected');
    document.getElementById(off2).classList.add('not_selected');
}

function automatic() {
    setTimeout(() => turn_red('red_1', 'yellow_1', 'green_1'), 10);
    setTimeout(() => turn_red('yellow_1', 'red_1', 'green_1'), 900);
    setTimeout(() => turn_red('green_1', 'red_1', 'yellow_1'), 2500);
}

function ave() {
    setInterval(automatic, 3000);
}
ave();