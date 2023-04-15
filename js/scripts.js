
let x;
let y;
let operator; 
let state = "initialX";


// phases: initialX, moreX, initialY, moreY
function storeOperands(e) {
    if (state == "initialX") {
        x = e.target.textContent;
        state = "moreX";
        console.log(x);
    } else if (state == "moreX") {
        x += e.target.textContent;
        console.log(x);
    } else if (state == "initialY") {
        y = e.target.textContent;
        state = "moreY"
        console.log(y);
    } else if (state == "moreY") {
        y += e.target.textContent;
        console.log(y);
    }
}

function storeOperator(e) {
    operator = e.target.textContent;
    state = "initialY";
    console.log(operator);
}

function storeY(e) {
    if (state == "phaseY") {
        y = e.target.textContent;
        state = "phaseY";
    } else {
        y += e.target.textContent;
    }
    console.log(y);
}

function operate() {
    if (operator == "+") console.log(add(x, y));
    if (operator == "-") console.log(subtract(x, y));
    if (operator == "×") console.log(multiply(x, y));
    if (operator == "÷") console.log(divide(x, y));
}

function add(x, y) {
    return +(x) + +(y);
} 

function subtract(x, y) {
    return +(x) - +(y);
}

function multiply(x, y) {
    return +(x) * +(y);
}

function divide(x, y) {
    return +(x) / +(y);
}

const numberButtons = document.querySelectorAll('.number-button');
numberButtons.forEach(element => element.addEventListener('click', storeOperands));

const operatorButtons = document.querySelectorAll('.operator-button');
operatorButtons.forEach(element => element.addEventListener('click', storeOperator));

const equalsButton = document.querySelector('.equals-button');
equalsButton.addEventListener('click', operate);