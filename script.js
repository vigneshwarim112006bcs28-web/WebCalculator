
let display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

function calculate() {
    let expression = display.value;

    if (expression === "") {
        return;
    }

    try {
        if (!/^[0-9+\-*/.()\s]+$/.test(expression)) {
            throw new Error("Invalid input");
        }

        let result = Function(
            '"use strict"; return (' + expression + ')'
        )();

        if (!Number.isFinite(result)) {
            display.value = "Cannot divide by zero";
        } else {
            display.value = Number(result.toFixed(8)).toString();
        }
    } catch (error) {
        display.value = "Error";
    }
}

document.addEventListener("keydown", function(event) {
    if (/^[0-9.+\-*/()]$/.test(event.key)) {
        appendValue(event.key);
    } else if (event.key === "Enter") {
        calculate();
    } else if (event.key === "Backspace") {
        deleteLast();
    } else if (event.key === "Escape") {
        clearDisplay();
    }
});
