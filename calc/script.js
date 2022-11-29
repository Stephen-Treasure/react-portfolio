let currentValue = "";
let operatorValue = "";
let nextValue = "";

const btns = document.querySelectorAll(".btn");
console.log(btns);
const operators = document.querySelectorAll(".operator");
const dot = document.getElementById(".");

const equal = document.getElementById("=");
let input = document.getElementById("input");

const clear = document.getElementById("C");

const calculate = (op, num1, num2) => {
    switch (op) {
        case "+":
            return parseFloat(num1) + parseFloat(num2);
        case "-":
            return parseFloat(num1) - parseFloat(num2);
        case "*":
            return parseFloat(num1) * parseFloat(num2);
        case "/":
            return parseFloat(num1) / parseFloat(num2);
        case "%":
    }
};

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (currentValue.includes(".") && btn.value == ".") {
            currentValue = currentValue.slice(0, -1);
        }
        if (nextValue.includes(".") && btn.value == ".") {
            nextValue = nextValue.slice(0, -1);
        }

        if (operatorValue === "") {
            currentValue += btn.value;
            console.log(currentValue);
            input.value = currentValue;
        } else {
            nextValue += btn.value;
            console.log(nextValue);
            input.value = nextValue;
        }
    });
});

operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        if (currentValue !== "" && operatorValue !== "" && nextValue !== "") {
            input.value = currentValue;
            currentValue = calculate(operatorValue, currentValue, nextValue);
            operatorValue = "";
            nextValue = "";
        }

        operatorValue = operator.value;
        console.log(operatorValue);
        input.value = operatorValue;
    });
});

equal.addEventListener("click", () => {
    console.log(calculate(operatorValue, currentValue, nextValue));

    input.value = calculate(operatorValue, currentValue, nextValue);

    currentValue = calculate(operatorValue, currentValue, nextValue);
    operatorValue = "";
    nextValue = "";
});

clear.addEventListener("click", () => {
    currentValue = "";
    operatorValue = "";
    nextValue = "";
    input.value = "";
});
