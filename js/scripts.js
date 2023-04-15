
let x;
let y;
let operator; 
let state = "initialX";


// phases: initialX, moreX, initialY, moreY
function storeOperands(e) {
    
    if (state == "initialX") {
        x = e.target.textContent;
        state = "moreX";
        innerDisplay.textContent = x;
    } else if (state == "moreX") {
        x += e.target.textContent;
        innerDisplay.textContent = x;
    } else if (state == "initialY") {
        y = e.target.textContent;
        state = "moreY"
        innerDisplay.textContent = y;
    } else if (state == "moreY") {
        y += e.target.textContent;
        innerDisplay.textContent = y;
    }
}

function storeOperator(e) {
    operator = e.target.textContent;
    state = "initialY";
    console.log(operator);
}

function operate() {
    if (operator == "+") {
        // store answer back in x to allow more calculations
        x = `${add(x, y)}`;
        innerDisplay.textContent = x;
    } else if (operator == "–") {
        x = `${subtract(x, y)}`;
        innerDisplay.textContent = x;
    } else if (operator == "×") {
        x = `${multiply(x, y)}`;
        innerDisplay.textContent = x;
    } else if (operator == "÷") {
        x = `${divide(x, y)}`;
        innerDisplay.textContent = x;
    }
}

function clear() {
    state = "initialX";
    innerDisplay.textContent = "";
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
    if (y == 0) {
        return "Dividing by 0 has about a 1 in 12-million chance of destroying the entire universe. Please stop"
    }
    return +(x) / +(y);
}

const numberButtons = document.querySelectorAll('.number-button');
numberButtons.forEach(element => element.addEventListener('click', storeOperands));

const operatorButtons = document.querySelectorAll('.operator-button');
operatorButtons.forEach(element => element.addEventListener('click', storeOperator));

const equalsButton = document.querySelector('.equals-button');
equalsButton.addEventListener('click', operate);

const innerDisplay = document.querySelector('#inner-display');

const ac = document.querySelector('.ac');
ac.addEventListener('click', clear);